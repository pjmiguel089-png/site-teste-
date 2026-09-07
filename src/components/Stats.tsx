import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS } from '../data/content';
import { TrendingUp, Users, Target, ShieldCheck } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const AnimatedNumber: React.FC<CounterProps> = ({ end, suffix, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="font-display font-black text-4xl sm:text-6xl text-white tracking-tight">
      {count}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 ml-0.5">
        {suffix}
      </span>
    </span>
  );
};

export const Stats: React.FC = () => {
  const statIcons = [
    <Users key="1" className="w-5 h-5 text-blue-400" />,
    <Target key="2" className="w-5 h-5 text-indigo-400" />,
    <ShieldCheck key="3" className="w-5 h-5 text-emerald-400" />,
    <TrendingUp key="4" className="w-5 h-5 text-violet-400" />,
  ];

  return (
    <section className="py-20 bg-[#080B14] relative border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & assurance badge */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16 pb-8 border-b border-white/[0.06]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
              Métricas Auditadas
            </div>
            <h2 className="font-display font-extrabold text-2xl sm:text-4xl text-white">
              Histórico Incontestável de Tração e Retorno
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md text-left md:text-right">
            Resultados consolidados através de gestão orientada a dados e execução técnica implacável para negócios de alto faturamento.
          </p>
        </div>

        {/* 4 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-blue-500/30 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                  {statIcons[idx]}
                </div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                  0{idx + 1}
                </span>
              </div>

              <div className="mb-2">
                <AnimatedNumber end={stat.value} suffix={stat.suffix} />
              </div>

              <h3 className="font-display font-bold text-base text-slate-200 group-hover:text-blue-300 transition-colors mb-1">
                {stat.label}
              </h3>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                {stat.sublabel}
              </p>

              {/* Bottom subtle glow line */}
              <div className="absolute bottom-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-blue-500/40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
