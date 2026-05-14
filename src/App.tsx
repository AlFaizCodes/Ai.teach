import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, Mic, FileText, Sparkles, BrainCircuit, 
  MessageSquare, History, Settings, LogIn, UserPlus,
  ChevronDown, Star, Search, Paperclip, Send, TrendingUp,
  Play, BookOpen, Clock, BarChart3, Layout, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LectureUpload from './pages/LectureUpload';
import NotesGenerator from './pages/NotesGenerator';
import SummaryPage from './pages/SummaryPage';
import QuizGenerator from './pages/QuizGenerator';
import AIChat from './pages/AIChat';
import HistoryPage from './pages/History';
import SettingsPage from './pages/Settings';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="min-h-screen relative overflow-x-hidden font-inter">
        {/* Cursor Spotlight */}
        <div 
          className="cursor-spotlight hidden lg:block"
          style={{ left: mousePos.x, top: mousePos.y }}
        />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app/*" element={<DashboardLayout />} />
        </Routes>
      </div>
    </Router>
  );
};

const DashboardLayout = () => {
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/app' },
    { name: 'Upload Lecture', icon: <Mic size={20} />, path: '/app/upload' },
    { name: 'Notes', icon: <FileText size={20} />, path: '/app/notes' },
    { name: 'Summaries', icon: <Sparkles size={20} />, path: '/app/summaries' },
    { name: 'Quiz Generator', icon: <BrainCircuit size={20} />, path: '/app/quiz' },
    { name: 'AI Chat', icon: <MessageSquare size={20} />, path: '/app/chat' },
    { name: 'History', icon: <History size={20} />, path: '/app/history' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/app/settings' },
  ];

  return (
    <div className="flex min-h-screen bg-background text-white relative overflow-hidden">
      {/* Mouse Spotlight for Dashboard */}
      <div 
        className="cursor-spotlight hidden lg:block opacity-50"
        style={{ left: mousePos.x, top: mousePos.y }}
      />

      {/* Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 256 : 80 }}
        className="fixed left-0 top-0 h-full glass border-r border-white/5 p-4 flex flex-col gap-4 z-50 bg-secondary/30 backdrop-blur-3xl"
      >
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="w-10 h-10 bg-cyan-glow rounded-xl flex items-center justify-center text-black shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <Sparkles size={24} />
          </div>
          {isSidebarOpen && (
            <span className="font-schibsted font-bold text-xl tracking-tighter">Ai.Teach</span>
          )}
        </div>

        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group ${
                location.pathname === item.path 
                ? 'bg-cyan-glow text-black shadow-[0_0_25px_rgba(0,229,255,0.25)]' 
                : 'hover:bg-white/10 text-gray-text hover:text-white border border-transparent hover:border-white/10'
              }`}
            >
              <div className={location.pathname === item.path ? 'text-black' : 'text-cyan-glow opacity-70 group-hover:opacity-100 transition-opacity'}>
                {item.icon}
              </div>
              {isSidebarOpen && <span className="font-medium">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="mt-auto p-4 glass-card bg-cyan-glow/5 border-cyan-glow/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-glow/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          {isSidebarOpen ? (
            <div className="relative z-10">
              <p className="text-[10px] text-cyan-glow font-bold mb-1 tracking-widest uppercase">Pro Workspace</p>
              <p className="text-sm font-medium">840/1000 Credits</p>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '84%' }}
                  className="bg-cyan-glow h-full rounded-full shadow-[0_0_10px_#00e5ff]" 
                />
              </div>
            </div>
          ) : (
            <div className="text-center font-bold text-cyan-glow relative z-10">84%</div>
          )}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8 relative z-10`}>
        <header className="flex justify-between items-center mb-10 glass p-6 rounded-[24px] border border-white/5 bg-white/[0.02]">
          <div>
            <h1 className="text-3xl font-fustat font-bold mb-1 bg-gradient-to-r from-white to-gray-text bg-clip-text text-transparent">
              {menuItems.find(i => i.path === location.pathname)?.name || 'Welcome Back'}
            </h1>
            <p className="text-gray-text text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              AI System Status: Operational
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-11 h-11 glass rounded-xl flex items-center justify-center hover:bg-white/10 transition-all border-white/10">
              <Search size={20} className="text-gray-text" />
            </button>
            <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-cyan-glow/20 to-purple-accent/20 border border-white/10 p-0.5 group cursor-pointer relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="rounded-lg bg-background w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-glow rounded-full border-2 border-background" />
            </div>
          </div>
        </header>

        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="upload" element={<LectureUpload />} />
          <Route path="notes" element={<NotesGenerator />} />
          <Route path="summaries" element={<SummaryPage />} />
          <Route path="quiz" element={<QuizGenerator />} />
          <Route path="chat" element={<AIChat />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
