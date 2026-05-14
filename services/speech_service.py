import azure.cognitiveservices.speech as speechsdk
import os
from dotenv import load_dotenv

load_dotenv()

class SpeechService:
    def __init__(self):
        self.key = os.getenv("SPEECH_KEY")
        self.region = os.getenv("SPEECH_REGION")

    def speech_to_text(self, audio_path):
        if not self.key or not self.region:
            # Demo Mode fallback
            return "This is a demo transcription. Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning, reasoning, and self-correction. Machine learning is a major subset of AI. It involves the use of algorithms and statistical models that computer systems use to perform tasks without explicit instructions."

        speech_config = speechsdk.SpeechConfig(subscription=self.key, region=self.region)
        audio_config = speechsdk.audio.AudioConfig(filename=audio_path)
        
        speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config, audio_config=audio_config)
        
        result = speech_recognizer.recognize_once_async().get()

        if result.reason == speechsdk.ResultReason.RecognizedSpeech:
            return result.text
        elif result.reason == speechsdk.ResultReason.NoMatch:
            return "No speech could be recognized."
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            return f"Speech Recognition canceled: {cancellation_details.reason}. Error: {cancellation_details.error_details}"
        
        return "Unknown error in speech recognition."
