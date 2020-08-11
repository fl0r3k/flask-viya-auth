from flask import Blueprint

bp = Blueprint('cas', __name__)

from app.cas import routes
