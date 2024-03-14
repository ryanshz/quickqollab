from flask import Blueprint, request, redirect, jsonify
from controllers import auth_controller 

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.post('/login')
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    response, status_code = auth_controller.login_user(username, password)
    return jsonify(response), status_code

@auth_blueprint.post('/signup')
def signup():
    data = request.get_json() 
    username = data.get('username') 
    email = data.get('email')
    password = data.get('password')
    response, status = auth_controller.create_user(username, email, password)
    return jsonify(response), status

@auth_blueprint.post('/logout')
def logout():
    return "Logout Page"
