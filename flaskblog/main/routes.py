from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Notification, Post
from flaskblog.serializers import PostSchema, NotificationSchema
from flaskblog import db, bcrypt, ma
import logging, json
import jwt
import datetime
import os
import stripe

main = Blueprint('main', __name__)

stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
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
    data = json.loads(request.data)
    if 'reply_id' in data:
        try:
            notification = Notification(notification_type=data['notification_type'], user_id=data['user_id'], post_id=data['post_id'], comment_id=data['comment_id'], reply_id=data['reply_id'])
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
    else:
        try:
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

@main.route('/api/stripe_intent', methods=['POST'])
def create_payment():
    data = json.loads(request.data)
    # Create a PaymentIntent with the order amount and currency
    intent = stripe.PaymentIntent.create(
        amount=data['amount'],
        currency='usd',
        receipt_email=data['email'].lower(),
        description='Donation'
    )

    try:
        return jsonify({'publishable_key': os.environ.get('STRIPE_PUBLISHABLE_KEY'), 'client_secret': intent.client_secret})
    except Exception as e:
        return jsonify(error=str(e)), 403

