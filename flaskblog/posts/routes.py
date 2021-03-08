from flask import render_template, url_for, flash, redirect, request, abort, Blueprint, Response, jsonify, current_app
from flaskblog import db, ma 
from flaskblog.models import Post, User
from flaskblog.users.routes import token_required
import logging, json
import jwt
import datetime
import os

posts = Blueprint('posts', __name__)

class PostSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "title", "date_posted", "content", "user_id")

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

@posts.route('/api/new_post', methods=['Get', 'POST'])
@token_required
def api_new_post(current_user):
    try:
        data = json.loads(request.data)
        post = Post(title=data['title'], content=data['content'], author=current_user)
        db.session.add(post)
        db.session.commit()

        post_serialized = post_schema.dump(post)
        response = Response(
            response=json.dumps(post_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise

@posts.route('/api/update_post', methods=['POST'])
@token_required
def api_update_post(current_user):
    try:
        data = json.loads(request.data)
        post = data['post_id']
        post_to_update = db.session.query(Post).filter_by(id=post).first()
        post_to_update.title = data['title']
        post_to_update.content =data['content']

        db.session.commit()

        post_serialized = post_schema.dump(post_to_update)
        response = Response(
            response=json.dumps(post_serialized),
            status=200,
            mimetype='application/json'
        )
        return response
    except:
        raise

@posts.route('/api/delete_post', methods=['POST'])
@token_required
def api_delete_post(current_user):
    try:
        data = json.loads(request.data)
        post = data['post_id']
        post_to_delete = db.session.query(Post).filter_by(id=post).first()

        db.session.delete(post_to_delete)
        db.session.commit()

        return Response(
            response='Post has been deleted',
            status=200
            )
    except:
        raise