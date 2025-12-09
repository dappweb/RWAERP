import React from 'react';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { Zap, Globe2, TrendingUp, Coins, ShieldCheck } from 'lucide-react';

const Content: React.FC = () => {
  const { t } = useLanguage();
  const w = t.warehousePage;
  const advIcons = [Zap, Globe2, TrendingUp, Coins, ShieldCheck];

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <main>
        <Section id="overview">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{w.title}</h1>
            <p className="text-slate-400">{w.subtitle}</p>
          </div>
        </Section>

        {/* Advantages Section */}
        <Section id="advantages" className="pb-0">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{w.advantages.title}</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-6">
              {w.advantages.items.map((item: {title: string, desc: string}, i: number) => {
                 const Icon = advIcons[i] || Zap;
                 return (
                    <div key={i} className="bg-[#0e0f16] border border-blue-900/30 p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
                       <div className="w-12 h-12 bg-blue-900/20 rounded-lg flex items-center justify-center mb-6 text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all">
                          <Icon size={24} />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 );
              })}
           </div>
        </Section>

        <Section id="model" className="bg-[#0B0C15]">
          <div className="grid md:grid-cols-3 gap-6">
            {w.revenue.map((item: { title: string; desc: string }, i: number) => (
              <div key={i} className="bg-[#0f1016] border border-slate-800 rounded-2xl p-6">
                <div className="text-xl font-bold mb-2">{item.title}</div>
                <div className="text-slate-400 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="workflow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{w.workflow.title}</h2>
            <div className="space-y-4">
              {w.workflow.steps.map((step: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">{i + 1}</div>
                  <div className="text-slate-300">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="compliance" className="bg-[#0B0C15]">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#0f1016] border border-slate-800 rounded-2xl p-6">
              <div className="text-xl font-bold mb-2">{w.compliance.title}</div>
              <ul className="space-y-2 text-slate-400 text-sm">
                {w.compliance.items.map((it: string, i: number) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0f1016] border border-slate-800 rounded-2xl p-6">
              <div className="text-xl font-bold mb-2">{w.roles.title}</div>
              <ul className="space-y-2 text-slate-400 text-sm">
                {w.roles.items.map((it: string, i: number) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="cta">
          <div className="max-w-xl mx-auto text-center bg-[#0f1016] border border-slate-800 rounded-2xl p-8">
            <div className="text-2xl font-bold mb-2">{w.cta.title}</div>
            <p className="text-slate-400 mb-6">{w.cta.desc}</p>
            <Button variant="secondary" className="w-full">{w.cta.btn}</Button>
          </div>
        </Section>
      </main>
    </div>
  );
};

const WarehouseBusinessPage: React.FC = () => (
  <LanguageProvider>
    <Content />
  </LanguageProvider>
);

export default WarehouseBusinessPage;
