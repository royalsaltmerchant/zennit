from flask import render_template, url_for, flash, redirect, request, Blueprint, Response, jsonify, current_app
from flaskblog.models import Like, Dislike
from flaskblog import db, bcrypt, ma
import logging, json
import jwt
import datetime
import os

likes = Blueprint('likes', __name__)

class LikeSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id", 
            "post_id",
            )

like_schema = LikeSchema()
likes_schema = LikeSchema(many=True)

class DislikeSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = (
            "id",
            "post_id",
            )

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
def api_add_like():
    try:
        data = json.loads(request.data)
        post = data['post_id']

        like = Like(post_id=post)
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
def api_add_dislike():
    try:
        data = json.loads(request.data)
        post = data['post_id']

        dislike = Dislike(post_id=post)
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
def api_remove_like():
    try:
        like_to_delete = db.session.query(Like).first()

        db.session.delete(like_to_delete)
        db.session.commit()

        return Response(
            response='Like has been removed',
            status=200
            )
    except:
        raise

@likes.route('/api/remove_dislike', methods=['POST'])
def api_remove_dislike():
    try:
        dislike_to_delete = db.session.query(Dislike).first()

        db.session.delete(dislike_to_delete)
        db.session.commit()

        return Response(
            response='Dislike has been removed',
            status=200
            )
    except:
        raise