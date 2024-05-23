from taskmanager import app, db  # Import your app instance and db from the relevant module

with app.app_context():
    db.create_all()