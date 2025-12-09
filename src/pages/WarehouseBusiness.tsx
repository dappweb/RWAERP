import React from 'react';
import { Navbar } from '../components/Navbar';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';
import { Zap, Globe2, TrendingUp, Coins, ShieldCheck, Layers, Server, Code, Users, HelpCircle, ArrowRight, Box } from 'lucide-react';

const Content: React.FC = () => {
  const { t } = useLanguage();
  const w = t.warehousePage;
  const advIcons = [Zap, Globe2, TrendingUp, Coins, ShieldCheck];

  return (
    <div className="min-h-screen bg-[#050508] text-white overflow-x-hidden">
      <Navbar />
      <main>
        {/* Overview Hero - Enhanced */}
        <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
           {/* Background Glows */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10 pointer-events-none animate-pulse"></div>
           <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

           <Section id="overview" className="py-0 relative z-10">
             <div className="text-center max-w-5xl mx-auto">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wide mb-8">
                 <Box size={14} /> RWA WAREHOUSE MODEL
               </div>
               <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                 <span className="text-white">{w.title.split(' ')[0]}</span>{' '}
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{w.title.split(' ').slice(1).join(' ')}</span>
               </h1>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">{w.subtitle}</p>
               
               <div className="flex justify-center gap-4">
                  <Button variant="primary" size="lg" className="shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_50px_rgba(37,99,235,0.4)] transition-shadow">
                     {w.cta.btn} <ArrowRight size={18} className="ml-2" />
                  </Button>
               </div>
             </div>
           </Section>
        </div>

        {/* Advantages Section - Enhanced */}
        <Section id="advantages" className="pb-20">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">{w.advantages.title}</h2>
           </div>
           <div className="grid md:grid-cols-3 gap-6 px-4">
              {w.advantages.items.map((item: {title: string, desc: string}, i: number) => {
                 const Icon = advIcons[i] || Zap;
                 return (
                    <div key={i} className="bg-gradient-to-b from-[#0f1016] to-[#0a0b10] border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-all group hover:-translate-y-1 duration-300 relative overflow-hidden">
                       <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="w-14 h-14 bg-[#1a1c2e] rounded-2xl flex items-center justify-center mb-6 text-blue-500 group-hover:scale-110 transition-transform shadow-inner border border-white/5">
                          <Icon size={28} />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 );
              })}
           </div>
        </Section>

        {/* Architecture Section - Enhanced */}
        <Section id="architecture" className="bg-[#08090d] border-y border-white/5">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-2">{w.architecture.title}</h2>
              <p className="text-slate-500">{w.architecture.subtitle}</p>
           </div>
           <div className="space-y-6 max-w-6xl mx-auto">
              {w.architecture.layers.map((layer: {title: string, items: string[]}, i: number) => (
                 <div key={i} className="flex flex-col md:flex-row gap-6 group">
                    <div className="md:w-64 bg-[#11121b] flex items-center justify-center p-6 rounded-2xl border border-white/5 text-blue-400 font-bold shrink-0 shadow-lg relative overflow-hidden">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-2xl"></div>
                       {layer.title}
                    </div>
                    <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-4">
                       {layer.items.map((item: string, j: number) => (
                          <div key={j} className="bg-[#0e0f16] border border-white/5 p-4 rounded-xl text-sm text-slate-300 flex items-center justify-center text-center hover:bg-[#1a1c2e] hover:border-blue-500/20 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md">
                             {item}
                          </div>
                       ))}
                    </div>
                 </div>
              ))}
           </div>
        </Section>

        {/* Business Model (Revenue) - Enhanced */}
        <Section id="model">
          <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Revenue Model</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {w.revenue.map((item: { title: string; desc: string }, i: number) => (
              <div key={i} className="bg-[#0f1016] border border-white/5 rounded-3xl p-8 hover:bg-[#13141c] transition-colors relative">
                <div className="absolute top-8 right-8 text-7xl font-bold text-white/5 select-none pointer-events-none">0{i+1}</div>
                <div className="text-2xl font-bold mb-4 text-green-400">{item.title}</div>
                <div className="text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* Solutions / Use Cases - Enhanced */}
        <Section id="solutions" className="bg-[#08090d]">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">{w.solutions.title}</h2>
           </div>
           <div className="grid md:grid-cols-2 gap-6">
              {w.solutions.items.map((item: {title: string, desc: string}, i: number) => (
                 <div key={i} className="flex gap-8 bg-gradient-to-r from-[#0f1016] to-[#0a0b10] border border-white/5 p-8 rounded-3xl hover:border-blue-500/20 transition-all group">
                    <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-slate-700 to-slate-900 select-none group-hover:from-blue-900 group-hover:to-slate-900 transition-all">0{i+1}</div>
                    <div>
                       <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                       <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
              ))}
           </div>
        </Section>

        {/* Workflow - Enhanced */}
        <Section id="workflow">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-16 text-center">{w.workflow.title}</h2>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-blue-600 before:via-blue-900 before:to-slate-800">
              {w.workflow.steps.map((step: string, i: number) => (
                <div key={i} className="flex items-center gap-8 relative group">
                  <div className="w-10 h-10 rounded-full bg-[#050508] border-4 border-blue-600 text-white flex items-center justify-center text-sm font-bold shrink-0 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)] group-hover:scale-110 transition-transform">{i + 1}</div>
                  <div className="bg-[#0f1016] border border-white/5 p-6 rounded-2xl flex-grow text-slate-300 shadow-lg hover:border-blue-500/30 transition-all">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Compliance & Roles - Enhanced */}
        <Section id="compliance" className="bg-[#08090d]">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0f1016] border border-white/5 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-bl-full"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="p-3 bg-green-900/20 rounded-xl text-green-500"><ShieldCheck size={24} /></div>
                 <div className="text-2xl font-bold">{w.compliance.title}</div>
              </div>
              <ul className="space-y-4 relative z-10">
                {w.compliance.items.map((it: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
                     {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0f1016] border border-white/5 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full"></div>
              <div className="flex items-center gap-4 mb-8 relative z-10">
                 <div className="p-3 bg-blue-900/20 rounded-xl text-blue-500"><Users size={24} /></div>
                 <div className="text-2xl font-bold">{w.roles.title}</div>
              </div>
              <ul className="space-y-4 relative z-10">
                {w.roles.items.map((it: string, i: number) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400">
                     <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
                     {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* FAQ - Enhanced */}
        <Section id="faq">
           <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                 <h2 className="text-3xl font-bold">{w.faq.title}</h2>
              </div>
              <div className="space-y-4">
                 {w.faq.items.map((item: {q: string, a: string}, i: number) => (
                    <div key={i} className="bg-[#0f1016] border border-white/5 rounded-2xl p-6 hover:bg-[#13141c] transition-colors">
                       <div className="flex gap-4">
                          <HelpCircle className="text-blue-500 shrink-0 mt-1" size={20} />
                          <div>
                             <h3 className="font-bold text-white mb-2 text-lg">{item.q}</h3>
                             <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
                          </div>
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </Section>

        {/* CTA - Enhanced */}
        <Section id="cta" className="pb-32">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-blue-900/40 via-[#0f1016] to-[#0f1016] border border-blue-500/30 rounded-[2.5rem] p-16 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] -z-10 rounded-full"></div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">{w.cta.title}</h2>
            <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">{w.cta.desc}</p>
            <Button variant="primary" size="lg" className="w-full md:w-auto px-12 py-4 text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform">{w.cta.btn}</Button>
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
