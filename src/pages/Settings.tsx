import React from 'react';
import { 
  User, Shield, Bell, Moon, 
  Sun, Languages, Database, Volume2,
  ChevronRight, ExternalLink
} from 'lucide-react';

const SettingsPage = () => {
  const sections = [
    {
      title: 'Profile & Account',
      items: [
        { name: 'Personal Information', desc: 'Update your name, email, and avatar', icon: <User /> },
        { name: 'Security & Password', desc: 'Manage your password and 2FA', icon: <Shield /> },
        { name: 'Notifications', desc: 'Control your alert preferences', icon: <Bell /> },
      ]
    },
    {
      title: 'AI Preferences',
      items: [
        { name: 'Language & Region', desc: 'Set your primary AI interaction language', icon: <Languages />, value: 'English (US)' },
        { name: 'Voice Selection', desc: 'Choose the AI voice for readout', icon: <Volume2 />, value: 'Nova (Neutral)' },
        { name: 'Appearance', desc: 'Toggle between dark and light mode', icon: <Moon />, value: 'Dark Mode' },
      ]
    },
    {
      title: 'Azure Integration',
      items: [
        { name: 'API Configuration', desc: 'Manage your Azure Cognitive Services keys', icon: <Database />, value: 'Connected' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl space-y-12">
      {sections.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <h3 className="text-xl font-bold font-fustat px-2">{section.title}</h3>
          <div className="space-y-3">
            {section.items.map((item, i) => (
              <div key={i} className="glass-card flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-all">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cyan-glow group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-text">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {item.value && <span className="text-sm font-bold text-cyan-glow bg-cyan-glow/10 px-3 py-1 rounded-lg">{item.value}</span>}
                  <ChevronRight size={20} className="text-gray-text group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="glass-card bg-red-500/5 border-red-500/20 p-8 flex items-center justify-between">
        <div>
          <h4 className="font-bold text-red-400">Danger Zone</h4>
          <p className="text-sm text-gray-text">Permanently delete your account and all lecture data.</p>
        </div>
        <button className="px-6 py-2 border border-red-500/30 rounded-full text-red-500 font-bold hover:bg-red-500 hover:text-white transition-all">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
