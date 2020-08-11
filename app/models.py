from flask import session
from flask_login import UserMixin

from app import login_manager, oauth_manager


class User(UserMixin):
    def __init__(self, id_, name, email, token):
        self.id = id_
        self.name = name
        self.email = email
        self.token = token



@login_manager.user_loader
def load_user(id):
    return get_user_info()

def get_user_info():
    sas = oauth_manager.create_client('sas')
    token = session.get('access_token')
    resp = sas.get('identities/users/@currentUser',token=token)
    userinfo = resp.json()
    return User(id_=userinfo['id'], name=userinfo['name'], email='empty', token=token)
