import os
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv
import random

load_dotenv()

class QuizService:
    def __init__(self):
        self.key = os.getenv("LANGUAGE_KEY")
        self.endpoint = os.getenv("LANGUAGE_ENDPOINT")

    def generate_quiz(self, text):
        if not self.key or not self.endpoint:
            # Demo Mode fallback
            return [
                {"question": "What is the core focus of Machine Learning?", "options": ["Learning without explicit instructions", "Hardware manufacturing", "Web development"], "answer": "Learning without explicit instructions"},
                {"question": "Which of these is a process of AI mentioned?", "options": ["Photosynthesis", "Reasoning", "Combustion"], "answer": "Reasoning"},
                {"question": "AI stands for?", "options": ["Animal Intelligence", "Artificial Intelligence", "Advanced Integration"], "answer": "Artificial Intelligence"}
            ]

        client = TextAnalyticsClient(endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        
        try:
            response = client.extract_key_phrases([text])
            key_phrases = response[0].key_phrases if not response[0].is_error else []
            
            if not key_phrases:
                return [{"question": "Not enough content to generate a quiz.", "options": ["Try longer text", "Add more details"], "answer": "Try longer text"}]

            sentences = text.split('.')
            quiz = []
            
            for phrase in random.sample(key_phrases, min(len(key_phrases), 5)):
                for sentence in sentences:
                    if phrase.lower() in sentence.lower() and len(sentence) > 20:
                        question = sentence.replace(phrase, "_______")
                        options = [phrase]
                        distractors = [p for p in key_phrases if p != phrase]
                        options.extend(random.sample(distractors, min(len(distractors), 2)))
                        random.shuffle(options)
                        
                        quiz.append({
                            "question": question.strip() + "?",
                            "options": options,
                            "answer": phrase
                        })
                        break
                if len(quiz) >= 5: break
            
            return quiz
        except Exception as e:
            return [{"question": f"Error: {str(e)}", "options": ["Error", "Details"], "answer": "Error"}]
