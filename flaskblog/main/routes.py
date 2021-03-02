from flask import render_template, request, Blueprint
from flask_login import current_user
from flaskblog.models import Post
from flaskblog.users.utils import get_image_file

main = Blueprint('main', __name__)

@main.route("/")
@main.route("/home")
def home():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)

    return render_template('home.html', posts=posts, get_image_file=get_image_file)

@main.route("/about")
def about():
    return render_template('about.html', title='About', get_image_file=get_image_file)
    