import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Send, Mic, Paperclip, Sparkles, 
  User, Bot, Copy, ThumbsUp, 
  RotateCcw, Maximize2, MoreHorizontal
} from 'lucide-react';

const AIChat = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: "Hello! I've analyzed the 'Intro to AI' lecture. How can I help you understand the concepts better today?" },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { id: Date.now(), type: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate Bot Response
    setTimeout(() => {
      const botMsg = { 
        id: Date.now() + 1, 
        type: 'bot', 
        text: "That's a great question about " + input + ". Based on the lecture notes, this concept is directly related to the 'Reasoning' pillar of AI. Would you like me to explain the self-correction aspect as well?" 
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="max-w-5xl mx-auto h-[calc(100vh-200px)] flex flex-col glass rounded-[32px] overflow-hidden border-white/5">
      {/* Chat Header */}
      <div className="p-6 border-b border-white/5 bg-white/5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-cyan-glow rounded-xl flex items-center justify-center text-black shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            <Bot size={24} />
          </div>
          <div>
            <h4 className="font-bold">AI Tutor Assistant</h4>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs text-gray-text font-medium">Online | Analysis: Intro to AI</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 text-gray-text">
          <button className="hover:text-white transition-colors"><Maximize2 size={18} /></button>
          <button className="hover:text-white transition-colors"><MoreHorizontal size={18} /></button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-4 ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-10 h-10 rounded-xl shrink-0 flex items-center justify-center ${
                msg.type === 'bot' ? 'bg-cyan-glow text-black' : 'bg-purple-accent text-white'
              }`}>
                {msg.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
              </div>
              
              <div className={`group relative max-w-[80%] p-5 rounded-2xl ${
                msg.type === 'bot' 
                ? 'bg-white/5 rounded-tl-none border border-white/5' 
                : 'bg-cyan-glow text-black rounded-tr-none font-medium'
              }`}>
                <p className="text-sm leading-relaxed">{msg.text}</p>
                
                {msg.type === 'bot' && (
                  <div className="absolute top-full mt-2 left-0 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-[10px] uppercase font-bold text-gray-text hover:text-cyan-glow flex items-center gap-1">
                      <Copy size={10} /> Copy
                    </button>
                    <button className="text-[10px] uppercase font-bold text-gray-text hover:text-cyan-glow flex items-center gap-1">
                      <RotateCcw size={10} /> Regenerate
                    </button>
                    <button className="text-[10px] uppercase font-bold text-gray-text hover:text-cyan-glow flex items-center gap-1">
                      <ThumbsUp size={10} /> Helpful
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-8 pt-0">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3 focus-within:ring-2 ring-cyan-glow/30 transition-all">
          <textarea 
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
            placeholder="Ask anything about the lecture..."
            className="w-full bg-transparent border-none outline-none text-white placeholder:text-gray-text resize-none py-1"
          />
          <div className="flex justify-between items-center pt-2 border-t border-white/5">
            <div className="flex gap-2">
              <button className="p-2 text-gray-text hover:text-cyan-glow hover:bg-white/5 rounded-lg transition-all"><Paperclip size={18} /></button>
              <button className="p-2 text-gray-text hover:text-cyan-glow hover:bg-white/5 rounded-lg transition-all"><Mic size={18} /></button>
              <button className="p-2 text-gray-text hover:text-cyan-glow hover:bg-white/5 rounded-lg transition-all"><Sparkles size={18} /></button>
            </div>
            <button 
              onClick={handleSend}
              className={`p-2 rounded-xl transition-all ${
                input.trim() ? 'bg-cyan-glow text-black shadow-[0_0_15px_rgba(0,229,255,0.4)]' : 'bg-white/10 text-white/20'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
        <p className="text-[10px] text-center text-gray-text/40 mt-4 uppercase tracking-[0.2em]">
          AI Assistant can make mistakes. Verify important information.
        </p>
      </div>
    </div>
  );
};

export default AIChat;
