import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))


class Config(object):

    SECRET_KEY = os.environ.get('SECRET_KEY')

    SAS_CLIENT_ID           = os.environ.get('SAS_CLIENT_ID')
    SAS_CLIENT_SECRET       = os.environ.get('SAS_CLIENT_SECRET')
    SAS_ACCESS_TOKEN_URL    = os.environ.get('SAS_ACCESS_TOKEN_URL')
    SAS_ACCESS_TOKEN_PARAMS = os.environ.get('SAS_ACCESS_TOKEN_PARAMS')
    SAS_AUTHORIZE_URL       = os.environ.get('SAS_AUTHORIZE_URL')
    SAS_AUTHORIZE_PARAMS    = os.environ.get('SAS_AUTHORIZE_PARAMS')
    SAS_API_BASE_URL        = os.environ.get('SAS_API_BASE_URL')
    SAS_CLIENT_KWARGS       = os.environ.get('SAS_CLIENT_KWARGS')
    