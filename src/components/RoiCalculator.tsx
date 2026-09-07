import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onPreFillContact: (monthlyRev: string, investment: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onPreFillContact }) => {
  const [faturamentoAtual, setFaturamentoAtual] = useState<number>(80000);
  const [investimentoMidia, setInvestimentoMidia] = useState<number>(10000);

  // Growth formulas based on typical 4.8x to 5.4x agency performance
  const roiMultiplier = 5.2;
  const retornoEstimado = Math.round(investimentoMidia * roiMultiplier);
  const faturamentoProjetado = faturamentoAtual + retornoEstimado;
  const leadsEstimados = Math.round(investimentoMidia / 14); // R$ 14 CPL médio qualificado
  const cacEconomia = Math.round(investimentoMidia * 0.38);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="calculadora" className="py-20 relative overflow-hidden bg-[#0A0E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container */}
        <div className="rounded-3xl bg-gradient-to-b from-[#101627] to-[#0B0F1B] border border-white/[0.08] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle top glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-r from-blue-600/15 via-violet-600/15 to-transparent blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Column: Sliders (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Calculator className="w-3.5 h-3.5" />
                <span>Simulador de Tração & Escala</span>
              </div>

              <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-3">
                Projete o Impacto no Seu Faturamento
              </h2>

              <p className="text-sm text-slate-300 mb-8 max-w-xl">
                Ajuste os parâmetros abaixo para simular a receita potencial incremental através de campanhas de tráfego pago de alta densidade e funis de conversão.
              </p>

              {/* Slider 1: Faturamento Atual */}
              <div className="mb-8 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">
                    Faturamento Mensal Atual do seu Negócio
                  </span>
                  <span className="font-display font-bold text-base text-blue-400">
                    {formatCurrency(faturamentoAtual)}
                  </span>
                </div>
                <input
                  type="range"
                  min="20000"
                  max="1000000"
                  step="10000"
                  value={faturamentoAtual}
                  onChange={(e) => setFaturamentoAtual(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>R$ 20k/mês</span>
                  <span>R$ 500k/mês</span>
                  <span>R$ 1M+/mês</span>
                </div>
              </div>

              {/* Slider 2: Investimento em Mídia */}
              <div className="mb-6 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-slate-300">
                    Previsão de Investimento Mensal em Mídia Paga
                  </span>
                  <span className="font-display font-bold text-base text-violet-400">
                    {formatCurrency(investimentoMidia)}
                  </span>
                </div>
                <input
                  type="range"
                  min="3000"
                  max="150000"
                  step="1000"
                  value={investimentoMidia}
                  onChange={(e) => setInvestimentoMidia(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>R$ 3.000/mês</span>
                  <span>R$ 50.000/mês</span>
                  <span>R$ 150.000+/mês</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cálculo fundamentado em dados históricos médios (ROI 5.2x consolidado).</span>
              </div>
            </div>

            {/* Right Column: Calculated Projection Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-7 rounded-2xl bg-gradient-to-br from-[#12192B] to-[#0A0F1E] border border-blue-500/30 shadow-2xl relative">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Projeção Trimestral Estimada
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Multiplicador 5.2x
                  </span>
                </div>

                {/* Big Result Value */}
                <div className="mb-6">
                  <p className="text-xs text-slate-400">
                    Novo Faturamento Mensal Projetado:
                  </p>
                  <p className="font-display font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-violet-400 mt-1">
                    {formatCurrency(faturamentoProjetado)}
                  </p>
                  <p className="text-xs text-emerald-400 font-medium mt-1">
                    + {formatCurrency(retornoEstimado)} em receita incremental direta
                  </p>
                </div>

                {/* Sub metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[11px] text-slate-400 block">Leads Estimados</span>
                    <span className="font-display font-bold text-lg text-white">
                      {leadsEstimados.toLocaleString('pt-BR')} /mês
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="text-[11px] text-slate-400 block">Economia em CAC</span>
                    <span className="font-display font-bold text-lg text-emerald-400">
                      {formatCurrency(cacEconomia)}
                    </span>
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() => onPreFillContact(formatCurrency(faturamentoAtual), formatCurrency(investimentoMidia))}
                  className="w-full py-4 px-6 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Validar Esta Projeção com Nossos Especialistas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
