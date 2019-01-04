from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgres://jzaeqzftrckqlt:38cfb6c9aa7a61207555b75a7db662d3efc3f2aa7a448f1f609d3460559305e1@ec2-107-20-250-113.compute-1.amazonaws.com:5432/d4ctgfpvfna7rv"
db = SQLAlchemy(app)


from macrop.schema import *
from macrop.routes import *

app.run(port=9000)