import React from 'react';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { Zap, Globe2, TrendingUp, Coins, ShieldCheck, Layers, Server, Code, Users, HelpCircle } from 'lucide-react';

const Content: React.FC = () => {
  const { t } = useLanguage();
  const w = t.warehousePage;
  const advIcons = [Zap, Globe2, TrendingUp, Coins, ShieldCheck];

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navbar />
      <main>
        {/* Overview Hero */}
        <Section id="overview">
          <div className="text-center max-w-4xl mx-auto pt-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">{w.title}</h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">{w.subtitle}</p>
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

        {/* Architecture Section (New) */}
        <Section id="architecture" className="bg-[#0B0C15]">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">{w.architecture.title}</h2>
              <p className="text-slate-500">{w.architecture.subtitle}</p>
           </div>
           <div className="space-y-4 max-w-5xl mx-auto">
              {w.architecture.layers.map((layer: {title: string, items: string[]}, i: number) => (
                 <div key={i} className="flex flex-col md:flex-row gap-4">
                    <div className="md:w-48 bg-blue-900/20 flex items-center justify-center p-4 rounded-lg border border-blue-900/30 text-blue-400 font-bold shrink-0">
                       {layer.title}
                    </div>
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-4">
                       {layer.items.map((item: string, j: number) => (
                          <div key={j} className="bg-[#0f1016] border border-slate-800 p-4 rounded-lg text-sm text-slate-300 flex items-center justify-center text-center hover:bg-slate-800/50 transition-colors">
                             {item}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </Section>

        {/* Business Model (Revenue) */}
        <Section id="model">
          <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Revenue Model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {w.revenue.map((item: { title: string; desc: string }, i: number) => (
              <div key={i} className="bg-[#0f1016] border border-slate-800 rounded-2xl p-8 hover:bg-slate-800/20 transition-colors">
                <div className="text-xl font-bold mb-3 text-green-400">{item.title}</div>
                <div className="text-slate-400 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Solutions / Use Cases (New) */}
        <Section id="solutions" className="bg-[#0B0C15]">
           <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">{w.solutions.title}</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
              {w.solutions.items.map((item: {title: string, desc: string}, i: number) => (
                 <div key={i} className="flex gap-6 bg-[#0f1016] border border-slate-800 p-6 rounded-2xl">
                    <div className="text-4xl font-black text-slate-800 select-none">0{i+1}</div>
                    <div>
                       <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                       <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </Section>

        {/* Workflow */}
        <Section id="workflow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-10 text-center">{w.workflow.title}</h2>
            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-800">
              {w.workflow.steps.map((step: string, i: number) => (
                <div key={i} className="flex items-center gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10 ring-4 ring-[#050508]">{i + 1}</div>
                  <div className="bg-[#0f1016] border border-slate-800 p-4 rounded-xl flex-grow text-slate-300">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Compliance & Roles */}
        <Section id="compliance" className="bg-[#0B0C15]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f1016] border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                 <ShieldCheck className="text-green-500" />
                 <div className="text-2xl font-bold">{w.compliance.title}</div>
              </div>
              <ul className="space-y-3">
                {w.compliance.items.map((it: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                     {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0f1016] border border-slate-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                 <Users className="text-blue-500" />
                 <div className="text-2xl font-bold">{w.roles.title}</div>
              </div>
              <ul className="space-y-3">
                {w.roles.items.map((it: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                     <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                     {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* FAQ (New) */}
        <Section id="faq">
           <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                 <h2 className="text-3xl font-bold">{w.faq.title}</h2>
              </div>
              <div className="space-y-4">
                 {w.faq.items.map((item: {q: string, a: string}, i: number) => (
                    <div key={i} className="bg-[#0f1016] border border-slate-800 rounded-xl p-6">
                       <div className="flex gap-4">
                          <HelpCircle className="text-slate-500 shrink-0 mt-1" size={20} />
                          <div>
                             <h3 className="font-bold text-white mb-2">{item.q}</h3>
                             <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </Section>

        {/* CTA */}
        <Section id="cta" className="pb-32">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/30 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[50px] -z-10"></div>
            <div className="text-3xl font-bold mb-4">{w.cta.title}</div>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">{w.cta.desc}</p>
            <Button variant="primary" size="lg" className="w-full md:w-auto px-12">{w.cta.btn}</Button>
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
