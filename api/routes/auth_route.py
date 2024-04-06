from flask import Blueprint, request, redirect, jsonify, session
from controllers import auth_controller 
import base64
from io import BytesIO

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
    
    if status == 200:
        return jsonify(response), status
    else:
        return jsonify({'error': response}), status

@auth_blueprint.post('/signup')
def signup():
    data = request.get_json() 
    username = data.get('username') 
    email = data.get('email')
    password = data.get('password')
    response, status = auth_controller.create_user(username, email, password)
    return jsonify(response), status

@auth_blueprint.put('/update')
def update():
    data = request.get_json()
    if not data:
        return jsonify({'error':'Missing data'}), 400
    print(data)
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')
    profile_picture = data.get('profile_picture')
    if profile_picture:
        profile_picture = base64.b64decode(profile_picture)
        image_stream = BytesIO(profile_picture)
        image_bytes = image_stream.read()
    else:
        image_bytes = None

    response, status = auth_controller.update_user(username, password, email, image_bytes)

    if status == 200:
        return jsonify(response), status
    else:
        return jsonify({'error': response}), status

@auth_blueprint.get('/logout')
def logout():
    session.clear()
    return {'authenticated': False}, 200

@auth_blueprint.get('is-authenticated')
def is_authenticated():
    if 'user_id' in session:
        return {'authenticated': True}, 200
    else:
        return {'authenticated': False}, 401
