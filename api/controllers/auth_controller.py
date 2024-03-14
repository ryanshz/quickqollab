from models.Client import Client
from flask import jsonify

''' 
    def create_user(username, email, password):
        new_user = {username, email, password}
        Client.save(new_user)
        return jsonify('User signed up sucessfully')
'''

def login_user(username, password):
    user = Client.query.filter_by(username=username).first() 

    if not user or user.password_hash != password:
        return jsonify({'message': 'Invalid username or password!'}), 401
    
    return jsonify({'message': 'Successful Login!'}), 200