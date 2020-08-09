import os
from flask import Flask, request, current_app
from flask_login import LoginManager
from authlib.integrations.flask_client import OAuth

from config import Config

login = LoginManager()
oauth = OAuth()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    login.init_app(app)
    oauth = init_app(app)
    oauth.register('sas')
    
    from app.errors import bp as errors_bp
    app.register_blueprint(errors_bp)

    from app.oauth import bp as oauth_bp
    app.register_blueprint(oauth_bp)

    from app.main import bp as main_bp
    app.register_blueprint(main_bp)    

    return app

from app import models