import React from 'react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

const Row = ({ label, bad, good }: { label: string, bad: string, good: string }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-800 py-6 hover:bg-white/5 transition-colors px-4">
    <div className="font-medium text-slate-300 mb-2 md:mb-0">{label}</div>
    <div className="text-slate-500 mb-1 md:mb-0 pr-4">{bad}</div>
    <div className="text-white font-semibold flex items-center gap-2">
       {good}
    </div>
  </div>
);

export const ComparisonTable: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section className="bg-[#0B0C15]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">{t.comparison.title}</h2>
      </div>

      <div className="bg-[#0f1016] border border-slate-800 rounded-xl overflow-hidden">
         {/* Header */}
         <div className="hidden md:grid grid-cols-3 bg-[#161822] py-4 px-4 text-sm font-bold text-slate-400 uppercase tracking-wider">
            <div>{t.comparison.headers[0]}</div>
            <div>{t.comparison.headers[1]}</div>
            <div className="text-blue-400">{t.comparison.headers[2]}</div>
         </div>

         {t.comparison.rows.map((row, i) => (
           <Row 
            key={i}
            label={row.label}
            bad={row.bad}
            good={row.good}
           />
         ))}
      </div>
    </Section>
  );
};