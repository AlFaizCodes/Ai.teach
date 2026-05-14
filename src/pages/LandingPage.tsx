import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Star, Search, Paperclip, Mic, 
  Sparkles, Play, ArrowRight, ShieldCheck, 
  Zap, Globe, Smile, BrainCircuit, MessageSquare, FileText
} from 'lucide-react';
import VideoBackground from '../components/VideoBackground';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="relative w-full">
      <VideoBackground src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4" />
      
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-[120px] py-[16px] z-[100] flex justify-between items-center bg-transparent">
        <div className="font-schibsted font-semibold text-[24px] tracking-[-1.44px] text-black">
          Ai.Teach
        </div>
        
        <ul className="hidden lg:flex items-center gap-[32px] text-black">
          {['Platform', 'Features', 'Projects', 'Community', 'Contact'].map((item) => (
            <li key={item}>
              <a href="#" className="font-schibsted font-medium text-[16px] tracking-[-0.2px] flex items-center gap-1 hover:opacity-70 transition-opacity">
                {item} {item === 'Features' && <ChevronDown size={14} />}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-[16px]">
          <Link to="/app" className="font-schibsted font-medium text-[16px] w-[82px] text-center text-black">Sign Up</Link>
          <Link to="/app" className="bg-black text-white px-6 py-2 rounded-full font-schibsted font-medium text-[16px] w-[101px] text-center shadow-lg hover:scale-105 transition-transform">
            Log In
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="platform" className="relative min-h-screen flex flex-col items-center justify-center pt-[136px] pb-20 px-[120px] -mt-[50px]">
        {/* ... existing hero content ... */}
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center bg-white rounded-full p-1 shadow-xl mb-[34px] border border-black/5"
        >
          <div className="bg-[#0e1311] text-white px-4 py-1.5 rounded-full text-[14px] font-inter flex items-center gap-2">
            <Star size={14} fill="currentColor" />
            <span>New</span>
          </div>
          <span className="px-4 text-black text-[14px] font-inter">Discover what's possible</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-fustat font-bold text-[80px] tracking-[-4.8px] leading-none text-black text-center mb-[34px]"
        >
          Reinvent the Classroom <br /> Experience
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-fustat font-medium text-[20px] tracking-[-0.4px] text-[#505050] text-center max-w-[800px] mb-[44px]"
        >
          Transform voice lectures into actionable insights, summaries, and AI-driven learning tools designed for modern education.
        </motion.p>

        {/* AI Prompt Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-[728px] h-[200px] bg-black/24 backdrop-blur-md rounded-[18px] p-6 flex flex-col justify-between shadow-2xl border border-white/10"
          style={{ backgroundColor: 'rgba(0,0,0,0.24)' }}
        >
          <div className="flex justify-between items-center text-[12px] font-schibsted font-medium text-white px-1">
            <div className="flex items-center gap-2">
              <span>60/450 credits</span>
              <button className="bg-[rgba(90,225,76,0.89)] text-black px-2 py-0.5 rounded font-bold">Upgrade</button>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={14} />
              <span>Powered by GPT-4o</span>
            </div>
          </div>

          <div className="bg-white rounded-[12px] p-3 flex items-center shadow-lg group focus-within:ring-2 ring-cyan-glow/50 transition-all">
            <input 
              type="text" 
              placeholder="Type question..." 
              className="flex-1 bg-transparent border-none outline-none text-black text-[16px] placeholder:text-black/60 px-2"
            />
            <button className="w-[36px] h-[36px] bg-black rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform">
              <ArrowRight size={20} className="-rotate-90" />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <button className="bg-[#f8f8f8]/20 hover:bg-[#f8f8f8]/30 px-3 py-1.5 rounded-[6px] text-white text-[12px] flex items-center gap-2 transition-colors">
                <Paperclip size={14} /> Attach
              </button>
              <button className="bg-[#f8f8f8]/20 hover:bg-[#f8f8f8]/30 px-3 py-1.5 rounded-[6px] text-white text-[12px] flex items-center gap-2 transition-colors">
                <Mic size={14} /> Voice
              </button>
              <button className="bg-[#f8f8f8]/20 hover:bg-[#f8f8f8]/30 px-3 py-1.5 rounded-[6px] text-white text-[12px] flex items-center gap-2 transition-colors">
                <Search size={14} /> Prompts
              </button>
            </div>
            <span className="text-[12px] text-white/60 font-inter">0/3,000</span>
          </div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-background py-24 px-4 sm:px-[120px]">
        {/* ... content ... */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-fustat font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Upload Lecture', desc: 'Record or upload your audio/video lectures directly to the workspace.', icon: <Mic className="text-cyan-glow" /> },
              { title: 'AI Processes', desc: 'Our advanced GPT-4o models transcribe and analyze every detail.', icon: <Zap className="text-purple-accent" /> },
              { title: 'Get Notes + Quiz', desc: 'Instantly receive structured notes, summaries, and interactive quizzes.', icon: <ShieldCheck className="text-green-500" /> },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card text-center"
              >
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-text">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section id="features" className="py-24 px-4 sm:px-[120px] bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-glow font-bold text-sm tracking-[0.2em] uppercase mb-4 block"
            >
              Cutting-Edge Intelligence
            </motion.span>
            <h2 className="text-5xl sm:text-6xl font-fustat font-bold mt-4 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent leading-tight">
              Powerful Features <br /> for Modern Educators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Speech to Text', desc: 'Real-time high-fidelity transcription with speaker diarization.', icon: <Mic />, color: 'cyan' },
              { name: 'AI Summary', desc: 'Get core concepts and actionable insights in seconds.', icon: <Sparkles />, color: 'purple' },
              { name: 'Quiz Builder', desc: 'Generate MCQs and assessments directly from your lecture.', icon: <BrainCircuit />, color: 'orange' },
              { name: 'Language Magic', desc: 'Translate your lecture notes into 50+ languages instantly.', icon: <Globe />, color: 'green' },
              { name: 'Smart Formatting', desc: 'Automatic Markdown formatting for beautiful study guides.', icon: <FileText />, color: 'blue' },
              { name: 'Instant Doubt Solve', desc: 'AI-powered chat assistant to resolve student queries 24/7.', icon: <MessageSquare />, color: 'pink' },
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-10 rounded-[32px] border border-white/5 hover:border-white/20 transition-all group relative overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-${f.color}-glow/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-white/5 text-white group-hover:bg-cyan-glow group-hover:text-black transition-all duration-500 shadow-xl`}>
                  {f.icon}
                </div>
                <h4 className="text-2xl font-fustat font-bold mb-4 text-white">{f.name}</h4>
                <p className="text-gray-text leading-relaxed text-base">
                  {f.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-cyan-glow text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-24 px-4 sm:px-[120px]">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-4 rounded-[40px] shadow-[0_0_50px_rgba(0,229,255,0.1)] overflow-hidden">
            <div className="aspect-video bg-secondary rounded-[32px] relative flex items-center justify-center group cursor-pointer">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80" className="w-full h-full object-cover opacity-40" alt="dashboard demo" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-cyan-glow rounded-full flex items-center justify-center text-black shadow-2xl group-hover:scale-110 transition-transform">
                  <Play fill="currentColor" size={32} className="ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-20 border-t border-white/5 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-[120px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-left mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="font-schibsted font-bold text-3xl tracking-tighter text-white mb-6">Ai.Teach</div>
              <p className="text-gray-text text-sm leading-relaxed">
                Empowering education through advanced AI. Your ultimate teaching and learning companion.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Platform</h4>
              <ul className="space-y-4 text-gray-text text-sm">
                <li><Link to="/app" className="hover:text-cyan-glow transition-colors">Web App</Link></li>
                <li><Link to="/app/upload" className="hover:text-cyan-glow transition-colors">Lecture Studio</Link></li>
                <li><Link to="/app/history" className="hover:text-cyan-glow transition-colors">Cloud Storage</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Features</h4>
              <ul className="space-y-4 text-gray-text text-sm">
                <li><Link to="/app/upload" className="hover:text-cyan-glow transition-colors">Speech Recognition</Link></li>
                <li><Link to="/app/notes" className="hover:text-cyan-glow transition-colors">AI Notes</Link></li>
                <li><Link to="/app/quiz" className="hover:text-cyan-glow transition-colors">Smart Quizzes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">Community</h4>
              <ul className="space-y-4 text-gray-text text-sm">
                <li><a href="#how-it-works" className="hover:text-cyan-glow transition-colors">How it Works</a></li>
                <li><a href="#demo" className="hover:text-cyan-glow transition-colors">Demo Projects</a></li>
                <li><a href="#" className="hover:text-cyan-glow transition-colors">Forum</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-text text-xs uppercase tracking-widest">
            <p>© 2026 Ai.Teach. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
