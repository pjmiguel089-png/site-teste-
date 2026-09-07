import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  TrendingUp, 
  Crown, 
  Share2, 
  Mail, 
  BarChart3, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'Search':
      return <Search className="w-5 h-5 text-blue-400" />;
    case 'TrendingUp':
      return <TrendingUp className="w-5 h-5 text-emerald-400" />;
    case 'Crown':
      return <Crown className="w-5 h-5 text-amber-400" />;
    case 'Share2':
      return <Share2 className="w-5 h-5 text-violet-400" />;
    case 'Mail':
      return <Mail className="w-5 h-5 text-indigo-400" />;
    case 'BarChart3':
      return <BarChart3 className="w-5 h-5 text-cyan-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-blue-400" />;
  }
};

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#2563EB]/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C3AED]/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecossistema de Alta Conversão</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Serviços Estruturados para Dominar Mercados
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Abandonamos fórmulas genéricas. Cada frente de atuação é projetada como uma engrenagem matemática orientada à aquisição de clientes de alto valor e maximização de ROI.
          </motion.p>
        </div>

        {/* 6 Services Grid (12-column based layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative rounded-2xl bg-[#0C101C]/80 border border-white/[0.07] hover:border-[#2563EB]/40 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/30 hover:shadow-[#2563EB]/10"
            >
              <div>
                {/* Card Top: Category & Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-105 group-hover:border-blue-500/40 transition-all">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/[0.04] text-slate-300 border border-white/[0.06]">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-display font-bold text-xl text-white group-hover:text-blue-300 transition-colors mb-2.5">
                  {service.title}
                </h3>

                {/* Service Tagline & Short Description */}
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-400/90 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Micro Deliverables Checkmarks */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06] mb-6">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-snug line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Metrics & Interactive Action */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="text-[11px] font-semibold text-emerald-400">
                  {service.metrics.split(' ')[0]} {service.metrics.split(' ')[1]}
                </div>

                <button
                  onClick={() => setActiveModalService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  <span>Ver Escopo</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              {/* Top hairline accent bar on hover */}
              <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/60 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Detail Scope Modal */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
        onSelectForConsultation={(title) => {
          onSelectService(title);
        }}
      />
    </section>
  );
};
