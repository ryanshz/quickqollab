from flask_socketio import SocketIO, emit, join_room, leave_room
from models.Room import Room
from models.Client import Client
from flask import session

socketio = SocketIO()

@socketio.on('create_room')
def handle_create_room(data):
    room_id = data.get('room_id')
    title = data.get('title')
    password = data.get('password', '')

    room = Room.query.filter_by(room_id=room_id).first()
    if room:
        emit('socketResponse', {'success': True, 'room_id': room_id}, broadcast=True)
    else:
        emit('socketResponse', {'success': False, 'message': 'Room creation failed'})
        
@socketio.on('join_room')
def handle_join_room(data):
    room_id = data.get('room_id')
    join_room(room_id)
    
    emit('room_joined', {'success': True, 'message': f'Joined room successfully', 'room_id': room_id}, room=room_id)
    emit('room_update', {'message': 'A new user has joined the room.'}, room=room_id, broadcast=True)

