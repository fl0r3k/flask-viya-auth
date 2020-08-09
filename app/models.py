from flask import session
from flask_login import UserMixin

from app import login, oauth


class User(UserMixin):
    def __init__(self, id_, name, email):
        self.id = id_
        self.name = name
        self.email = email


@login.user_loader
def load_user(id):
    return User.query.get(int(id))

def get_user_info():
    sas = oauth.create_client('sas')
    token = session['oauth_token']
    resp = sas.get('identities/users/@currentUser',token=token)
    userinfo = resp.json()
    return User(id_=userinfo['id'], name=userinfo['name'], email='empty')