from utils.sql_alchemy import db
from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime
from utils.bcrypt import bcrypt

Lobby = db.Table('lobby',
    db.Column('id', db.Integer, primary_key=True),
    db.Column('client_id', db.Integer, db.ForeignKey('client.client_id'), nullable=False),  
    db.Column('room_id', db.Integer, db.ForeignKey('room.room_id'), nullable=False),  
    db.Column('join_date', db.DateTime, default=db.func.current_timestamp())
)

class Room(db.Model):
    __tablename__ = 'room'
    room_id = Column(Integer, primary_key=True)
    title = Column(String(100), nullable=False)
    password_hash = Column(String(255), nullable=True)
    date_created = Column(DateTime, default=datetime.utcnow)
    host_id = db.Column(db.Integer, db.ForeignKey('client.client_id'), nullable=False)
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
            
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

def get_by_id(id):
    return Room.query.get(id)
