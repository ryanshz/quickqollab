from flask import Blueprint, jsonify, request
from controllers import profile_controller

profile_blueprint = Blueprint('profile', __name__)

@profile_blueprint.route('/profile')
def get_profile():     
    try:
        username = request.headers.get('username')

        user_data = profile_controller.get_user_profile(username)

        if user_data:
            return jsonify(user_data), 200
        else:
            return jsonify({'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}), 500