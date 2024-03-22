from flask import Blueprint, render_template, request, jsonify
from controllers import rooms_controller

rooms_blueprint = Blueprint('rooms', __name__)

@rooms_blueprint.post('/new')
def create_room():
    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    response, status = rooms_controller.create_room(title, description)
    return jsonify(response), status