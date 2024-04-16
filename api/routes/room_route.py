from flask import Blueprint, request, jsonify
from controllers import room_controller

rooms_blueprint = Blueprint('room', __name__)

@rooms_blueprint.post('/new')
def create_room():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Missing data'}), 400 
    title = data.get('title')
    password = data.get('password')
    if password == '':
        password = None
    response, status = room_controller.create_room(title, password)

    if status == 200:
        return jsonify(response), status
    else:
        return jsonify({'error': response}), status
    
@rooms_blueprint.post('/join')
def join_room():
    data = request.json()
    return 'message'

@rooms_blueprint.get('/all')
def get_all_rooms():
    response, status = room_controller.get_all_rooms()
    return jsonify(response), status

@rooms_blueprint.get('/search')
def search_rooms():
    query = request.args.get('query')
    response, status = room_controller.search_rooms(query)
    return jsonify(response), status

# @rooms_blueprint.route('/<int:room_id>', methods=['GET'])
# def get_room(room_id):
#     room = Room.query.get(room_id)
#     if room:
#         room_info = room.serialize()
#         return jsonify(room_info), 200
#     else:
#         return jsonify({"Error": "Room not found."}), 404