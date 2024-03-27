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

    def get_by_username(username):
        client = Client.query.filter_by(username=username).first()
        if client:
            return {
                'client_id': client.client_id,
                'username': client.username,
                'email': client.email,
                'date_created': client.date_created
            }
        else:
            return {'error': 'user not found'}
        
    def update_user_info(self, username, password, email):
        try:
            if username:
                self.username = username
            if email:
                self.email = email
            if password:
                self.password_hash = bcrypt.generate_password_hash(password, 12).decode('utf-8')

            db.session.commit()

            return {
                'client_id': self.client_id,
                'username': self.username,
                'email': self.email,
                'date_created': self.date_created
            },200
        except Exception as e:
            db.session.rollback()
            return {"Error:": str(e)}, 500