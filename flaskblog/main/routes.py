from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify
from flask_login import current_user
from flaskblog.models import Post
from flaskblog.users.utils import get_image_file
from flaskblog import db, bcrypt, ma
import logging, json
import jwt
import datetime
import os

main = Blueprint('main', __name__)

class PostSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id", 
            "title", 
            "date_posted", 
            "content", 
            "user_id",
            "user.username",
            "user.image_file"
            )

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

@main.route("/")
@main.route("/home")
def home():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)

    return render_template('home.html', posts=posts, get_image_file=get_image_file)

@main.route("/api/posts")
def posts():
    posts = Post.query.order_by(Post.date_posted.desc())

    posts_serialized = posts_schema.dump(posts)
    response = Response(
        response=json.dumps(posts_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@main.route("/about")
def about():
    return render_template('about.html', title='About', get_image_file=get_image_file)
    