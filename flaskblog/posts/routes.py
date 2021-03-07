from flask import render_template, url_for, flash, redirect, request, abort, Blueprint, Response, jsonify
from flask_login import current_user, login_required
from flaskblog import db, ma 
from flaskblog.models import Post, User
from flaskblog.posts.forms import PostForm
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

@posts.route('/post/<int:post_id>/update', methods=['GET', 'POST'])
@login_required
def update_post(post_id):
    post = Post.query.get_or_404(post_id)
    if post.author != current_user:
        abort(403)
    form = PostForm()
    if form.validate_on_submit():
        post.title = form.title.data
        post.content = form.content.data
        db.session.commit()
        flash('Your post has been updated.', 'success')
        return redirect(url_for('posts.post', post_id=post.id))
    elif request.method == 'GET':
        form.title.data = post.title
        form.content.data = post.content
    return render_template('create_post.html', title='Update Post', form=form, legend='Update Post', get_image_file=get_image_file)

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
            response='Post has been delete',
            status=200
            )
    except:
        raise