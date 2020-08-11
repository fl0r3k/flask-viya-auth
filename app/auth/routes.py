from flask import redirect, url_for, session
from flask_login import login_user, logout_user, login_required

from app import oauth_manager
from app.auth import bp

from app.models import get_user_info


@bp.route("/login", methods=['GET','POST'])
def login():
    sas = oauth_manager.create_client('sas')
    redirect_uri = url_for('auth.authorize', _external=True)
    return sas.authorize_redirect(redirect_uri)

@bp.route("/authorize")
def authorize():
    sas = oauth_manager.create_client('sas')
    token = sas.authorize_access_token()
    session['access_token'] = token
    login_user(get_user_info())
    return redirect(url_for("main.index"))

@bp.route("/logout")
@login_required
def logout():
    session.pop('access_token', None)
    logout_user()
    return redirect('https://viya.transity.pl/SASLogon/logout.do')
