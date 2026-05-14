import os
from azure.ai.textanalytics import TextAnalyticsClient
from azure.core.credentials import AzureKeyCredential
from dotenv import load_dotenv

load_dotenv()

class SummarizeService:
    def __init__(self):
        self.key = os.getenv("LANGUAGE_KEY")
        self.endpoint = os.getenv("LANGUAGE_ENDPOINT")

    def summarize(self, text):
        if not self.key or not self.endpoint:
            # Demo Mode fallback
            return "• AI simulates human intelligence in machines through learning and reasoning.\n• Machine learning is a core subset that enables computers to learn from data.\n• AI processes include self-correction and reasoning for tasks like speech recognition."

        if len(text) < 50:
            return "Text too short to summarize."

        client = TextAnalyticsClient(endpoint=self.endpoint, credential=AzureKeyCredential(self.key))
        
        try:
            poller = client.begin_extract_summary([text])
            extract_summary_results = poller.result()
            
            summary = []
            for result in extract_summary_results:
                if not result.is_error:
                    for sentence in result.sentences:
                        summary.append(sentence.text)
                else:
                    return f"Error: {result.code} - {result.message}"
            
            return " ".join(summary)
        except Exception as e:
            return f"Summarization failed: {str(e)}"
