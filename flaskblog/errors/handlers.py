from flask import Blueprint, render_template
from flaskblog.users.utils import get_image_file

errors = Blueprint('errors', __name__)


@errors.app_errorhandler(404)
def error_404(error):
    return render_template('errors/404.html', get_image_file=get_image_file), 404

@errors.app_errorhandler(403)
def error_403(error):
    return render_template('errors/403.html', get_image_file=get_image_file), 403

@errors.app_errorhandler(500)
def error_500(error):
    return render_template('errors/500.html', get_image_file=get_image_file), 500