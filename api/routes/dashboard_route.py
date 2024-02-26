from flask import Blueprint, render_template
from controllers import dashboard_controller

dashboard_blueprint = Blueprint('dashboard', __name__)

@dashboard_blueprint.route('/dashboard')
def dashboard():
    return render_template('dashboard/index.html')
