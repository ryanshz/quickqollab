from models.Client import Client

    def create_user(username, email, password):
        new_user = {username, email, password}
        Client.save(new_user)
        return jsonify('User signed up sucessfully')