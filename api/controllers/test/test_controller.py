from models.Client import Client
from flask import jsonify, abort

def get_client(username):
    client = Client.get_by_username(username)
    if client:
        return jsonify({
            'client_id': client.client_id,
            'username': client.username,
            'email': client.email,
            'date_created': client.date_created
        })
    else:
        abort(404)
    