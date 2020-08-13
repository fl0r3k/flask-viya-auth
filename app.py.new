# Python standard libraries
import json
import os
import sqlite3


os.environ["CURL_CA_BUNDLE"] = ""

# Third-party libraries
from flask import Flask, redirect, request, url_for
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
from authlib.integrations.flask_client import OAuth

# Internal imports
from db import init_db_command
from user import User

# Flask app setup
app = Flask(__name__)
app.secret_key = os.environ.get("SECRET_KEY") or os.urandom(24)
app.config.from_object('config')

token = None
oauth = OAuth(app)
oauth.register(
    name='sas',
    client_id='sas.MyAppAuthTest',
    client_secret='GranaT01',
    access_token_url='https://viya.transity.pl/SASLogon/oauth/token',
    access_token_params=None,
    authorize_url='https://viya.transity.pl/SASLogon/oauth/authorize',
    authorize_params=None,
    api_base_url='https://viya.transity.pl/',
    client_kwargs={}
)

# User session management setup
# https://flask-login.readthedocs.io/en/latest
login_manager = LoginManager()
login_manager.init_app(app)

# Naive database setup
try:
    init_db_command()
except sqlite3.OperationalError:
    # Assume it's already been created
    pass



# Flask-Login helper to retrieve a user from our db
@login_manager.user_loader
def user_loader(user_id):
    return getUserInfo()

@app.route("/")
@login_required
def index():
    if current_user.is_authenticated:
        return (
            "<p>Hello, {}! You're logged in! Email: {}</p>"
            '<a class="button" href="/logout">Logout</a>'.format(
                current_user.name, current_user.email
            )
        )
    else:
        return '<a class="button" href="/login">SAS Login</a>'



@app.route("/login")
def login():
    sas = oauth.create_client('sas')
    redirect_uri = url_for('authorize', _external=True)
    return sas.authorize_redirect(redirect_uri)


@app.route("/authorize")
def authorize():
    global token
    sas = oauth.create_client('sas')
    token = sas.authorize_access_token()
    login_user(getUserInfo())
    return redirect(url_for("index"))

@app.route("/logout")
@login_required
def logout():
    logout_user()
    #TODO: revoke token
    return redirect(url_for("index"))

def getUserInfo():
    sas = oauth.create_client('sas')
    resp = sas.get('identities/users/@currentUser',token=token)
    userinfo = resp.json()
    return User(id_=userinfo['id'], name=userinfo['name'], email='empty')

if __name__ == "__main__":
    app.run(debug=True)
