from flask import render_template
from flask_login import login_required, current_user

from app import oauth_manager
from app.cas import bp
from app.models import get_user_info



@bp.route("/cas")
@login_required
def cas():
    # sas = oauth_manager.create_client('sas')
    # token = current_user.token
    # resp = sas.post('casManagement/servers/cas-shared-default/sessions', token=token, headers={'Content-Type':'application/json'})
    # session = resp.json()

    return render_template('cas/base.html')

@bp.route("/test")
@login_required
def test():
    sas = oauth_manager.create_client('sas')
    token = current_user.token
    resp = sas.post('casManagement/servers/cas-shared-default/sessions', token=token, headers={'Content-Type':'application/json'})
    session = resp.json()

    return session
