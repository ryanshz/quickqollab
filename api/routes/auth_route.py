from flask import Blueprint, request, redirect, jsonify
from controllers import auth_controller 

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login')
def login():
    return "Login Page"

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
