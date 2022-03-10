from flask import Flask, jsonify, render_template ,send_from_directory
from flask_cors import CORS

app = Flask(__name__, static_folder='../dist' ,template_folder='../dist')
CORS(app)


@app.route('/')
def index():
  return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port='5000')  # available on all interfaces for testing only