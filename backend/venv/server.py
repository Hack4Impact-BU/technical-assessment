from flask import Flask, jsonify
from flask_cors import CORS
import requests
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.debug = True

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

db = SQLAlchemy(app)

class Profile(db.Model):
    first_name = db.column(db.String(25), unique=False, nullable=False)
    last_name = db.column(db.String(25), unique=False, nullable=False)
    date = db.column(db.String(25), unique=False, nullable=False)

    def __repr__(self):
        return f"Name: {self.first_name}, Date{self.date}"

if __name__ == '__main__':
    app.run()

