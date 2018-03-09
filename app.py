import os

from flask import Flask, render_template, request, send_from_directory

app = Flask(__name__, static_url_path='/static')


@app.route('/')
def home():
    return render_template('feedme.html')


@app.route('/<path:path>')
def send_js(path):
    return send_from_directory('static', path)


@app.route('/register')
def register():
    form_params = request.args
    return home()


