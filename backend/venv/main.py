from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
cors = CORS(app,)
#  origins='*'

url = "https://chroniclingamerica.loc.gov/newspapers.json"

@app.route('/news', methods=['GET'])

def news():
    response = requests.get(url)
    data = response.json()
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True, port=8080)

