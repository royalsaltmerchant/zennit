from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog import db, bcrypt, ma
from flaskblog.models import User, Post
from flaskblog.users.utils import save_picture, send_reset_email
from functools import wraps
import logging, json
import jwt
import datetime
import os

users = Blueprint('users', __name__)

class CommentSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id", 
            "title", 
            "date_posted", 
            "content",
            "post_id",
            "post.title",
            "user_id",
            "user.username",
            "user.image_file"
            )

comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)

class PostSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Post
        fields = ("id", "title", "date_posted", "content", "user_id", "comments")
    comments = ma.Nested(CommentSchema, many=True)

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        fields = ("id", "username", "email", "password", "image_file", "posts")
    posts = ma.Nested(PostSchema, many=True)

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@users.route('/api/register', methods=['GET', 'POST'])
def api_register():
    data = json.loads(request.data)
    username = data['username']
    email = data['email'].lower()
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')

    user = User(username=username, email=email, password=hashed_password)
    db.session.add(user)
    db.session.commit()

    user_serialized = user_schema.dump(user)
    response = Response(
        response=json.dumps(user_serialized),
        status=201,
        mimetype='application/json'
    )

    return response

@users.route('/api/login', methods=['GET', 'POST'])
def api_login():
    data = json.loads(request.data)

    email = data['email'].lower()
    user = User.query.filter_by(email=email).first()
    if user and bcrypt.check_password_hash(user.password, data['password']):
        payload = {
            'user_id': user.id,
            'exp': datetime.datetime.utcnow()+datetime.timedelta(hours=24)
            }
        token = jwt.encode(payload, os.environ.get('SECRET_KEY'), algorithm="HS256")

        response = Response(
            response=json.dumps({'token': token}),
            status=200,
            mimetype='application/json'
    )
        return response
    else:
        return Response(
            response='Incorrect account information',
            status=400
        )

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if request.headers["x-access-token"] != "null":
            req_token = request.headers["x-access-token"]
            token_split = req_token.split(' ')
            token = token_split[1]
            try:
                verification = jwt.decode(token, os.environ.get('SECRET_KEY'), algorithms=["HS256"])
                current_user = db.session.query(User).filter_by(id=verification['user_id']).first()
            except:
                raise
                return jsonify({'message': 'Invalid token or user'})

        else:
            return Response(
            response='No token passed',
            status=400
        )

        return f(current_user, *args, **kwargs)
    return decorated

@users.route('/api/verify_jwt', methods=['GET', 'POST'])
def api_verify_jwt():
    token = None

    if 'x-access-token' in request.headers:
        req_token = request.headers["x-access-token"]
        token_split = req_token.split(' ')
        token = token_split[1]

    if not token:
        raise
        return Response(
            response='No token passed',
            status=400
        )
    try:
        verification = jwt.decode(token, os.environ.get('SECRET_KEY'), algorithms=["HS256"])
        current_user = db.session.query(User).filter_by(id=verification['user_id']).first()
        user_serialized = user_schema.dump(current_user)
        return Response(
            response=json.dumps(user_serialized),
            status=200,
            mimetype='application/json'
        )
    except:
        raise
        return Response(
            response='Token is invalid',
            status=400
        )

@users.route('/api/get_user', methods=['GET', 'POST'])
@token_required
def get_user(current_user):
    user_serialized = user_schema.dump(current_user)
    return Response(
        response=json.dumps(user_serialized),
        status=200,
        mimetype='application/json'
    )

@users.route('/api/update_user', methods={'GET', 'POST'})
@token_required
def update_user(current_user):
    if request.files['image_file']:
        picture_hex = save_picture(request.files['image_file'])
        current_user.image_file = picture_hex
    if request.form['email']:
        current_user.email = request.form['email'].lower()
    if request.form['username']:
        current_user.username = request.form['username']
    db.session.commit()
    user_serialized = user_schema.dump(current_user)

    return Response(
        response=json.dumps(user_serialized),
        status=200,
        mimetype='application/json'
    )

@users.route('/api/request_reset_email', methods=['POST'])
def request_reset_email():
    try:
        data = json.loads(request.data)
        email = data['email'].lower()
        user = db.session.query(User).filter_by(email=email).first()
        if not user:
            return Response(
                response='no user found by this email',
                status=400
            )
        else:
            send_reset_email(user)
            return Response(
                response='Email has been sent!',
                status=200
        )
    except:
        raise

@users.route('/api/reset_password', methods=['POST'])
def api_reset_token():
    data = json.loads(request.data)
    token = data['token']
    user = User.verify_reset_token(token)
    if user is None:
        return Response(
            response='That is an invalid or expired token',
            status=400
        )
    try:
        hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
        user.password = hashed_password
        db.session.commit()

        user_serialized = user_schema.dump(user)

        return Response(
            response=json.dumps(user_serialized),
            status=200,
            mimetype='application/json'
        )
    except:
        raise