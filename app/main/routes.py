from flask import url_for, render_template
from flask_login import current_user, login_required

from app.main import bp


@bp.route('/')
@bp.route('/index')
# @login_required
def index():
    return (
        "<p>Hello, {}! You're logged in! Email: {}</p>"
        '<a class="button" href="{}">Logout</a>'.format(current_user.name, current_user.email, url_for('auth.logout'))
    )

@bp.route("/app")
# @login_required
def app():
    return render_template('main/base.html')
