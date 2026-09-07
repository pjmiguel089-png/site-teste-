import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Quote, 
  ArrowUpRight, 
  TrendingUp, 
  CheckCircle, 
  Sparkles,
  Award,
  Building2
} from 'lucide-react';
import { CASES, TESTIMONIALS } from '../data/content';

interface CasesSectionProps {
  onOpenContact: () => void;
}

export const CasesSection: React.FC<CasesSectionProps> = ({ onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'cases' | 'depoimentos'>('cases');

  return (
    <section id="cases" className="py-24 relative overflow-hidden bg-[#07090E]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#7C3AED]/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#2563EB]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Casos Reais & Validação de Mercado</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Números que Falam mais Alto que Promessas
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Conheça as histórias de marcas que multiplicaram faturamento e reduziram custos de aquisição através da nossa metodologia proprietária.
          </p>

          {/* Toggle pill between Case Studies and Depoimentos */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-[#0F1422] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('cases')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'cases'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Cases de Aceleração
            </button>
            <button
              onClick={() => setActiveTab('depoimentos')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'depoimentos'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Depoimentos de CEOs (3)
            </button>
          </div>
        </div>

        {/* Tab 1: Case Studies Cards */}
        {activeTab === 'cases' && (
          <div className="space-y-8">
            {CASES.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="rounded-3xl bg-[#0D121F] border border-white/[0.08] hover:border-blue-500/40 p-6 sm:p-9 transition-all duration-300 shadow-2xl shadow-black/40 relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Client info & Story (7 cols) */}
                  <div className="lg:col-span-7">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {item.segment}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">
                        {item.timeline}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-3">
                      {item.client}
                    </h3>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Metrics Badge Box */}
                    <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] mb-6">
                      {item.metrics.map((m, mIdx) => (
                        <div key={mIdx}>
                          <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">
                            {m.label}
                          </p>
                          <p className="font-display font-black text-lg sm:text-xl text-white mt-0.5">
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <div className="p-4 rounded-xl bg-blue-950/20 border-l-2 border-[#2563EB] relative">
                      <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                        "{item.quote}"
                      </p>
                      <p className="text-xs font-semibold text-slate-400 mt-2">
                        — <span className="text-white">{item.author}</span>, {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase Card with High-Impact Metric (5 cols) */}
                  <div className="lg:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-white/[0.1] group">
                      <img 
                        src={item.image} 
                        alt={item.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D121F] via-[#0D121F]/40 to-transparent" />
                      
                      {/* Floating Growth Badge */}
                      <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#090D17]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">
                            Crescimento Acelerado
                          </span>
                          <span className="font-display font-black text-2xl text-emerald-400">
                            {item.growth}
                          </span>
                        </div>
                        <button
                          onClick={onOpenContact}
                          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-lg shadow-blue-600/30 transition-all"
                        >
                          <span>Quero Resultados Iguais</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Tab 2: Testimonials Grid (3 clients) */}
        {activeTab === 'depoimentos' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="rounded-2xl bg-[#0D121F] border border-white/[0.08] hover:border-violet-500/40 p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/30"
              >
                <div>
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.rating)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="ml-2 text-xs font-semibold text-slate-400">5.0 / 5.0</span>
                  </div>

                  {/* Impact Highlight Pill */}
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
                    {t.highlight}
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-sm text-slate-300 leading-relaxed italic mb-6">
                    "{t.text}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-5 border-t border-white/[0.06] flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#2563EB]/40 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {t.role} • <span className="text-slate-300 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
