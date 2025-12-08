import React from 'react';
import { CheckCircle2, Settings, Zap, Globe } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { useLanguage } from '../context/LanguageContext';

const FeatureItem = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="flex gap-4">
    <div className="mt-1">
      <Icon size={20} className="text-green-500" />
    </div>
    <div>
      <h4 className="text-white font-medium mb-1">{title}</h4>
      <p className="text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

export const IssuanceFeature: React.FC = () => {
  const { t } = useLanguage();

  const icons = [CheckCircle2, Zap, Globe];

  return (
    <Section id="solutions" className="bg-[#080910] rounded-3xl my-10 border border-white/5 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12">
        {/* Text Content */}
        <div>
          <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded text-xs font-bold mb-4">
            {t.issuance.tag}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">RWAERP</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-300 mb-6">{t.issuance.title}</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {t.issuance.desc}
          </p>

          <div className="space-y-6 mb-8">
            {t.issuance.features.map((feature, i) => (
              <FeatureItem 
                key={i}
                icon={icons[i]} 
                title={feature.title} 
                desc={feature.desc} 
              />
            ))}
          </div>
        </div>

        {/* Mockup UI */}
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full"></div>
          <div className="relative bg-[#0F111A] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#161822]">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/20"></div>
              </div>
              <div className="text-xs text-slate-500">{t.issuance.ui.header}</div>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#0B0C15] p-4 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-xs mb-1">{t.issuance.ui.totalAsset}</div>
                  <div className="text-2xl font-bold text-white">$12,450,000</div>
                  <div className="text-green-500 text-xs mt-1 flex items-center gap-1">
                     ▲ +12.5%
                  </div>
                </div>
                <div className="bg-[#0B0C15] p-4 rounded-lg border border-slate-800">
                  <div className="text-slate-500 text-xs mb-1">{t.issuance.ui.holders}</div>
                  <div className="text-2xl font-bold text-white">1,240</div>
                  <div className="text-blue-500 text-xs mt-1">{t.issuance.ui.spread}</div>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-300">{t.issuance.ui.audit}</span>
                  <span className="text-green-500 flex items-center gap-1 text-xs"><CheckCircle2 size={12}/> {t.issuance.ui.complete}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-full"></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                   <span className="text-slate-300">{t.issuance.ui.contract}</span>
                   <span className="text-green-500 flex items-center gap-1 text-xs"><CheckCircle2 size={12}/> {t.issuance.ui.complete}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-full"></div>
                </div>

                <div className="flex items-center justify-between text-sm">
                   <span className="text-slate-300">{t.issuance.ui.listing}</span>
                   <span className="text-blue-400 flex items-center gap-1 text-xs animate-pulse">{t.issuance.ui.processing}</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[80%]"></div>
                </div>
              </div>

              <Button variant="secondary" className="w-full mt-4">{t.issuance.ui.deploy}</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};