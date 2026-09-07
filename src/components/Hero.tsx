import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Users, 
  Activity, 
  Award, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden flex items-center justify-center"
    >
      {/* Ambient background light gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#2563EB]/20 via-[#7C3AED]/15 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#2563EB]/10 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#7C3AED]/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Grid texture overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121829] border border-[#2563EB]/30 shadow-inner mb-6 backdrop-blur-md"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-blue-300 uppercase">
                {AGENCY_INFO.badge}
              </span>
              <span className="text-white/20">|</span>
              <span className="text-[11px] font-medium text-slate-400">
                Performance Máxima
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: "easeOut" }}
              className="font-display font-extrabold text-4xl sm:text-6xl lg:text-[72px] leading-[1.05] tracking-tight text-white mb-6"
            >
              Marketing Digital <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
                que Converte
              </span>
            </motion.h1>

            {/* Authoritative Subheadline / Slogan */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-9"
            >
              Aceleramos marcas que recusam o segundo lugar. Engenharia de conversão, dados e tráfego de alta precisão sob liderança de <span className="text-white font-semibold">{AGENCY_INFO.name}</span> para empresas que exigem dominância de mercado.
            </motion.p>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12"
            >
              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] shadow-xl shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 group"
              >
                <span>{AGENCY_INFO.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#cases"
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-sm font-semibold text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Ver Casos de Sucesso</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </motion.div>

            {/* Trust micro-badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t border-white/[0.08] max-w-xl mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-400 font-medium leading-tight">
                  Contratos sem amarras cegas
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-400 font-medium leading-tight">
                  Setup & Otimização em 7 dias
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="text-xs text-slate-400 font-medium leading-tight">
                  Metodologia proprietária
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Live Performance Terminal / Dynamic Visual Hub (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-blue-900/20">
              <div className="rounded-[15px] bg-[#0B0F19] p-6 border border-white/[0.08] backdrop-blur-xl">
                
                {/* Header of Terminal */}
                <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">
                      growth-engine.live
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    <Activity className="w-3 h-3 animate-pulse" />
                    <span>Transmissão em Tempo Real</span>
                  </div>
                </div>

                {/* Primary Metric Hero Card */}
                <div className="mt-5 p-5 rounded-xl bg-gradient-to-br from-[#12192A] to-[#0D121F] border border-blue-500/20 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                      ROAS Médio da Carteira
                    </span>
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                      Auditado
                    </span>
                  </div>

                  <div className="flex items-baseline gap-3">
                    <span className="font-display font-black text-4xl text-white tracking-tight">
                      5.24x
                    </span>
                    <span className="flex items-center text-xs font-semibold text-emerald-400">
                      <TrendingUp className="w-3.5 h-3.5 mr-1" />
                      +48.6% vs trimestre anterior
                    </span>
                  </div>

                  {/* Simulated Sparkline Bar Graph */}
                  <div className="mt-4 flex items-end gap-1.5 h-16 pt-3">
                    {[35, 42, 50, 48, 65, 58, 72, 80, 75, 88, 92, 100].map((val, idx) => (
                      <div key={idx} className="flex-1 bg-white/[0.06] rounded-t-sm h-full flex items-end">
                        <div 
                          className="w-full rounded-t-sm transition-all duration-700 bg-gradient-to-t from-[#2563EB] to-[#7C3AED]"
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Secondary Metrics Grid */}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1.5">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      <span>Volume de Leads</span>
                    </div>
                    <div className="font-display font-bold text-xl text-white">
                      12.480.000+
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Alta intenção de compra
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-center gap-2 text-slate-400 text-xs mb-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400" />
                      <span>Redução de CAC</span>
                    </div>
                    <div className="font-display font-bold text-xl text-white">
                      -44.2%
                    </div>
                    <span className="text-[11px] text-emerald-400 font-medium">
                      Economia por aquisição
                    </span>
                  </div>
                </div>

                {/* Live Campaign Status Ticker */}
                <div className="mt-4 p-3.5 rounded-xl bg-[#080C14] border border-white/[0.04] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <div className="text-xs text-slate-300">
                      Campanhas ativas sob gestão: <span className="text-white font-semibold">142</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Atualizado agora
                  </span>
                </div>

              </div>
            </div>

            {/* Decorative background glow under terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 blur-2xl -z-10 rounded-3xl opacity-70" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
