import React from 'react';
import { 
  Search, Filter, Calendar, FileText, 
  Sparkles, BrainCircuit, Play, MoreVertical,
  Download, Trash2, Clock
} from 'lucide-react';

const HistoryPage = () => {
  const history = [
    { id: 1, title: 'Intro to Quantum Computing', date: 'Oct 12, 2026', type: 'Lecture', duration: '45:20', credits: 12 },
    { id: 2, title: 'Advanced Neural Networks', date: 'Oct 10, 2026', type: 'Lecture', duration: '1:12:05', credits: 24 },
    { id: 3, title: 'Philosophy of Mind', date: 'Oct 08, 2026', type: 'Summary', duration: '5:10', credits: 5 },
    { id: 4, title: 'AI Ethics MCQ Set', date: 'Oct 05, 2026', type: 'Quiz', duration: '15 Questions', credits: 8 },
    { id: 5, title: 'History of Computing', date: 'Sep 28, 2026', type: 'Lecture', duration: '32:45', credits: 10 },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-text" size={18} />
          <input 
            type="text" 
            placeholder="Search saved lectures, notes, or quizzes..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:ring-2 ring-cyan-glow/50 transition-all"
          />
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-none glass px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10">
            <Calendar size={18} /> Date
          </button>
          <button className="flex-1 md:flex-none glass px-4 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-white/10">
            <Filter size={18} /> Filter
          </button>
        </div>
      </div>

      <div className="glass-card p-0 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="p-6 text-xs font-bold uppercase text-gray-text tracking-widest">Resource Name</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-text tracking-widest">Type</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-text tracking-widest">Created</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-text tracking-widest">Stats</th>
              <th className="p-6 text-xs font-bold uppercase text-gray-text tracking-widest">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {history.map((item) => (
              <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center text-cyan-glow">
                      {item.type === 'Lecture' ? <Play size={18} fill="currentColor" /> : item.type === 'Summary' ? <Sparkles size={18} /> : <BrainCircuit size={18} />}
                    </div>
                    <span className="font-medium">{item.title}</span>
                  </div>
                </td>
                <td className="p-6 text-sm">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${
                    item.type === 'Lecture' ? 'border-cyan-glow/30 text-cyan-glow' : 'border-purple-accent/30 text-purple-accent'
                  }`}>
                    {item.type}
                  </span>
                </td>
                <td className="p-6 text-sm text-gray-text">{item.date}</td>
                <td className="p-6 text-sm text-gray-text">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1"><Clock size={12} /> {item.duration}</span>
                    <span className="flex items-center gap-1 text-cyan-glow/60"><Sparkles size={12} /> {item.credits}c</span>
                  </div>
                </td>
                <td className="p-6">
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:text-cyan-glow transition-colors"><Download size={18} /></button>
                    <button className="p-2 hover:text-red-400 transition-colors"><Trash2 size={18} /></button>
                    <button className="p-2 hover:text-white transition-colors"><MoreVertical size={18} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
