from utils.sql_alchemy import db
from datetime import datetime

class Room(db.Model):
    __tablename__ = 'room'

    room_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    created_by = db.Column(db.String(36), nullable=False)
    description = db.Column(db.Text, nullable=False)
    password = db.Column(db.String(255), nullable=True)
    is_open = db.Column(db.Boolean, nullable=False, default=True)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

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

    def serialize(self):
        return {
            'room_id': self.room_id,
            'title': self.title,
            'created_by': self.created_by,
            'description': self.description,
            'password': self.password,
            'is_open': self.is_open,
            'date_created': self.date_created.strftime("%Y-%m-%d %H:%M:%S")
            }
