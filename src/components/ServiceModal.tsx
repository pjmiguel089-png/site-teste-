import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForConsultation: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForConsultation,
}) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0C111D] border border-white/[0.1] shadow-2xl p-6 sm:p-8 text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Fechar modal"
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {service.category}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
                {service.badge}
              </span>
            </div>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
              {service.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base mt-2">
              {service.tagline}
            </p>
          </div>

          {/* Core Description */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Metrics highlight */}
          <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-blue-950/40 to-violet-950/40 border border-blue-500/20 flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                Impacto Médio Esperado
              </p>
              <p className="text-sm sm:text-base font-display font-bold text-white">
                {service.metrics}
              </p>
            </div>
          </div>

          {/* Deliverables List */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Escopo de Entregas & Implementação Técnica
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA / Timeline note */}
          <div className="flex items-center gap-4 text-xs text-slate-400 mb-8 pt-4 border-t border-white/[0.06]">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-400" />
              <span>Sprint de ativação: 7 a 14 dias úteis</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span>Garantia de conformidade técnica</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => {
                onSelectForConsultation(service.title);
                onClose();
              }}
              className="w-full sm:flex-1 py-3.5 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] shadow-lg shadow-[#2563EB]/25 flex items-center justify-center gap-2 transition-all"
            >
              <span>Contratar ou Agendar Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="w-full sm:w-auto py-3.5 px-5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.08] transition-colors"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
