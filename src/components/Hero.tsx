import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{value}</div>
    <div className="text-xs md:text-sm text-slate-400 font-medium uppercase tracking-wider">{label}</div>
  </div>
);

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          {t.hero.tag}
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
          {t.hero.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{t.hero.titleHighlight}</span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {t.hero.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="primary" size="lg" className="group">
            {t.hero.start} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="group">
             {t.hero.view} <Layers size={18} className="ml-2 text-slate-400 group-hover:text-white" />
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-12">
          <StatItem value="$16T" label={t.hero.stats.market} />
          <StatItem value="2-3 Days" label={t.hero.stats.speed} />
          <StatItem value="100%" label={t.hero.stats.compliance} />
          <StatItem value="Global" label={t.hero.stats.liquidity} />
        </div>
      </div>
    </div>
  );
};