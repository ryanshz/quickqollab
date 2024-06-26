from flask import Flask
from dotenv import load_dotenv
import os 
from routes import auth_route as auth, room_route as rr
from flask_cors import CORS
from models.Socket import socketio 
from utils.sql_alchemy import db
from utils.bcrypt import bcrypt
from datetime import timedelta


load_dotenv()
app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SECURE'] = True
app.config["SESSION_COOKIE_SAMESITE"] = "None"
app.config['PERMANENT_SESSION_LIFETIME'] = timedelta(hours=1)

# Postgres Local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASS")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

# Register Blueprints
app.register_blueprint(auth.auth_blueprint, url_prefix='/auth')
app.register_blueprint(rr.rooms_blueprint, url_prefix='/room')


# Setup
db.init_app(app)
bcrypt.init_app(app)
CORS(app, supports_credentials=True)
socketio.init_app(app, cors_allowed_origins="*")

if __name__ == '__main__':
    socketio.run(app, debug=True)
