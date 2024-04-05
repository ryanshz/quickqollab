from sqlalchemy import Column, Integer, String, DateTime, LargeBinary
from sqlalchemy.orm import relationship
from datetime import datetime
from utils.sql_alchemy import db
from utils.bcrypt import bcrypt
from models.Room import Lobby

class Client(db.Model):
    __tablename__ = 'client'
    client_id = Column(Integer, primary_key=True)
    username = Column(String(36), nullable=False, unique=True)
    email = Column(String(255), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)
    date_created = Column(DateTime, default=datetime.utcnow)
    lobbies = db.relationship('Room', secondary=Lobby, back_populates='clients')
    profile_picture = Column(LargeBinary)

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
        # already deserialized
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
        
    def update_user_info(self, username, password, email, profile_picture):
        try:
            updated_fields = {}
            if username and username != self.username:
                self.username = username
                updated_fields['username'] = username
            if email and email != self.email:
                self.email = email
                updated_fields['email'] = email
            if password:
                new_password_hash = bcrypt.generate_password_hash(password, 12).decode('utf-8')
                if new_password_hash != self.password_hash:
                    self.password_hash = new_password_hash
                    updated_fields['password'] = '********'
            if profile_picture: 
                self.profile_picture = profile_picture
                updated_fields['profile_picture'] = profile_picture
            if updated_fields:
                db.session.commit()
                return {'client_id': self.client_id, 'updated': updated_fields},200
            else:
                return None, 200
        except Exception as e:
            db.session.rollback()
            return {"Error:": str(e)}, 500
        
    def get_by_client_id(client_id):
        # returns obj instance
        client = Client.query.filter_by(client_id=client_id).first()
        if client:
            return client
        else:
            return None

    def to_dict(self):
        return {
            'client_id': self.client_id,
            'username': self.username,
            'email': self.email,
            'date_created': self.date_created
        }