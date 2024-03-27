from utils.sql_alchemy import db
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

Lobby = db.Table('lobby',
    Column('id', Integer, primary_key=True),
    Column('client_id', Integer, ForeignKey('client.id'), nullable=False),
    Column('room_id', Integer, ForeignKey('room.id'), nullable=False),
    Column('join_date', DateTime, default=datetime.utcnow)
)

class Room(db.Model):
    __tablename__ = 'room'
    room_id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    password_hash = Column(String(255), nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)
    host_id = Column(Integer, ForeignKey('user.id'), nullable=False)
    clients = db.relationship('Client', secondary=Lobby, back_populates='lobbies')

    def create(room):
        try:
            db.session.add(room)
            db.session.commit()
            return room, 200
        except Exception as e:
                db.session.rollback()
                return {"Error:": str(e)}, 500

def get_by_id(id):
    return Room.query.get(id)
