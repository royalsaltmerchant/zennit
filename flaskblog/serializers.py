from flaskblog.models import Post, Notification, Comment, Like, Dislike, User, Reply
from flaskblog import db, bcrypt, ma
import logging, json

class CommentSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Comment
        fields = (
            "id", 
            "title", 
            "date_posted", 
            "content",
            "post_id",
            "user_id",
            "users"
            )
    users = ma.Nested("UserSchema")

class PostSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Post
        fields = ("id", "title", "date_posted", "content", "user_id", "users", "comments")
    comments = ma.Nested(CommentSchema, many=True)
    users = ma.Nested("UserSchema")

class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        fields = ("id", "username", "admin", "email", "password", "image_file")

class LikeSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Like
        fields = (
            "id", 
            "post_id",
            "user_id",
            )

class DislikeSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Dislike
        fields = (
            "id",
            "post_id",
            "user_id",
            )

class ReplySchema(ma.SQLAlchemySchema):
    class Meta:
        model = Reply
        fields = (
            "id", 
            "title", 
            "date_posted", 
            "content",
            "post_id",
            "posts",
            "user_id",
            "users",
            "comment_id",
            "comments"
            )
    users = ma.Nested(UserSchema)
    posts = ma.Nested(PostSchema, many=True)
    comments = ma.Nested(CommentSchema)

class NotificationSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Notification
        fields = (
            "id",
            "date_posted",
            "notification_type",
            "has_been_read",
            "user_id",
            "users",
            "post_id",
            "posts",
            "comment_id",
            "comments",
            "reply_id",
            "replies"
            )
    users = ma.Nested(UserSchema)
    posts = ma.Nested(PostSchema)
    comments = ma.Nested(CommentSchema)
    replies = ma.Nested(ReplySchema)