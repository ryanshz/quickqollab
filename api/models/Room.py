from utils.sql_alchemy import db
from sqlalchemy import Column, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from utils.bcrypt import bcrypt
import uuid
from sqlalchemy.dialects.postgresql import UUID

Lobby = db.Table('lobby',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('client_id', db.String(36), db.ForeignKey('client.client_id'), nullable=False),  
    db.Column('room_id', db.String(36), db.ForeignKey('room.room_id'), nullable=False),  
    db.Column('join_date', db.DateTime, default=db.func.current_timestamp())
)

class Room(db.Model):
    __tablename__ = 'room'
    room_id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    title = Column(String(100), nullable=False)
    password_hash = Column(String(255), nullable=True)
    date_created = Column(DateTime, default=datetime.utcnow)
    host_id = db.Column(db.String(36), db.ForeignKey('client.client_id'), nullable=False)
    clients = db.relationship('Client', secondary=Lobby, back_populates='lobbies')

    def save(self, password):
        try:
            if password is not None:
                self.password_hash = bcrypt.generate_password_hash(password, 12).decode('utf-8')
            db.session.add(self)
            db.session.commit()
            return self, 200
        except Exception as e:
                db.session.rollback()
                return {"Error:": str(e)}, 500
            
    def join_room(self, client):
        try:
            if not client:
                return {'error': 'Client not found'}, 404
            if client in self.clients:
                return {'error': 'Client already in the room'}, 409
            self.clients.append(client)
            db.session.commit()
            return {"message": "Client added to lobby successfully"}, 200
        except Exception as e:
            db.session.rollback()
            return {"Error:": str(e)}, 500
            
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    @staticmethod
    def get_by_room_id(room_id):
        room = Room.query.filter_by(room_id=room_id).first()
        if room:
            return {
                'room_id': room.room_id,
                'title': room.title,
                'date_created': room.date_created,
                'host_id': room.host_id, # client_id of host
                'password_hash': room.password_hash
            }
        else:
            return {'error': 'room not found'}
        
    @staticmethod
    def get_all_rooms():
        from models.Client import Client
        return db.session.query(
            Room.room_id,
            Room.title,
            Room.host_id,
            Client.username,
            Client.profile_picture,
            Room.password_hash
        ).join(Client, Room.host_id == Client.client_id).all()
        
    @staticmethod
    def delete_room(room_id):
        try:
            room = Room.query.filter_by(room_id=room_id).first()
            if room:
                db.session.delete(room)
                db.session.commit()
                return {"message": "Room deleted successfully"}, 200
            else:
                return {"error": "Room not found"}, 404
        except Exception as e:
            db.session.rollback()
            return {"error": str(e)}, 500
