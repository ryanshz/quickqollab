from models.Client import Client

def create_user(username, email, password):
    new_user = Client(username=username, email=email, password_hash=password)
    Client.save(new_user)
    return 'User signed up successfully'
