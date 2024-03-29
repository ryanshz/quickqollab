from models.Client import Client
from flask import session, jsonify

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

def update_user(username, password, email):
    try:
        client_id = session.get('user_id')
        if not client_id:
            return {'error': 'User not logged in!'}, 401
        
        user = Client.query.get(client_id)
        if not user:
            return {'error': 'User not found!'}, 404
        
        '''
        if username:
            existing_user = Client.query.filter_by(username=username).first()
            if existing_user and existing_user.id != client_id:
                return {'error': 'Username already in use'}, 400
            user.username = username
        
        if email:
            existing_email = Client.query.filter_by(email=email).first()
            if existing_email and existing_email.id != client_id:
                return {'error': 'Email already in use'}, 400
            user.email = email
        '''

        if Client.query.filter((Client.username == username) | (Client.email == email)).first():
            return {'error': 'Username, or email already in use'}, 409

        response, status = user.update_user_info(username, password, email)

        if status == 200:
            updated_user = Client.get_by_username(username)
            return updated_user, 200
        else:
            return {'error': response}, status

    except Exception as e:
        return {'error': str(e)}, 500

