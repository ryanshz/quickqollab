from flask import Blueprint, request, jsonify, session
from utils.sql_alchemy import db
from datetime import datetime
from models.Room import Room
from models.Client import Client

rooms_blueprint = Blueprint('rooms', __name__)

@rooms_blueprint.route('/new', methods=['POST'])
def create_room():
    try:
        data = request.get_json()
        title = data.get('title')
        created_by = data.get('username')
        description = data.get('description')
        password = data.get('password')

        existing_room = Room.query.filter_by(title=title).first()
        if existing_room:
            return jsonify({"warning": "Room with this title already exists."}), 409
            
        new_room = Room(title=title, created_by=created_by, description=description, password=password)
        db.session.add(new_room)
        db.session.commit()

        return jsonify({"message": "Room created successfully"}), 200

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

@rooms_blueprint.route('/<int:room_id>', methods=['GET'])
def get_room(room_id):
    room = Room.query.get(room_id)
    if room:
        room_info = room.serialize()
        return jsonify(room_info), 200
    else:
        return jsonify({"Error": "Room not found."}), 404