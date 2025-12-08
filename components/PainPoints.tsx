import React from 'react';
import { XCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

const Point = ({ title, desc }: { title: string; desc: string }) => (
  <div className="bg-[#0e0f1a] border border-white/5 p-6 rounded-2xl hover:border-red-900/50 transition-colors group">
    <div className="w-8 h-8 bg-red-900/20 rounded-full flex items-center justify-center mb-4 text-red-500 group-hover:text-red-400 transition-colors">
      <XCircle size={18} />
    </div>
    <h3 className="text-white font-semibold mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </div>
);

export const PainPoints: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className="relative">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">{t.painPoints.title}</h2>
        <p className="text-slate-500 italic">{t.painPoints.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {t.painPoints.points.map((point, i) => (
          <Point key={i} title={point.title} desc={point.desc} />
        ))}
      </div>
    </Section>
  );
};