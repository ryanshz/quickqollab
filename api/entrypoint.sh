#!/bin/sh

echo "Starting the app..."

# Initialize the database if it doesn't exist
flask db init || true

# Generate a migration script (will do nothing if there are no changes)
flask db migrate -m 'Initial migration' || true

# Apply the migrations
flask db upgrade

# Execute the command passed to the container
exec "$@"
