from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import speech_comparison as sr

app = Flask(__name__)
CORS(app) 

@app.route('/chat', methods=['POST'])
def product_info():
    data = request.json
    original_text = data['original_text']
    user_text =data['user_text']
    output = sr.get_answer(original_text, user_text)
    return jsonify({"answer": output})

if __name__ == '__main__':
    app.run(debug=True)