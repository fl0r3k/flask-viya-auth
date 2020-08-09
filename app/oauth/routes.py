from flask import session, redirect, url_for
from flask_login import login_user, logout_user, login_required

from app.oauth import bp
from models import get_user_info


@bp.route("/login")
def login():
    sas = oauth.create_client('sas')
    redirect_uri = url_for('authorize', _external=True)
    return sas.authorize_redirect(redirect_uri)

@bp.route("/authorize")
def authorize():
    global token
    sas = oauth.create_client('sas')
    token = sas.authorize_access_token()
    session['oauth_token'] = token
    login_user(get_user_info())
    return redirect(url_for("index"))

@bp.route("/logout")
@login_required
def logout():
    logout_user()
    #TODO: revoke token
    return redirect(url_for("index"))