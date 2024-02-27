from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os 
from routes import canvas_route as cr, dashboard_route as dr, auth
from flask_cors import CORS
import datetime
x = datetime.datetime.now()

app = Flask(__name__, template_folder='views')
CORS(app)

# Register Blueprints
app.register_blueprint(cr.canvas_blueprint)
app.register_blueprint(dr.dashboard_blueprint)
app.register_blueprint(auth.auth_blueprint)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def get_time():
 
    # Returning an api for showing in  reactjs
    return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
