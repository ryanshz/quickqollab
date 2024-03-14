from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Table, Column, Integer, ForeignKey
from datetime import datetime

db = SQLAlchemy()

class Client(db.Model):
    __tablename__ = 'client'
    client_id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(36), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    password_hash = db.Column(db.String(255), nullable=False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

def save(self, Client):
    db.session.add(Client)
    db.session.commit()

def get_by_id(id):
    return Client.query.get(id)

def authenticate(self, username, password):
    client = db.query.filter_by(username=username).first()
    if client:

