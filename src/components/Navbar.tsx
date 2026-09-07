import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Sparkles, CheckCircle2 } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#inicio" },
    { name: "Serviços", href: "#servicos" },
    { name: "Cases", href: "#cases" },
    { name: "Simulador ROI", href: "#calculadora" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#07090E]/85 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#inicio"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#2563EB] via-[#4F46E5] to-[#7C3AED] p-[1px] shadow-lg shadow-[#2563EB]/20 group-hover:shadow-[#2563EB]/40 transition-shadow">
              <div className="w-full h-full bg-[#07090E] rounded-[11px] flex items-center justify-center">
                <span className="font-display font-extrabold text-lg text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                  LM
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-blue-300 transition-colors">
                {AGENCY_INFO.name}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-slate-400 font-medium">
                Growth & Performance
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-[#0E131F]/70 border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Agenda aberta</span>
            </div>

            <button
              onClick={onOpenContact}
              className="relative inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] hover:from-[#1D4ED8] hover:to-[#6D28D9] shadow-lg shadow-[#2563EB]/25 hover:shadow-[#2563EB]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <span>Fale Conosco</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu"
              className="p-2.5 rounded-xl bg-[#0E131F] border border-white/[0.08] text-slate-200 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Sheet) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-[#0A0E18] border-l border-white/[0.08] p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-bold text-white text-base">
                      {AGENCY_INFO.shortName}
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 text-slate-400 hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="py-6 flex flex-col gap-3">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-white/[0.05] transition-all"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Atendimento prioritário em 15 minutos</span>
                </div>

                <a
                  href={`tel:${AGENCY_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-white/[0.1] text-xs font-semibold text-slate-200 hover:bg-white/[0.05]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>{AGENCY_INFO.phone}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#2563EB] to-[#7C3AED] shadow-lg shadow-[#2563EB]/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Fale Conosco Agora</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
