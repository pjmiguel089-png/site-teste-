import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';
import { LeadForm } from '../types';

interface ContactSectionProps {
  preFilledService?: string;
  preFilledRevenue?: string;
  preFilledInvestment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preFilledService = "",
  preFilledRevenue = "",
  preFilledInvestment = "",
}) => {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    phone: '',
    email: '',
    monthlyRevenue: preFilledRevenue || '50k-200k',
    service: preFilledService || 'Tráfego Pago & Performance Escalar',
    notes: preFilledInvestment ? `Meta de investimento: ${preFilledInvestment}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update when prefilled values change
  React.useEffect(() => {
    if (preFilledService) {
      setFormData(prev => ({ ...prev, service: preFilledService }));
    }
  }, [preFilledService]);

  React.useEffect(() => {
    if (preFilledRevenue) {
      setFormData(prev => ({ ...prev, monthlyRevenue: preFilledRevenue }));
    }
  }, [preFilledRevenue]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Luiz Miguel! Gostaria de agendar uma consultoria estratégica.\n\n*Nome:* ${formData.name || 'Interessado'}\n*Email:* ${formData.email || 'Não informado'}\n*Faturamento:* ${formData.monthlyRevenue}\n*Serviço:* ${formData.service}\n*Notas:* ${formData.notes || 'Sem observações'}`
    );
    window.open(`https://wa.me/${AGENCY_INFO.rawPhone}?text=${text}`, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-[#07090E]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#2563EB]/15 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#7C3AED]/15 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Consultoria Estratégica Gratuita</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Pronto para escalar seu negócio?
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Agende uma sessão diagnóstica de 30 minutos diretamente com nosso time sênior. Avaliaremos suas campanhas atuais, funil de conversão e desenharemos o plano para multiplicar seu faturamento.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact credentials & Agency info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-[#0D121F] border border-white/[0.08] shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-2">
                {AGENCY_INFO.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-6">
                Agência de Marketing Digital & Performance
              </p>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-blue-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Endereço Presencial
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {AGENCY_INFO.address}
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Telefone & WhatsApp Direto
                    </span>
                    <a 
                      href={`tel:${AGENCY_INFO.rawPhone}`}
                      className="text-sm font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                    >
                      {AGENCY_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 text-violet-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">
                      Canal Corporativo
                    </span>
                    <span className="text-sm font-medium text-slate-200">
                      {AGENCY_INFO.email}
                    </span>
                  </div>
                </div>
              </div>

              {/* Response SLA */}
              <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-slate-300">
                  Tempo médio de retorno: <strong className="text-white">menos de 15 minutos</strong> em dias úteis.
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-emerald-900/20 border border-emerald-500/30 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    Prefere falar agora?
                  </h4>
                  <p className="text-xs text-slate-300">
                    Inicie uma conversa direta com nosso estrategista.
                  </p>
                </div>
              </div>

              <button
                onClick={handleOpenWhatsApp}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold shrink-0 transition-all flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
              >
                <span>Chamar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

          {/* Right Column: Interactive Consultation Booking Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0D121F] border border-white/[0.08] shadow-2xl relative">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                    <h3 className="font-display font-bold text-xl text-white">
                      Formulário de Qualificação Estratégica
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      Confidencial
                    </span>
                  </div>

                  {/* Nome Completo */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Roberto Albuquerque"
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp e Email corporativo em grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        WhatsApp / Celular com DDD *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(81) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="voce@suaempresa.com.br"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] text-sm text-white placeholder:text-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Faturamento Mensal & Serviço */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Faturamento Mensal Atual
                      </label>
                      <select
                        value={formData.monthlyRevenue}
                        onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.1] focus:border-[#2563EB] text-sm text-white outline-none"
                      >
                        <option value="Abaixo de R$ 30.000">Abaixo de R$ 30.000 / mês</option>
                        <option value="R$ 30.000 a R$ 100.000">R$ 30.000 a R$ 100.000 / mês</option>
                        <option value="R$ 100.000 a R$ 500.000">R$ 100.000 a R$ 500.000 / mês</option>
                        <option value="Acima de R$ 500.000">Acima de R$ 500.000 / mês</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                        Principal Objetivo / Serviço
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#090D17] border border-white/[0.1] focus:border-[#2563EB] text-sm text-white outline-none"
                      >
                        <option value="Tráfego Pago & Performance Escalar">Tráfego Pago & Performance Escalar</option>
                        <option value="SEO de Alta Performance">SEO de Alta Performance</option>
                        <option value="Branding & Autoridade de Marca">Branding & Autoridade de Marca</option>
                        <option value="Social Media Estratégica">Social Media Estratégica</option>
                        <option value="Email Marketing & Automação">Email Marketing & Automação</option>
                        <option value="Analytics & Inteligência de Dados">Analytics & Inteligência de Dados</option>
                        <option value="Diagnóstico Completo 360°">Diagnóstico Completo 360°</option>
                      </select>
                    </div>
                  </div>

                  {/* Notas adicionais */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Qual é o seu maior gargalo de vendas hoje? (Opcional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Ex: Temos leads, mas CAC muito alto; precisamos escalar o faturamento sem perder margem..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.1] focus:border-[#2563EB] text-sm text-white placeholder:text-slate-500 outline-none transition-all resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] shadow-xl shadow-[#2563EB]/30 hover:shadow-[#2563EB]/50 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Validando dados...</span>
                    ) : (
                      <>
                        <span>{AGENCY_INFO.primaryCta} — Sessão Gratuita</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[11px] text-slate-400 pt-2">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      100% Livre de Spam
                    </span>
                    <span>•</span>
                    <span>Análise preliminar em 15 minutos</span>
                  </div>
                </form>
              ) : (
                /* Submission Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <h4 className="font-display font-extrabold text-2xl text-white mb-2">
                    Solicitação Recebida com Sucesso!
                  </h4>

                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Agradecemos seu contato, <strong className="text-white">{formData.name}</strong>. Nossa equipe de inteligência de mercado já começou a analisar o perfil do seu negócio.
                  </p>

                  <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] max-w-md mx-auto mb-6 text-left text-xs text-slate-300 space-y-1.5">
                    <p><strong className="text-white">Serviço Prioritário:</strong> {formData.service}</p>
                    <p><strong className="text-white">Faixa de Faturamento:</strong> {formData.monthlyRevenue}</p>
                    <p><strong className="text-white">Contato Registrado:</strong> {formData.phone} | {formData.email}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleOpenWhatsApp}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Agilizar Atendimento no WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] transition-all"
                    >
                      Enviar Nova Mensagem
                    </button>
                  </div>
                </motion.div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
