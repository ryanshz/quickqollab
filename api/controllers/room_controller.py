from models.Room import Room
from flask import session

def create_room(title, password):
    try:         
        host_id = session.get('user_id')  
        check_existing_room = Room.query.filter(Room.title == title).first()
        if check_existing_room:
            return {"warning": "Room already exists with this title name."}, 409 
        new_room = Room(title=title, host_id=host_id)
        response, status = new_room.save(password)

        if status == 200:
            return {"message": "Room created successfully"}, 200
        else:
            return response, 200
    except Exception as e:
        return {"error": str(e)}, 500

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