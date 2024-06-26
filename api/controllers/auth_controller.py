from models.Client import Client
from flask import session, jsonify
import re

def create_user(username, email, password):
    try:
        existing_user = Client.query.filter((Client.username == username) | (Client.email == email)).first()
        if existing_user:
            return {"warning": "User with this username or email already exists."}, 409 
        
        new_user = Client(username=username, email=email)
        response, status = new_user.save(password)
        
        if status == 200:
            response = Client.get_by_username(username)
            client_id = response['client_id']
            session['user_id'] = client_id
            return response, 200
        else:
            return response, status
    except Exception as e:
        return {"error": str(e)}, 500
    
def login_user(username, password):
    try:
        user = Client.query.filter_by(username=username).first()
        if user and user.check_password(password) :
            response = Client.get_by_username(username)
            client_id = response['client_id']
            session['user_id'] = client_id
            return response, 200
        else:
            return {'message': 'Invalid username or password!'}, 401
    except Exception as e:
        return {'error': str(e)}, 500

def update_user(username, password, email, profile_picture):
    try:
        client_id = session.get('user_id')
        if not client_id:
            return {'error': 'User not logged in!'}, 401
        
        user = Client.query.get(client_id)
        if not user:
            return {'error': 'User not found!'}, 404
        
        if username.strip() and not re.match(r'^[a-zA-Z0-9]+$', username):
            return {'error': 'Only letters and numbers are allowed in username'}, 400
        
        if password.strip() and not re.match(r'^[a-zA-Z0-9!?$#]+$', password):
            return {'error': 'Please enter only letters, numbers, and these special characters: !, ?, $, # in password'}, 400
        
        if email.strip() and not re.match(r'^\S+@\S+\.\S+$', email):
            return {'error': 'Please enter a valid email address'}, 400

        existing_user = Client.query.filter(((Client.username == username) | (Client.email == email)) & (Client.client_id != client_id)).first()
        if existing_user:
            return {'error': 'Username or email already in use'}, 409

        response, status = user.update_user_info(username, password, email, profile_picture)

        if status == 200:
            if response is not None:
                updated_user = Client.get_by_client_id(response['client_id'])
                if updated_user is not None:
                    return updated_user.to_dict(), 200
                else:
                    return {"error": "Account not updated"}, 200
            else:
                return {"error": "No updates were applied."}, 409
        else:
            return {'error': response}, status

    except Exception as e:
        return {'error': str(e)}, 500

