from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Like, Dislike
from flaskblog.users.routes import token_required
from flaskblog.serializers import LikeSchema, DislikeSchema
from flaskblog import db, bcrypt, ma
import logging, json
import jwt
import datetime
import os

likes = Blueprint('likes', __name__)

like_schema = LikeSchema()
likes_schema = LikeSchema(many=True)
dislike_schema = DislikeSchema()
dislikes_schema = DislikeSchema(many=True)

@likes.route("/api/likes", methods=['GET'])
def api_likes():
    all_likes = Like.query.all()

    likes_serialized = likes_schema.dump(all_likes)
    response = Response(
        response=json.dumps(likes_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@likes.route("/api/dislikes", methods=['GET'])
def api_dislikes():
    all_dislikes = Dislike.query.all()

    dislikes_serialized = dislikes_schema.dump(all_dislikes)
    response = Response(
        response=json.dumps(dislikes_serialized),
        status=200,
        mimetype='application/json'
    )

    return response

@likes.route('/api/add_like', methods=['POST'])
@token_required
def api_add_like(current_user):
    try:
        data = json.loads(request.data)
        post = data['post_id']

        like = Like(post_id=post, user_id=current_user.id)
        db.session.add(like)
        db.session.commit()

        like_serialized = like_schema.dump(like)
        response = Response(
            response=json.dumps(like_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise

@likes.route('/api/add_dislike', methods=['POST'])
@token_required
def api_add_dislike(current_user):
    try:
        data = json.loads(request.data)
        post = data['post_id']

        dislike = Dislike(post_id=post, user_id=current_user.id)
        db.session.add(dislike)
        db.session.commit()

        dislike_serialized = dislike_schema.dump(dislike)
        response = Response(
            response=json.dumps(dislike_serialized),
            status=201,
            mimetype='application/json'
        )

        return response
    except:
        raise
  
@likes.route('/api/remove_like', methods=['POST'])
@token_required
def api_remove_like(current_user):
    try:
        like_to_delete = db.session.query(Like).filter_by(user_id=current_user.id).first()

        db.session.delete(like_to_delete)
        db.session.commit()

        return Response(
            response='Like has been removed',
            status=200
            )
    except:
        raise

@likes.route('/api/remove_dislike', methods=['POST'])
@token_required
def api_remove_dislike(current_user):
    try:
        dislike_to_delete = db.session.query(Dislike).filter_by(user_id=current_user.id).first()

        db.session.delete(dislike_to_delete)
        db.session.commit()

        return Response(
            response='Dislike has been removed',
            status=200
            )
    except:
        raise