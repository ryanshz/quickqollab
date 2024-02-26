from flask import Blueprint, request, render_template, redirect, url_for
from controllers import auth_controller 

auth_blueprint = Blueprint('auth', __name__)

@auth_blueprint.route('/login')
def login():
    return "Login Page"

@auth_blueprint.route('/signup')
def signup():
    return render_template('auth/signup.html')

@auth_blueprint.post('/register_user')
def register_user():
    username = request.form.get('username')
    email = request.form.get('email')
    password = request.form.get('password')
    return redirect('/dashboard')

@auth_blueprint.post('/logout')
def logout():
    return "Logout Page"
