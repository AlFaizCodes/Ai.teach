import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Upload, Mic, X, CheckCircle, 
  Loader2, Play, Pause, Trash2, FileText 
} from 'lucide-react';

const LectureUpload = () => {
  const [isUploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);

  const simulateUpload = (selectedFile: File) => {
    setFile(selectedFile);
    setUploading(true);
    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setProgress(p);
      if (p >= 100) {
        clearInterval(interval);
        setUploading(false);
      }
    }, 100);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[calc(100vh-250px)]">
      {/* Left: Upload Workspace */}
      <div className="flex flex-col gap-6">
        <div className="glass-card flex-1 flex flex-col items-center justify-center border-dashed border-2 border-white/10 hover:border-cyan-glow/50 transition-all group">
          {!file ? (
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-cyan-glow/10 rounded-3xl flex items-center justify-center mx-auto text-cyan-glow group-hover:scale-110 transition-transform">
                <Upload size={48} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Upload Lecture</h3>
                <p className="text-gray-text">Drag and drop your audio or video file here</p>
              </div>
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                onChange={(e) => e.target.files && simulateUpload(e.target.files[0])}
              />
              <label 
                htmlFor="file-upload"
                className="neon-button inline-block cursor-pointer"
              >
                Browse Files
              </label>
              <p className="text-xs text-gray-text/60">MP3, WAV, MP4 (Max 500MB)</p>
            </div>
          ) : (
            <div className="w-full max-w-md space-y-6 text-center">
              <div className="w-20 h-20 bg-green-500/10 rounded-3xl flex items-center justify-center mx-auto text-green-500">
                {isUploading ? <Loader2 size={40} className="animate-spin" /> : <CheckCircle size={40} />}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 truncate px-4">{file.name}</h3>
                <p className="text-sm text-gray-text">{(file.size / (1024 * 1024)).toFixed(2)} MB • {isUploading ? 'Uploading...' : 'Ready to Process'}</p>
              </div>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="bg-cyan-glow h-full shadow-[0_0_10px_#00e5ff]"
                />
              </div>
              <div className="flex gap-4 justify-center">
                {!isUploading && (
                  <button className="neon-button flex-1">Analyze Now</button>
                )}
                <button 
                  onClick={() => {setFile(null); setProgress(0);}}
                  className="p-2 glass rounded-xl text-red-400 hover:bg-red-400/10 transition-colors"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="glass-card bg-secondary/50 p-8 text-center space-y-4">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto text-red-500 animate-pulse">
            <Mic size={32} />
          </div>
          <h3 className="text-xl font-bold">Record Live Lecture</h3>
          <p className="text-gray-text text-sm">Capture audio in real-time with automatic transcription.</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:scale-105 transition-all">
            Start Recording
          </button>
        </div>
      </div>

      {/* Right: Real-time Transcript */}
      <div className="glass-card flex flex-col h-full bg-secondary/30 relative">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-glow animate-pulse" />
            Live Transcript
          </h3>
          <div className="flex gap-2">
            <button className="px-3 py-1 glass rounded-lg text-xs font-bold text-cyan-glow">AUTO-SAVE ON</button>
            <button className="p-1 text-gray-text hover:text-white transition-colors"><X size={20} /></button>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto pr-4 space-y-6 text-gray-text text-sm font-medium leading-relaxed">
          {file ? (
            <div className="space-y-4">
              <p className="bg-white/5 p-4 rounded-xl text-white">
                <span className="text-cyan-glow mr-2">[00:00:05]</span>
                Artificial Intelligence is essentially the simulation of human intelligence processes by machines, especially computer systems.
              </p>
              <p className="p-4">
                <span className="text-cyan-glow mr-2">[00:00:15]</span>
                These processes include learning, which is the acquisition of information and rules for using the information.
              </p>
              <p className="p-4">
                <span className="text-cyan-glow mr-2">[00:00:45]</span>
                Then we have reasoning, using rules to reach approximate or definite conclusions.
              </p>
              <p className="p-4">
                <span className="text-cyan-glow mr-2">[00:01:20]</span>
                And finally, self-correction, which is a critical aspect of modern machine learning algorithms.
              </p>
              <div className="flex justify-center py-10">
                <Loader2 className="animate-spin text-cyan-glow" size={32} />
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center opacity-30">
              <FileText size={80} className="mb-4" />
              <p>Transcript will appear here during processing</p>
            </div>
          )}
        </div>

        {/* Waveform Animation Simulation */}
        <div className="absolute bottom-0 left-0 w-full h-24 flex items-end gap-1 px-8 pb-4 pointer-events-none opacity-20">
          {[...Array(40)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ height: [10, Math.random() * 60 + 10, 10] }}
              transition={{ repeat: Infinity, duration: 1 + Math.random() }}
              className="flex-1 bg-cyan-glow rounded-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LectureUpload;
