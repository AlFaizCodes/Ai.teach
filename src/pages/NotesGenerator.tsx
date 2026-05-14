import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, Download, Copy, Highlighter, 
  Sparkles, ChevronRight, Bookmark, Share2, Clock, BookOpen, BrainCircuit
} from 'lucide-react';

const NotesGenerator = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      {/* Left: Original Transcript */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Clock size={18} className="text-gray-text" /> Original Transcript
          </h3>
          <span className="text-xs text-gray-text bg-white/5 px-3 py-1 rounded-full">4,280 Words</span>
        </div>
        <div className="glass-card flex-1 bg-secondary/20 overflow-y-auto max-h-[calc(100vh-300px)] text-gray-text leading-relaxed p-8 space-y-6">
          <p><span className="text-cyan-glow font-bold mr-2">Speaker 1:</span> Good morning everyone. Today we're diving deep into the foundations of Artificial Intelligence. When we talk about AI, we're not just talking about robots from science fiction. We're talking about systems that can learn and adapt.</p>
          <p><span className="text-cyan-glow font-bold mr-2">Speaker 1:</span> There are three main components I want you to remember: learning, reasoning, and self-correction. Learning is the phase where we feed data into the model...</p>
          <p><span className="text-cyan-glow font-bold mr-2">Speaker 1:</span> ...which brings us to machine learning. It's a subset of AI that focuses specifically on algorithms that improve through experience. Think of it like a student solving math problems. The more problems they solve, the better they get at recognizing the patterns.</p>
          <div className="p-10 text-center opacity-20">
            <BookOpen size={48} className="mx-auto mb-4" />
            <p>End of transcription</p>
          </div>
        </div>
      </div>

      {/* Right: Generated Notes */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="font-bold text-lg flex items-center gap-2">
            <Sparkles size={18} className="text-cyan-glow" /> AI Generated Notes
          </h3>
          <div className="flex gap-2">
            <button className="p-2 glass rounded-lg hover:text-cyan-glow transition-colors"><Copy size={16} /></button>
            <button className="p-2 glass rounded-lg hover:text-cyan-glow transition-colors"><Download size={16} /></button>
          </div>
        </div>
        <div className="glass-card flex-1 bg-white/5 border-cyan-glow/20 overflow-y-auto max-h-[calc(100vh-300px)] p-8">
          <article className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-fustat font-bold text-white mb-4 border-b border-white/10 pb-2">Topic: Introduction to AI</h2>
              <div className="flex gap-2 mb-6">
                <span className="bg-cyan-glow/10 text-cyan-glow text-[10px] px-2 py-1 rounded-full font-bold uppercase">Learning</span>
                <span className="bg-purple-accent/10 text-purple-accent text-[10px] px-2 py-1 rounded-full font-bold uppercase">Machine Learning</span>
                <span className="bg-green-500/10 text-green-500 text-[10px] px-2 py-1 rounded-full font-bold uppercase">Data Science</span>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-glow flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" /> 1. Definition of AI
              </h3>
              <p className="text-gray-text">Artificial Intelligence is the simulation of human intelligence processes by machines. It mimics cognitive functions such as learning and problem-solving.</p>
            </section>

            <section className="space-y-4">
              <h3 className="text-lg font-bold text-cyan-glow flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow" /> 2. Core Components
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-text">
                  <span className="font-bold text-white">Learning:</span> Acquisition of information and rules.
                </li>
                <li className="flex gap-3 text-gray-text">
                  <span className="font-bold text-white">Reasoning:</span> Reaching approximate or definite conclusions.
                </li>
                <li className="flex gap-3 text-gray-text">
                  <span className="font-bold text-white">Self-Correction:</span> Improving performance through feedback loops.
                </li>
              </ul>
            </section>

            <section className="bg-cyan-glow/5 border border-cyan-glow/10 p-4 rounded-xl">
              <h4 className="text-xs font-bold text-cyan-glow uppercase mb-2">Key Takeaway</h4>
              <p className="text-sm italic">"Machine learning is like a student: it improves through experience and pattern recognition."</p>
            </section>
          </article>
        </div>
        <div className="flex gap-4">
          <button className="neon-button flex-1 py-3 flex items-center justify-center gap-2">
            <Sparkles size={18} /> Generate Summary
          </button>
          <button className="glass flex-1 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
            <BrainCircuit size={18} /> Build Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesGenerator;
