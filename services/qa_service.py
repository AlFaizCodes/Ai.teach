import os
from azure.ai.language.questionanswering import QuestionAnsweringClient
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv

load_dotenv()

class QAService:
    def __init__(self):
        self.key = os.getenv("LANGUAGE_KEY")
        self.endpoint = os.getenv("LANGUAGE_ENDPOINT")
        self.project_name = os.getenv("QA_PROJECT_NAME")
        self.deployment_name = os.getenv("QA_DEPLOYMENT_NAME")

    def get_answer(self, question, context):
        if not self.key or not self.endpoint:
            # Demo Mode fallback
            q = question.lower()
            if "machine learning" in q:
                return "Machine learning is a subset of AI that uses algorithms and statistical models to perform tasks without explicit instructions."
            elif "processes" in q:
                return "The processes mentioned are learning, reasoning, and self-correction."
            return "That's an interesting question about the lecture. Based on the notes, AI simulates human intelligence for tasks like reasoning and learning."

        client = QuestionAnsweringClient(self.endpoint, AzureKeyCredential(self.key))
        
        try:
            output = client.get_answers_from_text(
                question=question,
                text_documents=[context]
            )
            
            if output.answers:
                return output.answers[0].answer
            return "I couldn't find an answer to that in the notes."
            
        except Exception as e:
            return f"Doubt solving failed: {str(e)}"
