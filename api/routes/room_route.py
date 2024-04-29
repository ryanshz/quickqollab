from flask import Blueprint, request, jsonify
from controllers import room_controller
from models.Room import Room
from flask import session
from utils.bcrypt import bcrypt
from uuid import UUID

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

@rooms_blueprint.delete('/delete/<uuid:room_id>')
def delete_room(room_id):
    try:
        # Assuming you have the necessary imports and Room model defined
        room = Room.query.get(room_id)
        if not room:
            return jsonify({'error': 'Room not found'}), 404
        
        # Check if the user is authorized to delete the room
        user_id = session.get('user_id')
        if room.host_id != user_id:
            return jsonify({'error': 'You are not authorized to delete this room'}), 403
        
        # Delete the room
        Room.delete_room(room_id)
        
        return jsonify({'message': 'Room deleted successfully'}), 200
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@rooms_blueprint.get('/all')
def get_all_rooms():
    response, status = room_controller.get_all_rooms()
    return jsonify(response), status

@rooms_blueprint.get('/search')
def search_rooms():
    query = request.args.get('query')
    response, status = room_controller.search_rooms(query)
    return jsonify(response), status

@rooms_blueprint.get('/room_validate/<path:id>')
def room_validation(id):
    try:
        uuid_obj = UUID(id, version=4) 
    except ValueError:
       return jsonify({'success': False, 'message': 'Room not found'}), 404  

    room = room_controller.check_room(room_id=id)
    if room:
        return jsonify({'success': True, 'message': 'Room exists', 'room_id': room.room_id, 'room_title': room.title}), 200
    else:
        return jsonify({'success': False, 'message': 'Room not found'}), 404
    
@rooms_blueprint.post('/verify_password')
def password_validation():
    data = request.get_json()
    password = data.get('roompassword')
    room_id=data.get('room_id')
    room = Room.get_by_room_id(room_id)
    hashed_password = room['password_hash']
    print(hashed_password)
    
    if bcrypt.check_password_hash(hashed_password, password):
        print('made it here')
        return jsonify({'success': True, 'message': 'Password matches', 'room_id': room_id}), 200
    else:
        print('made it here 2')
        return jsonify({'success': False, 'message': 'Password Does Not Match'}), 409