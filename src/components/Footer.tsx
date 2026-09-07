import React from 'react';
import { AGENCY_INFO } from '../data/content';
import { ArrowUp, Phone, MapPin, Mail, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070B] border-t border-white/[0.06] pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/[0.06]">
          
          {/* Brand & Manifesto (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#2563EB] to-[#7C3AED] p-[1px]">
                <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center font-display font-black text-white text-sm">
                  LM
                </div>
              </div>
              <span className="font-display font-bold text-lg text-white">
                {AGENCY_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Engenharia de tráfego, dados e conversão para negócios que exigem dominância e retorno real sobre investimento em mídia.
            </p>

            <div className="flex items-center gap-3 pt-2 text-slate-300">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-blue-500 flex items-center justify-center hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-violet-500 flex items-center justify-center hover:text-white transition-colors"
                aria-label="Instagram"
              >
                ig
              </a>
              <a 
                href={`https://wa.me/${AGENCY_INFO.rawPhone}`} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-emerald-500 flex items-center justify-center hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                wa
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-red-500 flex items-center justify-center hover:text-white transition-colors"
                aria-label="YouTube"
              >
                yt
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#cases" className="hover:text-white transition-colors">Cases & Clientes</a></li>
              <li><a href="#calculadora" className="hover:text-white transition-colors">Simulador ROI</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Services Scope (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="hover:text-white transition-colors">SEO & Posicionamento Orgânico</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Tráfego Pago (Meta, Google, TikTok)</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Branding de Alto Padrão</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Automação de Email & CRM</a></li>
              <li><a href="#servicos" className="hover:text-white transition-colors">Business Intelligence & Atribuição</a></li>
            </ul>
          </div>

          {/* Headquarters Location (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Escritório
            </h4>
            <p className="text-slate-300">
              {AGENCY_INFO.address}
            </p>
            <p className="text-slate-300">
              {AGENCY_INFO.phone}
            </p>
            <div className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Atendimento Nacional</span>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} {AGENCY_INFO.name}. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors text-[11px]"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
