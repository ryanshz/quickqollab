from flask import Blueprint, request, redirect, jsonify
from controllers import auth_controller 
from models.Client import Client

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login')
def login():
    return "Login Page"

@auth_blueprint.route('/signup', methods=['POST'])
def signup():
    if 'username' not in request.form or 'password' not in request.form or 'email' not in request.form:
        return jsonify({'error': 'Missing username, password, or email'}), 400

    username = request.form['username']
    password = request.form['password']
    email = request.form['email']

    existing_user = Client.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({'error': 'Username already exists'}), 409

    new_user = Client(username=username, email=email, password_hash=password)
    new_user.save()

    return jsonify({'message': 'User signed up successfully', 'user_id': new_user.client_id}), 201

@auth_blueprint.post('/register_user')
def register_user():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    return redirect('/dashboard')

@auth_blueprint.post('/logout')
def logout():
    return "Logout Page"
