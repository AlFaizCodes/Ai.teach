import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, FileText, BrainCircuit, Sparkles, 
  TrendingUp, Clock, Play, Plus
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { label: 'Total Lectures', value: '42', icon: <Mic />, trend: '+12%', color: 'cyan' },
    { label: 'Notes Generated', value: '156', icon: <FileText />, trend: '+8%', color: 'purple' },
    { label: 'AI Credits', value: '840', icon: <Sparkles />, trend: '84%', color: 'green' },
    { label: 'Quiz Count', value: '89', icon: <BrainCircuit />, trend: '+5%', color: 'orange' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <div className={`p-3 rounded-xl bg-${stat.color}-glow/10 text-cyan-glow`}>
                {stat.icon}
              </div>
              <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-lg">
                {stat.trend}
              </span>
            </div>
            <div>
              <p className="text-gray-text text-[12px] font-schibsted font-medium uppercase tracking-wider">{stat.label}</p>
              <h3 className="text-3xl font-fustat font-bold mt-1 tracking-tight">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Workspace Quick Start */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card bg-gradient-to-br from-cyan-glow/10 to-purple-accent/10 border-white/10 p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h2 className="text-3xl font-fustat font-bold mb-4">Start a New Workspace</h2>
              <p className="text-gray-text mb-8 max-w-md">Ready to transform your next lecture? Upload your audio or video file and let AI handle the rest.</p>
              <button className="neon-button flex items-center gap-2">
                <Plus size={20} /> Create New Session
              </button>
            </div>
            <div className="absolute top-0 right-0 p-8 text-cyan-glow/20 transition-transform group-hover:scale-110">
              <Sparkles size={160} />
            </div>
          </div>

          <div className="glass-card">
            <h3 className="text-xl font-bold mb-6">Recent Lectures</h3>
            <div className="space-y-4">
              {[
                { title: 'Intro to Quantum Computing', date: '2 hours ago', duration: '45:20', status: 'Completed' },
                { title: 'Advanced Neural Networks', date: 'Yesterday', duration: '1:12:05', status: 'Completed' },
                { title: 'Philosophy of Mind', date: '3 days ago', duration: '38:15', status: 'Summarized' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-cyan-glow">
                      <Play size={18} fill="currentColor" />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-xs text-gray-text">{item.date} • {item.duration}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan-glow border border-cyan-glow/30 px-3 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-card">
          <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
          <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
            {[
              { title: 'Quiz Generated', desc: 'Quantum Computing MCQ set ready', time: '10:30 AM', icon: <BrainCircuit size={14} />, color: 'orange' },
              { title: 'Summary Ready', desc: 'Advanced Neural Networks summary finished', time: '09:15 AM', icon: <Sparkles size={14} />, color: 'purple' },
              { title: 'New Upload', desc: 'Physics Lecture Part 2 uploaded', time: 'Yesterday', icon: <Mic size={14} />, color: 'cyan' },
              { title: 'Notes Exported', desc: 'AI Ethics notes saved as PDF', time: '2 days ago', icon: <FileText size={14} />, color: 'green' },
            ].map((item, i) => (
              <div key={i} className="relative pl-10">
                <div className={`absolute left-0 top-1 w-6 h-6 rounded-full bg-${item.color}-glow/20 border border-${item.color}-glow/40 flex items-center justify-center text-cyan-glow`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-bold">{item.title}</h4>
                  <p className="text-xs text-gray-text">{item.desc}</p>
                  <span className="text-[10px] text-gray-text/60 mt-1 block uppercase tracking-wider">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
