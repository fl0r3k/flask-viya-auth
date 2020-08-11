import os
from flask import Flask, request, current_app
from flask_login import LoginManager
from authlib.integrations.flask_client import OAuth


from config import Config

login_manager = LoginManager()
login_manager.login_view = 'auth.login'

oauth_manager = OAuth()
oauth_manager.register('sas')

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    login_manager.init_app(app)
    oauth_manager.init_app(app)

    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from app.auth import bp as auth_bp
    app.register_blueprint(auth_bp)

    from app.cas import bp as cas_bp
    app.register_blueprint(cas_bp)

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)

    return app

from app import models
