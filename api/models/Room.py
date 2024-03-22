from utils.sql_alchemy import db
from datetime import datetime



class Room(db.Model):
    __tablename__ = 'rooms'

    room_id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
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
