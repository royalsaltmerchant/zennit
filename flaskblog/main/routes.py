from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Post, Notification
from flaskblog import db, bcrypt, ma
import logging, json
import jwt
import datetime
import os
####
main = Blueprint('main', __name__)

class PostSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id", 
            "date_posted", 
            "content", 
            "user_id",
            "user.username",
            "user.image_file",
            "post_id",
            "title"
            )

post_schema = PostSchema()
posts_schema = PostSchema(many=True)

class NotificationSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id",
            "date_posted",
            "notification_type",
            "has_been_read",
            "user_id",
            "user.username",
            "user.image_file",
            "post_id",
            "post.title",
            "post.user_id",
            "comment_id",
            "comment.content"
            )

notification_schema = NotificationSchema()
notifications_schema = NotificationSchema(many=True)

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

@main.route("/api/notifications")
def notifications():
    notifications = Notification.query.order_by(Notification.date_posted.desc())

    notifications_serialized = notifications_schema.dump(notifications)
    response = Response(
        response=json.dumps(notifications_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@main.route("/api/new_notification", methods=['POST'])
def new_notification():
    try:
        data = json.loads(request.data)
        notification = Notification(notification_type=data['notification_type'], user_id=data['user_id'], post_id=data['post_id'], comment_id=data['comment_id'])
        db.session.add(notification)
        db.session.commit()

        comment_serialized = notification_schema.dump(notification)
        response = Response(
            response=json.dumps(comment_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise

@main.route('/api/update_notification', methods=['POST'])
def update_notification():
    try:
        data = json.loads(request.data)
        notification = data['notification_id']
        notification_to_update = db.session.query(Notification).filter_by(id=notification).first()
        notification_to_update.has_been_read = data['has_been_read']

        db.session.commit()

        notification_serialized = notification_schema.dump(notification_to_update)
        response = Response(
            response=json.dumps(notification_serialized),
            status=200,
            mimetype='application/json'
        )
        return response
    except:
        raise