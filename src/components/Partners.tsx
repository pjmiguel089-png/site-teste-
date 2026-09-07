import React from 'react';
import { TRUST_PARTNERS } from '../data/content';
import { CheckCircle2, Shield } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/[0.06] bg-[#090D17]/60 backdrop-blur-sm relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3 shrink-0 text-center md:text-left">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Certificações Oficiais
              </p>
              <p className="text-sm font-display font-bold text-white">
                Parceiros Oficiais & Ecossistema de Mídia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 w-full md:w-auto flex-1 max-w-4xl">
            {TRUST_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="px-3.5 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all flex flex-col justify-center items-center text-center group"
              >
                <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-300 transition-colors line-clamp-1">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 flex items-center gap-1 mt-0.5 font-medium">
                  <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400" />
                  {partner.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
