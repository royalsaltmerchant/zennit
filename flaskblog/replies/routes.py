from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Reply
from flaskblog import db, bcrypt, ma
from flaskblog.users.routes import token_required
import logging, json
import jwt
import datetime
import os

replies = Blueprint('replies', __name__)

class ReplySchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id", 
            "title", 
            "date_posted", 
            "content",
            "post_id",
            "user_id",
            "user.username",
            "user.image_file",
            "comment_id"
            )

reply_schema = ReplySchema()
replies_schema = ReplySchema(many=True)

@replies.route("/api/replies", methods=['GET'])
def api_replies():
    all_replies = Comment.query.order_by(Comment.date_posted.desc())

    replies_serialized = replies_schema.dump(all_replies)
    response = Response(
        response=json.dumps(replies_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@replies.route("/api/new_reply", methods=['POST'])
@token_required
def new_reply(current_user):
    try:
        data = json.loads(request.data)
        reply = Reply(content=data['content'], user_id=current_user.id, post_id=data['post_id'], comment_id=data['comment_id'])
        db.session.add(reply)
        db.session.commit()

        reply_serialized = reply_schema.dump(reply)
        response = Response(
            response=json.dumps(reply_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise

@replies.route('/api/update_reply', methods=['POST'])
@token_required
def api_update_reply(current_user):
    try:
        data = json.loads(request.data)
        reply = data['reply_id']
        reply_to_update = db.session.query(Reply).filter_by(id=reply).first()
        reply_to_update.content = data['content']

        db.session.commit()

        reply_serialized = reply_schema.dump(reply_to_update)
        response = Response(
            response=json.dumps(reply_serialized),
            status=200,
            mimetype='application/json'
        )
        return response
    except:
        raise

@replies.route('/api/delete_reply', methods=['POST'])
@token_required
def api_delete_reply(current_user):
    try:
        data = json.loads(request.data)
        reply = data['reply_id']
        reply_to_delete = db.session.query(Reply).filter_by(id=reply).first()

        db.session.delete(reply_to_delete)
        db.session.commit()

        return Response(
            response='reply has been deleted',
            status=200
            )
    except:
        raise