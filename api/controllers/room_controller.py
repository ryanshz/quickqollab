from models.Room import Room
from models.Client import Client
from flask import session
import re

def create_room(title, password):
    try:       
        host_id = session.get('user_id')      
        if host_id is None:
            return {"error": "User not authenticated or invalid session"}, 401  
        check_existing_room = Room.query.filter(Room.title == title).first()
        if check_existing_room:
            return {"warning": "Room already exists with this title name."}, 409 
        
        if not title.strip() or not re.match(r'^[a-zA-Z0-9]+$', title):
            return {'error': 'Please enter only letters and numbers when creating a title'}, 400
        
        if password and not re.match(r'^[a-zA-Z0-9!?$#]+$', password.strip()):
            return {'error': 'Please enter only letters, numbers, and these special characters: !, ?, $, # when creating a password'}, 400
        
        new_room = Room(title=title, host_id=host_id)
        response, status = new_room.save(password)

        if status == 200:
            response = Room.get_by_room_id(response.room_id)
            client = Client.get_by_client_id(host_id)
            lobby = new_room.join_room(client)
            return {"message": "Room created successfully", "response": response, "join_room_status": lobby}, 200
        else:
            return response, 200
    except Exception as e:
        return {"error": str(e)}, 500

# def join_room(room_id, client_id):
#     try: 
#         if status == 200:
#             return {"message": (f'Client {client_id} joined room {room_id}')}, 200
#         else:
#             return response, 200
#     except Exception as e:
#         return {"error": str(e)}, 500
    

# def get_room_info(room_id):
#     try:
#         room = Room.query.get(room_id)
#         if room:
#             room_info = {
#                 'room_id': room.room_id,
#                 'title': room.title,
#                 'created_by': room.created_by,
#                 'description': room.description,
#                 'password': room.password,
#                 'is_open': room.is_open,
#                 'date_created': room.date_created.strftime("%Y-%m-%d %H:%M:%S")
#             }
#             return room_info, 200
#         else:
#             return {"Error": "Room not found."}, 404
#     except Exception as e:
#         return {"Error": str(e)}, 500