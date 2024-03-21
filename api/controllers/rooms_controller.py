from models.Room import Room

def create_room(title, description):
    try:
        existing_room = Room.query.filter_by(title=title).first()
        if existing_room:
            return {"warning": "Room with this title already exists."}, 409
            
        new_room = Room(title=title, description=description)
        response, status = new_room.create(new_room)

        if status == 200:
            return {"message": "Room created successfully"}, 200
        else:
            return response, status
    except Exception as e:
        return {"error": str(e)}, 500
