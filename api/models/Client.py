from sqlalchemy import Table, Column, Integer, ForeignKey
from datetime import datetime
from flask_bcrypt import Bcrypt
from utils.sql_alchemy import db

bcrypt = Bcrypt()

class Client(db.Model):
    __tablename__ = 'client'
    client_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(36), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def save(self, password):
        try:
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
    return Client.query.get(id)
