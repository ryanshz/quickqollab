from flask import Blueprint, request, jsonify
from controllers import room_controller
from models.Room import Room
from flask import session

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

@rooms_blueprint.delete('/delete/<int:room_id>')
def delete_room(room_id):
    try:
        # Assuming you have the necessary imports and Room model defined
        room = Room.query.get(room_id)
        if not room:
            return jsonify({'error': 'Room not found'}), 404
        
        # Check if the user is authorized to delete the room
        # user_id = session.get('user_id')
        # if room.host_id != user_id:
        #     return jsonify({'error': 'You are not authorized to delete this room'}), 403
        
        # Delete the room
        Room.delete_room(room_id)
        
        return jsonify({'message': 'Room deleted successfully'}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# @rooms_blueprint.route('/<int:room_id>', methods=['GET'])
# def get_room(room_id):
#     room = Room.query.get(room_id)
#     if room:
#         room_info = room.serialize()
#         return jsonify(room_info), 200
#     else:
#         return jsonify({"Error": "Room not found."}), 404