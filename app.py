from flask import Flask, render_template, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
import os
from services.speech_service import SpeechService
from services.summarize_service import SummarizeService
from services.qa_service import QAService
from services.quiz_service import QuizService
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'uploads'
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB limit

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Initialize Services
speech_service = SpeechService()
summarize_service = SummarizeService()
qa_service = QAService()
quiz_service = QuizService()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/upload', methods=['POST'])
def upload_audio():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    if file:
        filename = secure_filename(file.filename)
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        
        # Convert Speech to Text
        text = speech_service.speech_to_text(filepath)
        return jsonify({"text": text})

@app.route('/api/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    summary = summarize_service.summarize(text)
    return jsonify({"summary": summary})

@app.route('/api/ask', methods=['POST'])
def ask_question():
    data = request.json
    question = data.get('question', '')
    context = data.get('context', '')
    
    if not question or not context:
        return jsonify({"error": "Question and Context (notes) are required"}), 400
    
    answer = qa_service.get_answer(question, context)
    return jsonify({"answer": answer})

@app.route('/api/quiz', methods=['POST'])
def generate_quiz():
    data = request.json
    text = data.get('text', '')
    if not text:
        return jsonify({"error": "No text provided"}), 400
    
    quiz = quiz_service.generate_quiz(text)
    return jsonify({"quiz": quiz})

# Serve static files for styling and scripts
@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
