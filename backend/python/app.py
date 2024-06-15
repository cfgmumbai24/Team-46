from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import speech_comparison as sr
import emails as email
import reading_Function as rf

app = Flask(__name__)
CORS(app) 

@app.route('/chat', methods=['POST'])
def product_info():
    data = request.json
    original_text = data['original_text']
    user_text =data['user_text']
    print(original_text, user_text)
    output = sr.get_answer(original_text, user_text)
    return jsonify({"answer": output})

@app.route('/email', methods=['POST'])
def send_mail():
    data = request.json
    content = data['content']
    recipients = data['recipients']
    email.send_email(content, recipients)
    return jsonify({"output": "Email sent!"})

@app.route('/get_grade', methods=['POST'])
def get_final_gradee():
    data = request.json
    grade = data['grade']
    accuracy = data['accuracy']
    print(grade, accuracy)
    ans = rf.get_final_grade(grade, accuracy)
    return jsonify({"output": ans})

if __name__ == '__main__':
    app.run(debug=True)