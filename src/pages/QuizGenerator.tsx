import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Timer, CheckCircle, AlertCircle, 
  ChevronRight, RotateCcw, Share2, HelpCircle
} from 'lucide-react';

const QuizGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      q: "What is the core focus of Machine Learning?",
      options: ["Hardware manufacturing", "Learning without explicit instructions", "Web development", "Database management"],
      a: 1
    },
    {
      q: "Which is NOT a core pillar of AI mentioned in the lecture?",
      options: ["Learning", "Reasoning", "Photosynthesis", "Self-correction"],
      a: 2
    },
    {
      q: "The simulation of human intelligence by machines is known as?",
      options: ["Cognitive Science", "Artificial Intelligence", "Robotics", "Cybernetics"],
      a: 1
    }
  ];

  const handleNext = () => {
    if (selectedOption === questions[currentStep].a) {
      setScore(score + 1);
    }
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20">
      <div className="flex justify-between items-center bg-white/5 p-4 rounded-2xl border border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
            <Trophy size={24} />
          </div>
          <div>
            <p className="text-xs text-gray-text uppercase font-bold tracking-widest">Active Quiz</p>
            <h4 className="font-bold">Fundamentals of AI</h4>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-right">
            <p className="text-xs text-gray-text">Progress</p>
            <p className="font-bold">{currentStep + 1} / {questions.length}</p>
          </div>
          <div className="flex items-center gap-2">
            <Timer size={20} className="text-cyan-glow" />
            <span className="font-mono font-bold text-xl">04:59</span>
          </div>
        </div>
      </div>

      <AnimatePresence mode='wait'>
        {!showResult ? (
          <motion.div 
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="glass-card bg-secondary/30 p-12 border-white/10"
          >
            <div className="flex gap-4 mb-10">
              <span className="text-cyan-glow font-bold text-2xl font-fustat">Q{currentStep + 1}.</span>
              <h2 className="text-3xl font-fustat font-bold leading-tight">{questions[currentStep].q}</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-10">
              {questions[currentStep].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedOption(i)}
                  className={`p-6 rounded-2xl border text-left transition-all duration-200 group flex justify-between items-center ${
                    selectedOption === i 
                    ? 'bg-cyan-glow/10 border-cyan-glow text-cyan-glow' 
                    : 'bg-white/5 border-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                      selectedOption === i ? 'bg-cyan-glow text-black' : 'bg-white/10 text-gray-text'
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="font-medium">{opt}</span>
                  </div>
                  {selectedOption === i && <CheckCircle size={24} />}
                </button>
              ))}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 text-gray-text text-sm italic">
                <HelpCircle size={16} /> Select the most accurate answer based on the lecture.
              </div>
              <button 
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`neon-button flex items-center gap-2 ${selectedOption === null ? 'opacity-50 grayscale' : ''}`}
              >
                {currentStep === questions.length - 1 ? 'Finish Quiz' : 'Next Question'} <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card bg-gradient-to-br from-cyan-glow/10 to-purple-accent/10 text-center py-20 px-10 border-cyan-glow/20"
          >
            <div className="w-24 h-24 bg-cyan-glow rounded-full flex items-center justify-center text-black mx-auto mb-8 shadow-[0_0_50px_rgba(0,229,255,0.3)]">
              <Trophy size={48} />
            </div>
            <h2 className="text-5xl font-fustat font-bold mb-4">Quiz Completed!</h2>
            <p className="text-xl text-gray-text mb-12">You scored <span className="text-cyan-glow font-bold">{score} out of {questions.length}</span></p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => window.location.reload()} className="neon-button flex items-center gap-2">
                <RotateCcw size={20} /> Try Again
              </button>
              <button className="glass px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/10 transition-all">
                <Share2 size={20} /> Share Result
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <p className="text-3xl font-bold text-cyan-glow">100%</p>
                <p className="text-xs text-gray-text uppercase">Accuracy</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-3xl font-bold text-purple-accent">04:22</p>
                <p className="text-xs text-gray-text uppercase">Time Taken</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-orange-500">#42</p>
                <p className="text-xs text-gray-text uppercase">Rank</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuizGenerator;
