import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, ListChecks, Target, 
  Lightbulb, ExternalLink, Download, ChevronRight, BrainCircuit 
} from 'lucide-react';

const SummaryPage = () => {
  const summaries = [
    { 
      title: 'Executive Summary', 
      content: 'A comprehensive overview of Artificial Intelligence, focusing on its definition as a simulation of human intelligence. The lecture covers the evolution from basic rule-based systems to modern self-correcting algorithms.',
      icon: <Sparkles />, color: 'cyan'
    },
    { 
      title: 'Key Concepts', 
      content: 'Learning (Data acquisition), Reasoning (Logical conclusions), and Self-Correction (Optimization). Machine Learning as a core subset focusing on pattern recognition through experience.',
      icon: <Target />, color: 'purple'
    },
    { 
      title: 'Actionable Insights', 
      content: 'Focus on data quality for the learning phase. Implement feedback loops for self-correction. Use ML for pattern-heavy tasks like speech and vision recognition.',
      icon: <Lightbulb />, color: 'orange'
    }
  ];

  return (
    <div className="space-y-10">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-cyan-glow font-bold text-sm tracking-widest uppercase">Intelligence Layer</span>
          <h2 className="text-4xl font-fustat font-bold mt-2">AI Summary Studio</h2>
        </div>
        <button className="neon-button flex items-center gap-2">
          <Download size={18} /> Export Full Analysis
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {summaries.map((s, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card relative overflow-hidden group border-${s.color}-glow/20`}
          >
            <div className={`w-12 h-12 rounded-xl bg-${s.color}-glow/10 text-cyan-glow flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {s.icon}
            </div>
            <h3 className="text-xl font-bold mb-4">{s.title}</h3>
            <p className="text-gray-text leading-relaxed">{s.content}</p>
            <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-${s.color}-glow/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
          </motion.div>
        ))}
      </div>

      <div className="glass-card bg-secondary/30">
        <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
          <ListChecks className="text-cyan-glow" /> Important Topics & Keywords
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            'Neural Networks', 'Heuristic Search', 'Natural Language Processing', 
            'Deep Learning', 'Big Data', 'Algorithm Efficiency', 'Cognitive Computing',
            'Supervised Learning', 'Backpropagation', 'TensorFlow'
          ].map((tag, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 glass rounded-full text-sm font-medium border-white/5 hover:border-cyan-glow/40 hover:text-cyan-glow transition-all cursor-pointer flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-glow/50" />
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass-card p-0 overflow-hidden">
          <div className="p-6 border-b border-white/5 bg-white/5">
            <h4 className="font-bold">Bullet Summary</h4>
          </div>
          <ul className="p-6 space-y-4">
            {[
              'AI mimics human cognitive functions.',
              'Machine learning focuses on experience-based improvement.',
              'Three pillars: Learning, Reasoning, Self-Correction.',
              'Transition from rule-based to data-driven models.'
            ].map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-text">
                <ChevronRight className="text-cyan-glow shrink-0" size={16} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card bg-gradient-to-br from-purple-accent/5 to-cyan-glow/5 flex flex-col items-center justify-center text-center p-12 space-y-6">
          <BrainCircuit size={64} className="text-purple-accent animate-pulse-slow" />
          <h4 className="text-2xl font-bold">Ready for Assessment?</h4>
          <p className="text-gray-text max-w-xs">Generate a custom quiz based on this summary to test your knowledge.</p>
          <button className="neon-button">Start Quiz Generator</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
