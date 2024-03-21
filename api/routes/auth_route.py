from flask import Blueprint, request, redirect, jsonify, session
from controllers import auth_controller 

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.post('/login')
def login():
    data = request.get_json()
    if not data:
        return jsonify({'error': 'Missing data'}), 400
    
    username = data.get('username')
    password = data.get('password')
    
    if not username or not password:
        return jsonify({'error': 'Missing username or password'}), 400

    response, status = auth_controller.login_user(username, password)
    return jsonify(response), status

@auth_blueprint.post('/signup')
def signup():
    data = request.get_json() 
    username = data.get('username') 
    email = data.get('email')
    password = data.get('password')
    response, status = auth_controller.create_user(username, email, password)
    return jsonify(response), status

@auth_blueprint.get('/logout')
def logout():
    session.clear()
    return {'message': 'Logged out'}, 200

@auth_blueprint.get('is-authenticated')
def is_authenticated():
    if 'user_id' in session:
        return {'authenticated': True}, 200
    else:
        return {'authenticated': False}, 401
