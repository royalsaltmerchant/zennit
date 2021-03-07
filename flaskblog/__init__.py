from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_mail import Mail
from flaskblog.config import Config
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
import os

db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()
mail = Mail()
migrate = Migrate(compare_type=True)

def create_app(config_class=Config):
    app = Flask(__name__, static_folder=os.path.abspath("../frontend/build"), static_url_path="/")
    app.config.from_object(Config)
    migrate.init_app(app, db)
    db.init_app(app)
    bcrypt.init_app(app)
    mail.init_app(app)
    ma.init_app(app)

    from flaskblog.users.routes import users
    from flaskblog.posts.routes import posts
    from flaskblog.main.routes import main
    app.register_blueprint(users)
    app.register_blueprint(posts)
    app.register_blueprint(main)

    return app