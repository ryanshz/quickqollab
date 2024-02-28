from flask import Blueprint, render_template
from controllers.test import test_controller as controller

test_blueprint = Blueprint('test', __name__)

@test_blueprint.get('/test/<int:id>')
def get_test_data(id):
    return controller.get_client(id)
