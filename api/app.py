from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os 
from routes import canvas_route as cr, dashboard_route as dr, auth
from routes.test import test_route as test
from flask_cors import CORS
from models.Client import db    
import datetime
x = datetime.datetime.now()

load_dotenv()
app = Flask(__name__, template_folder='views')

# Postgres Local DB
app.config['SQLALCHEMY_DATABASE_URI'] = f'postgresql://{os.getenv("DB_USER")}:{os.getenv("DB_PASS")}@{os.getenv("DB_HOST")}:{os.getenv("DB_PORT")}/{os.getenv("DB_NAME")}'

# Register Blueprints
app.register_blueprint(cr.canvas_blueprint)
app.register_blueprint(dr.dashboard_blueprint)
app.register_blueprint(auth.auth_blueprint)

# Tests
app.register_blueprint(test.test_blueprint)

# Setup
db.init_app(app)
CORS(app)

if __name__ == "__main__":
    app.run()