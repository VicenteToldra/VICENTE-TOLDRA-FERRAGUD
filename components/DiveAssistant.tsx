
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';

const DiveAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: 'Soy el **Dr. Alejandro Submarino**, asesor técnico de Cabo La Nao. 🤿 ¿En qué puedo asistirte hoy respecto a tu fisiología de buceo o tu próxima aventura en Jávea? \n\n*Nota: Para emergencias o contacto directo con un instructor real, pulsa el botón superior.*' 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await geminiService.getChatResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const renderText = (text: string) => {
    // Simple markdown-ish rendering for bold and line breaks
    return text.split('\n').map((line, i) => {
      const parts = line.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={i} className="block mb-1">
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold text-sky-900">{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {isOpen ? (
        <div className="bg-white w-80 md:w-[450px] h-[600px] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)] flex flex-col border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-500">
          {/* Header */}
          <div className="bg-sky-950 p-5 text-white shadow-xl flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-sky-600 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden">
                  <span className="text-xl font-black">AS</span>
                </div>
                <div>
                  <h3 className="font-extrabold text-sm tracking-widest uppercase">Dr. Alejandro Submarino</h3>
                  <p className="text-[10px] text-sky-300 font-bold uppercase">Cabo La Nao Expert Advisor</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex gap-2">
              <a 
                href="https://wa.me/34965794510" 
                className="flex-1 bg-green-600 hover:bg-green-700 text-[10px] font-black py-2 px-3 rounded-lg text-center transition-all flex items-center justify-center gap-1 uppercase"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.964 9.964 0 001.333 4.993L2 22l5.233-1.237a9.994 9.994 0 004.773 1.217h.004c5.505 0 9.988-4.478 9.989-9.984 0-2.669-1.037-5.176-2.922-7.062A9.935 9.935 0 0012.012 2z"/></svg>
                Hablar con Instructor
              </a>
              <button className="flex-1 bg-sky-700 hover:bg-sky-600 text-[10px] font-black py-2 px-3 rounded-lg uppercase transition-all">
                Tarifas 2025
              </button>
            </div>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-4 rounded-2xl text-sm shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-sky-600 text-white rounded-tr-none' 
                  : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none prose prose-sm'
                }`}>
                  {renderText(m.text)}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-none shadow-sm italic text-xs text-slate-400">
                  Consultando base de datos DAN...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-slate-200 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta al Dr. Submarino..."
              className="flex-1 bg-slate-100 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 border-none transition-all"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-sky-900 text-white p-3 rounded-2xl disabled:opacity-50 hover:bg-sky-800 transition-all shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-sky-950 text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center gap-4 group ring-4 ring-sky-900/10"
        >
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-400 leading-none">AI Advisor</span>
            <span className="font-black text-sm uppercase">Preguntar al Dr. Submarino</span>
          </div>
          <div className="bg-sky-600 p-2 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a2 2 0 00-1.96 1.414l-.727 2.903a2 2 0 01-1.566 1.485 11.723 11.723 0 01-9.223-9.223 2 2 0 011.485-1.566l2.903-.727a2 2 0 001.414-1.96l-.477-2.387a2 2 0 00-.547-1.022L7.05 4.05a2 2 0 00-2.828 0L2.733 5.539a11.042 11.042 0 009.728 9.728l1.489-1.489a2 2 0 000-2.828l-1.522-1.522z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  );
};

export default DiveAssistant;
