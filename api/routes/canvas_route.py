from flask import Blueprint, render_template
from controllers import canvas_controller 

canvas_blueprint = Blueprint('canvas', __name__)

@canvas_blueprint.route('/canvas')
def canvas():
    return render_template('canvas/index.html')
