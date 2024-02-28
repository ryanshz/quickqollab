from models.Client import get_by_id
from flask import jsonify, abort

def get_client(id):
    client = get_by_id(id)
    if client:
        return jsonify({
            'client_id': client.client_id,
            'username': client.username,
            'email': client.email,
            'date_created': client.date_created
        })
    else:
        abort(404)
    