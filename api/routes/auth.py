from flask import Blueprint, request, render_template, redirect, url_for, jsonify
from controllers import auth_controller

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    response, status_code = auth_controller.login_user(username, password)
    return jsonify(response), status_code


@auth_blueprint.route('/signup')
def signup():
    username = request.form['username']
    password = request.form['password']
    email = request.form['email']
    auth_controller.create_user(username,password,email)
    return jsonify('user signed up sucessfully')

@auth_blueprint.post('/register_user')
def register_user():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    return redirect('/dashboard')

@auth_blueprint.post('/logout')
def logout():
    return "Logout Page"
