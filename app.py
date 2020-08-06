from flask import Flask, url_for, redirect, session
from authlib.integrations.flask_client import OAuth

import os
os.environ["CURL_CA_BUNDLE"] = ""

app = Flask(__name__)
oauth = OAuth(app)
app.secret_key = 'GranaT01'

#oauth config
saslogon = oauth.register(
    name='saslogon',
    client_id='myapp7',
    client_secret='GranaT01',
    access_token_url='https://viya.transity.pl/SASLogon/oauth/token',
    # access_token_params={'grant_type':'authorization_code'},
    access_token_params=None,
    authorize_url='https://viya.transity.pl/SASLogon/oauth/authorize',
    # authorize_params={'grant_type':'authorization_code'},
    authorize_params=None,
    api_base_url='https://viya.transity.pl/',
    client_kwargs={}
)

@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/login')
def login():
    saslogon = oauth.create_client('saslogon')
    redirect_uri = url_for('authorize', _external=True)
    return saslogon.authorize_redirect(redirect_uri)

@app.route('/authorize')
def authorize():
    saslogon = oauth.create_client('saslogon')
    token = saslogon.authorize_access_token()
    resp = saslogon.get('identities')
    info = resp.json()
    print(info)
    return redirect('/')