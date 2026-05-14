# Ai.Teach - The Ultimate AI Teacher Assistant 🚀

Ai.Teach is a high-fidelity, production-ready AI SaaS platform designed to reinvent the classroom experience. It transforms voice lectures into actionable insights, structured study notes, and interactive quizzes using advanced Azure AI services and GPT-4o.

![Ai.Teach Banner](https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1600)

## 🎥 Project Demo
Check out the Ai.Teach platform in action:

[![Ai.Teach Demo](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
*(Replace the link above with your actual demo recording link)*

## ✨ Core Features

- **🎙️ Speech-to-Text**: High-fidelity real-time transcription of lectures with speaker identification.
- **📝 AI Notes Generator**: Automatically creates structured, professionally formatted study guides from raw transcripts.
- **💡 Smart Summarization**: Condenses hours of lectures into key takeaways and executive summaries.
- **🧠 Interactive Quizzes**: AI-driven MCQ generation based on specific lecture content to test student understanding.
- **💬 AI Doubt Assistant**: A ChatGPT-style interface (Powered by Azure QA) to resolve student queries instantly.
- **📊 Learning Dashboard**: Centralized workspace with glassmorphism UI, stats tracking, and history management.

## 🛠️ Technology Stack

- **Frontend**: React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend**: Flask (Python) API.
- **AI Services**: 
  - Azure Speech Services (Speech to Text)
  - Azure Language Services (Summarization & QA)
  - OpenAI GPT-4o (Logic & Reasoning)
- **Aesthetics**: Premium Glassmorphism, Dark Mode, Mouse Spotlight Effect.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python 3.9+
- Azure AI Services Keys

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Ai.Teach.git
   cd Ai.Teach
   ```

2. **Setup Frontend**:
   ```bash
   npm install
   npm run dev
   ```

3. **Setup Backend**:
   ```bash
   pip install -r requirements.txt
   python app.py
   ```

4. **Environment Variables**:
   Create a `.env` file in the root directory and add your Azure keys:
   ```env
   SPEECH_KEY=your_key
   SPEECH_REGION=your_region
   LANGUAGE_KEY=your_key
   LANGUAGE_ENDPOINT=your_endpoint
   QA_PROJECT_NAME=Ai.Teach
   QA_DEPLOYMENT_NAME=AI Teacher
   ```

## 🎨 Design Philosophy
Ai.Teach is built with a **Futuristic SaaS** aesthetic, featuring:
- **Schibsted Grotesk & Fustat** typography.
- **Cyan Glow (#00e5ff)** and **Purple Accent (#7c3aed)** color system.
- Smooth `requestAnimationFrame` video backgrounds.

## 📄 License
MIT License. Created with ❤️ for modern education.
