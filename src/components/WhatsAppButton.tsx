import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    const text = encodeURIComponent(
      "Olá Luiz Miguel! Gostaria de agendar uma consultoria estratégica para acelerar o faturamento do meu negócio."
    );
    window.open(`https://wa.me/${AGENCY_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip speech bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0F1423] border border-white/[0.1] shadow-2xl text-xs text-white"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Falar com <strong>{AGENCY_INFO.shortName}</strong> agora</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button with discrete pulse */}
      <div className="relative group">
        {/* Discrete pulse ring */}
        <div className="absolute -inset-1 rounded-full bg-emerald-500/30 blur-sm group-hover:bg-emerald-500/50 animate-pulse" />

        <button
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Contato direto pelo WhatsApp"
          className="relative w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/40 flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-7 h-7 fill-slate-950 stroke-none" />
          
          {/* Notification online pip */}
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#07090E] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping" />
          </span>
        </button>
      </div>
    </div>
  );
};
