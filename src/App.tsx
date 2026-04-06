import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Tv, Calendar, ExternalLink, Info, Search, Zap, Monitor, LayoutGrid, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { CHANNELS, MOCK_PROGRAMS } from './constants';
import { Channel, Program } from './types';

type TabType = 'channels' | 'now' | 'schedule';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('channels');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const filteredChannels = CHANNELS.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  };

  const getNext7Days = useMemo(() => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push({
        label: i === 0 ? "Aujourd'hui" : d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' }),
        value: d.toISOString().split('T')[0]
      });
    }
    return days;
  }, []);

  const getCurrentProgram = (channelId: number) => {
    const nowStr = formatTime(currentTime);
    const todayStr = currentTime.toISOString().split('T')[0];
    return MOCK_PROGRAMS.find(p => 
      p.channelId === channelId && 
      p.date === todayStr &&
      p.startTime <= nowStr && 
      p.endTime >= nowStr
    );
  };

  return (
    <div className="min-h-screen cyber-grid bg-cyber-bg text-gray-100 selection:bg-cyber-pink selection:text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-cyber-bg/80 backdrop-blur-md border-b border-cyber-blue/30 p-4 shadow-[0_0_30px_rgba(0,255,255,0.1)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyber-pink/20 border border-cyber-pink rounded-sm animate-pulse">
              <Zap className="text-cyber-pink w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-mono font-bold text-cyber-blue glitch-text" data-text="CYBER TNT">
                CYBER TNT
              </h1>
              <p className="text-[10px] font-mono text-cyber-pink uppercase tracking-widest">France // Protocol v2.0</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-blue/50" />
              <input 
                type="text" 
                placeholder="RECHERCHE CANAL..."
                className="bg-cyber-card border border-cyber-blue/30 pl-10 pr-4 py-2 font-mono text-xs focus:outline-none focus:border-cyber-pink transition-colors w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden md:block font-mono text-cyber-yellow text-sm border-l border-cyber-blue/30 pl-4">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="max-w-7xl mx-auto mt-8 px-4">
        <div className="flex flex-wrap gap-2 border-b border-cyber-blue/20">
          <button 
            onClick={() => setActiveTab('channels')}
            className={`flex items-center gap-2 px-6 py-3 font-mono uppercase text-sm transition-all relative ${
              activeTab === 'channels' ? 'text-cyber-blue' : 'text-gray-500 hover:text-cyber-blue/70'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            Directs
            {activeTab === 'channels' && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-blue shadow-[0_0_10px_rgba(0,255,255,0.8)]" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('now')}
            className={`flex items-center gap-2 px-6 py-3 font-mono uppercase text-sm transition-all relative ${
              activeTab === 'now' ? 'text-cyber-yellow' : 'text-gray-500 hover:text-cyber-yellow/70'
            }`}
          >
            <Clock className="w-4 h-4" />
            En ce moment
            {activeTab === 'now' && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-yellow shadow-[0_0_10px_rgba(255,255,0,0.8)]" />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`flex items-center gap-2 px-6 py-3 font-mono uppercase text-sm transition-all relative ${
              activeTab === 'schedule' ? 'text-cyber-pink' : 'text-gray-500 hover:text-cyber-pink/70'
            }`}
          >
            <Calendar className="w-4 h-4" />
            Grille TV
            {activeTab === 'schedule' && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-pink shadow-[0_0_10px_rgba(255,0,255,0.8)]" />
            )}
          </button>
        </div>

        {/* Day Selector for Schedule */}
        <AnimatePresence>
          {activeTab === 'schedule' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex gap-2 mt-4 overflow-x-auto pb-2 no-scrollbar"
            >
              {getNext7Days.map((day) => (
                <button
                  key={day.value}
                  onClick={() => setSelectedDate(day.value)}
                  className={`flex-shrink-0 px-4 py-2 font-mono text-[10px] uppercase border transition-all ${
                    selectedDate === day.value 
                      ? 'border-cyber-pink bg-cyber-pink/10 text-cyber-pink shadow-[0_0_10px_rgba(255,0,255,0.3)]' 
                      : 'border-cyber-blue/20 text-gray-500 hover:border-cyber-blue/50'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-4 mt-4 pb-24">
        <AnimatePresence mode="wait">
          {activeTab === 'channels' && (
            <motion.div 
              key="channels"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {filteredChannels.map((channel) => (
                <motion.div
                  key={channel.id}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative cyber-border bg-cyber-card p-6 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden min-h-[180px]"
                  onClick={() => window.open(channel.url, '_blank')}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyber-blue/5 to-cyber-pink/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute top-2 right-2 p-1 bg-cyber-blue/10 text-[8px] font-mono text-cyber-blue opacity-30 group-hover:opacity-100 transition-opacity">
                    CH_{channel.id.toString().padStart(2, '0')}
                  </div>

                  <div className="relative w-24 h-24 flex items-center justify-center p-3 bg-white/5 rounded-sm group-hover:bg-white/10 transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]">
                    <img 
                      src={channel.logo} 
                      alt={channel.name} 
                      className="max-w-full max-h-full object-contain filter brightness-110 contrast-125 group-hover:scale-110 transition-transform duration-300 group-hover:animate-[glitch-sm_0.2s_infinite]"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement?.classList.add('fallback-logo');
                      }}
                    />
                    <div className="hidden absolute inset-0 items-center justify-center text-cyber-blue font-mono font-bold text-xl text-center p-2 opacity-50 group-hover:opacity-100">
                      {channel.name}
                    </div>
                    {/* Scanline effect over logo */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-50" />
                  </div>

                  <div className="relative z-10 text-center">
                    <h3 className="text-sm font-mono font-bold text-cyber-blue group-hover:text-cyber-pink transition-colors tracking-tight">
                      {channel.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-gray-500 uppercase font-mono group-hover:text-cyber-blue/80 transition-colors">
                      <Zap className="w-3 h-3 animate-pulse" />
                      Protocol: Live
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-cyber-blue/20 clip-path-poly-corner" />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === 'now' && (
            <motion.div 
              key="now"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {CHANNELS.map(channel => {
                const program = getCurrentProgram(channel.id);
                return (
                  <div key={channel.id} className="cyber-border bg-cyber-card/50 p-4 flex items-center gap-6 hover:bg-cyber-card transition-colors cursor-pointer" onClick={() => window.open(channel.url, '_blank')}>
                    <div className="w-24 flex-shrink-0 flex flex-col items-center border-r border-cyber-blue/20 pr-4">
                      <img src={channel.logo} alt={channel.name} className="h-8 object-contain mb-1" referrerPolicy="no-referrer" />
                      <span className="text-[8px] font-mono text-cyber-blue uppercase">{channel.name}</span>
                    </div>
                    <div className="flex-1">
                      {program ? (
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <h4 className="text-sm font-bold text-white uppercase tracking-tight">{program.title}</h4>
                            <p className="text-[10px] text-cyber-yellow font-mono">{program.startTime} - {program.endTime} // {program.category}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-1 bg-gray-800 rounded-full overflow-hidden">
                              <div className="h-full bg-cyber-yellow animate-pulse" style={{ width: '45%' }} />
                            </div>
                            <span className="text-[8px] font-mono text-gray-500">45%</span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs font-mono text-gray-600 italic">Aucun programme détecté sur le réseau...</span>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-cyber-blue/40 group-hover:text-cyber-blue" />
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === 'schedule' && (
            <motion.div 
              key="schedule"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {CHANNELS.map(channel => {
                const programs = MOCK_PROGRAMS.filter(p => p.channelId === channel.id && p.date === selectedDate);
                return (
                  <div key={channel.id} className="cyber-border bg-cyber-card/50 p-4 flex flex-col md:flex-row gap-6">
                    <div className="md:w-48 flex flex-col items-center justify-center border-r border-cyber-blue/20 pr-6">
                      <img src={channel.logo} alt={channel.name} className="h-12 object-contain mb-2" referrerPolicy="no-referrer" />
                      <span className="text-xs font-mono text-cyber-blue uppercase">{channel.name}</span>
                    </div>
                    
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {programs.length > 0 ? programs.map(program => (
                        <div key={program.id} className="relative p-3 bg-black/40 border border-cyber-pink/20 hover:border-cyber-pink/50 transition-colors group">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-mono text-cyber-yellow bg-cyber-yellow/10 px-2 py-0.5">
                              {program.startTime} - {program.endTime}
                            </span>
                            <span className="text-[10px] font-mono text-cyber-pink uppercase">{program.category}</span>
                          </div>
                          <h4 className="text-sm font-bold text-white mb-1 group-hover:text-cyber-blue transition-colors">
                            {program.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 line-clamp-2 font-sans leading-relaxed">
                            {program.description}
                          </p>
                          <div className="absolute top-0 right-0 w-8 h-8 bg-cyber-pink/5 clip-path-poly-corner pointer-events-none" />
                        </div>
                      )) : (
                        <div className="col-span-full text-center py-4 text-gray-600 font-mono text-xs italic">
                          Données non disponibles pour cette date.
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Status Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-cyber-bg border-t border-cyber-blue/30 p-2 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-mono text-cyber-blue/60 uppercase">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              System Online
            </span>
            <span>Uplink: Stable</span>
            <span className="hidden sm:inline">Region: FR-TNT-NET</span>
          </div>
          <div className="flex items-center gap-4">
            <span>{CHANNELS.length} Channels Loaded</span>
            <span className="text-cyber-pink">© 2026 CyberTNT Protocol</span>
          </div>
        </div>
      </footer>

      {/* Background FX */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-blue/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyber-pink/5 blur-[120px] rounded-full" />
      </div>
    </div>
  );
}
