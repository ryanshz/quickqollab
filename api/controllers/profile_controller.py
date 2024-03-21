from models.Client import Client

def get_user_profile(username):
    try:
        user = Client.query.filter_by(username=username).first()
        if user:
            user_data = {
                'username': user.username,
                'email': user.email,
                'date_created': user.date_created.strftime('%Y-%m-%d %H:%M:%S')
            }
            return user_data
        else:
            return None
    except Exception as e:
        raise e