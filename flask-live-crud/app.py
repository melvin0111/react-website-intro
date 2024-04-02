from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from os import environ 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Taft#2021@flask_db:3306/sailing_club_database'

db = SQLAlchemy(app)

class User(db.Model): 
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(80), unique = True, nullable = False)
    email = db.Column(db.String(120), unique = True, nullable = False)

    def json(self): 
        return {'id': id, 'username': self.username, 'email': self.email}
    
    db.create_all()

    #Create Test Route 

    @app.route('/test', methods = ['GET'])
    def test(): 
        return make_response(jsonify({'message':  'test route'}), 200)

# Create a User

@app.route('/users')
def create_user(): 
    try:
        data = request.get_json()
        new_user = User(username= data)['username'], email = data['email']
        db.session.add(new_user)
        db.session.commit()
        return make_response(jsonify({'message':  'user_created'}), 201)
    except Exception as e: 
        return make_response(jsonify({'message':  'error creating user'}), 500)
    
    # Get all Users

@app.route('/users', methods = ['GET'])
def get_users(): 
    try: 
        users = User.query.all()
        return make_response(jsonify({'users': [user.json() for user in users]}), 200)
    except: 
        return make_response(jsonify({'message':  'error getting users'}), 500)
    

# Get a User by ID
    
@app.route('/users/<int:id>', methods=['GET'])
def get_user(id):
  try:
    user = User.query.filter_by(id=id).first()
    if user:
      return make_response(jsonify({'user': user.json()}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except:
    return make_response(jsonify({'message': 'error getting user'}), 500)
  
  # Update a User by ID

@app.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
  try:
    user = User.query.filter_by(id=id).first()
    if user:
      data = request.get_json()
      user.username = data['username']
      user.email = data['email']
      db.session.commit()
      return make_response(jsonify({'message': 'user updated'}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except:
    return make_response(jsonify({'message': 'error updating user'}), 500)
  

# Delete a User
  
@app.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
  try:
    user = User.query.filter_by(id=id).first()
    if user:
      db.session.delete(user)
      db.session.commit()
      return make_response(jsonify({'message': 'user deleted'}), 200)
    return make_response(jsonify({'message': 'user not found'}), 404)
  except:
    return make_response(jsonify({'message': 'error deleting user'}), 500)