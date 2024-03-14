from models.Client import Client
from flask import jsonify

def create_user(username, email, password):
    try:
        existing_user = Client.query.filter((Client.username == username) | (Client.email == email)).first()
        if existing_user:
            return {"warning": "User with this username or email already exists."}, 409 
        
        new_user = Client(username=username, email=email)
        response, status = new_user.save(password)
        
        if status == 200:
            return {"message": "User signed up successfully"}, 200
        else:
            return response, status
    except Exception as e:
        return {"error": str(e)}, 500
    
def login_user(username, password):
    try:
        user = Client.query.filter_by(username=username).first()
        if user and user.check_password(password):
            return {'message': 'Successful Login!'}, 200
        else:
            return {'message': 'Invalid username or password!'}, 401
    except Exception as e:
        return {'error': str(e)}, 500



