import React from 'react';
import { Warehouse, ShieldCheck, Zap, Globe2 } from 'lucide-react';
import { Section } from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

const Card = ({ icon: Icon, title, desc, tags, accentColor }: { icon: any, title: string, desc: string, tags?: string[], accentColor?: string }) => (
  <div className="bg-[#0e0f16] border border-white/5 p-8 rounded-2xl flex flex-col h-full hover:border-slate-700 transition-colors">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-6 ${accentColor ? accentColor : 'bg-blue-900/30 text-blue-400'}`}>
      <Icon size={20} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{desc}</p>
    {tags && (
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map(tag => (
           <span key={tag} className="text-[10px] uppercase px-2 py-1 bg-white/5 rounded text-slate-500 border border-white/5">{tag}</span>
        ))}
      </div>
    )}
  </div>
);

export const CoreFeatures: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="features">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-2">{t.core.title}</h2>
        <p className="text-slate-500 text-sm">{t.core.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Large Left Card - Clickable Link to Warehouse Page */}
        <a href="/warehouse" className="md:col-span-2 block group">
          <div className="bg-[#0e0f16] border border-white/5 rounded-2xl p-8 relative overflow-hidden h-full hover:border-blue-500/50 transition-all cursor-pointer">
             <div className="relative z-10">
               <div className="w-10 h-10 bg-blue-900/30 text-blue-400 rounded-lg flex items-center justify-center mb-6">
                 <Warehouse size={20} />
               </div>
               <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  {t.core.warehouse.title}
                  <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">Click to View</span>
               </h3>
               <p className="text-slate-400 text-sm max-w-md mb-6">
                  {t.core.warehouse.desc}
               </p>
               <div className="flex flex-wrap gap-2">
                 {t.core.warehouse.tags.map(tag => (
                    <span key={tag} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">{tag}</span>
                 ))}
               </div>
             </div>
             {/* Icon Graphic */}
             <Warehouse className="absolute bottom-[-20px] right-[-20px] w-48 h-48 text-white/5 group-hover:text-white/10 transition-colors" />
          </div>
        </a>

        {/* Right Top Card */}
        <Card 
           icon={ShieldCheck}
           title={t.core.compliance.title}
           desc={t.core.compliance.desc}
           tags={t.core.compliance.tags}
           accentColor="bg-green-900/30 text-green-400"
        />

        {/* Bottom Row */}
        <Card 
           icon={Globe2}
           title={t.core.exchange.title}
           desc={t.core.exchange.desc}
        />
        
        <div className="md:col-span-2 bg-[#0e0f16] border border-white/5 rounded-2xl p-8 flex items-center justify-between">
            <div>
               <div className="w-10 h-10 bg-yellow-900/30 text-yellow-400 rounded-lg flex items-center justify-center mb-4">
                 <Zap size={20} />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">{t.core.speed.title}</h3>
               <p className="text-slate-400 text-sm max-w-sm">
                 {t.core.speed.desc}
               </p>
            </div>
            {/* Visual comparison bar */}
            <div className="hidden sm:block w-1/3 space-y-3">
               <div className="flex justify-between text-xs text-slate-500"><span>{t.core.speed.trad}</span><span>6 Months+</span></div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="w-full h-full bg-slate-600"></div></div>
               
               <div className="flex justify-between text-xs text-white font-bold mt-2"><span>{t.core.speed.rw}</span><span className="text-blue-400">2 Days</span></div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden"><div className="w-[10%] h-full bg-blue-500"></div></div>
            </div>
        </div>
      </div>
    </Section>
  );
};