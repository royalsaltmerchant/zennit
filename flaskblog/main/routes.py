from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Post
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

@main.errorhandler(404)
def not_found(e):
    return render_template("index.html")

@main.route("/")
def to_react():
    return render_template("index.html")

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
    