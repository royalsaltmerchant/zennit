from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Comment
from flaskblog import db, bcrypt, ma
from flaskblog.users.routes import token_required
import logging, json
import jwt
import datetime
import os

comments = Blueprint('comments', __name__)

class CommentSchema(ma.Schema):
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

comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)

@comments.route("/api/comments")
def api_comments():
    all_comments = Comment.query.order_by(Comment.date_posted.desc())

    comments_serialized = comments_schema.dump(all_comments)
    response = Response(
        response=json.dumps(comments_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@comments.route("/api/new_comment")
@token_required
def new_comment(current_user):
    try:
        data = json.loads(request.data)
        comment = Comment(content=data['content'], user_id=current_user.id, post_id=data['post_id'])
        db.session.add(comment)
        db.session.commit()

        comment_serialized = comment_schema.dump(comment)
        response = Response(
            response=json.dumps(comment_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise

@comments.route('/api/update_comment', methods=['POST'])
@token_required
def api_update_comment(current_user):
    try:
        data = json.loads(request.data)
        comment = data['comment_id']
        comment_to_update = db.session.query(Comment).filter_by(id=comment).first()
        comment_to_update.content = data['content']

        db.session.commit()

        comment_serialized = comment_schema.dump(comment_to_update)
        response = Response(
            response=json.dumps(comment_serialized),
            status=200,
            mimetype='application/json'
        )
        return response
    except:
        raise

@comments.route('/api/delete_comment', methods=['POST'])
@token_required
def api_delete_comment(current_user):
    try:
        data = json.loads(request.data)
        comment = data['comment_id']
        comment_to_delete = db.session.query(Comment).filter_by(id=comment).first()

        db.session.delete(comment_to_delete)
        db.session.commit()

        return Response(
            response='Comment has been deleted',
            status=200
            )
    except:
        raise
