import React from 'react';
import { ArrowRight, BarChart3, Lock, Zap } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip, XAxis } from 'recharts';
import { useLanguage } from '../context/LanguageContext';

const data = [
  { name: '10:00', val: 4000, type: 'g' },
  { name: '10:05', val: 3000, type: 'r' },
  { name: '10:10', val: 2000, type: 'g' },
  { name: '10:15', val: 2780, type: 'r' },
  { name: '10:20', val: 1890, type: 'g' },
  { name: '10:25', val: 2390, type: 'r' },
  { name: '10:30', val: 3490, type: 'g' },
  { name: '10:35', val: 4200, type: 'g' },
  { name: '10:40', val: 3800, type: 'r' },
  { name: '10:45', val: 5100, type: 'g' },
  { name: '10:50', val: 4600, type: 'r' },
  { name: '10:55', val: 6100, type: 'g' },
];

export const TradingFeature: React.FC = () => {
  const { t } = useLanguage();
  const icons = [BarChart3, Zap, Lock];

  return (
    <Section id="engine">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-wider mb-4">
            <Zap size={14} fill="currentColor" /> {t.trading.tag}
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {t.trading.title} <br />
            <span className="text-amber-500">{t.trading.titleHighlight}</span>
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            {t.trading.desc}
          </p>

          <div className="space-y-6">
            {t.trading.features.map((feature, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="flex gap-4">
                    <div className="bg-amber-900/20 p-2 rounded text-amber-500 h-fit">
                        <Icon size={20} />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white">{feature.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{feature.desc}</p>
                    </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <a href="#" className="text-amber-500 hover:text-amber-400 text-sm font-semibold flex items-center gap-1 transition-colors">
                {t.trading.consult} <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Right Chart Mockup */}
        <div className="order-1 lg:order-2 relative group">
           {/* Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-amber-600/10 blur-[80px] rounded-full"></div>
           
           <div className="relative bg-[#0F111A] border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              {/* Fake Trading UI Header */}
              <div className="border-b border-slate-800 bg-[#161822] p-4 flex justify-between items-center">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                    <div>
                        <div className="text-sm font-bold text-white">RWA/USDT</div>
                        <div className="text-xs text-green-500">≈ $1,245.80</div>
                    </div>
                 </div>
                 <div className="flex gap-2">
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">1H</span>
                    <span className="px-2 py-1 bg-slate-700 rounded text-xs text-white">4H</span>
                    <span className="px-2 py-1 bg-slate-800 rounded text-xs text-slate-400">1D</span>
                 </div>
              </div>

              {/* Chart Area */}
              <div className="h-[300px] w-full p-4 relative">
                  <div className="absolute top-4 left-4 z-10">
                      <div className="text-3xl font-bold text-green-500">1,245.80</div>
                      <div className="text-xs text-slate-500 mt-1">Vol: 12.4M</div>
                  </div>
                  
                  {/* Order Book preview (right side) */}
                  <div className="absolute top-4 right-4 z-10 w-24 hidden sm:block">
                     <div className="flex justify-between text-[10px] text-slate-500 mb-1"><span>Price</span><span>Amt</span></div>
                     {[...Array(5)].map((_, i) => (
                        <div key={`sell-${i}`} className="flex justify-between text-[10px] text-red-400 mb-0.5"><span>{1248 - i}</span><span>{(Math.random()*2).toFixed(2)}</span></div>
                     ))}
                     <div className="my-1 border-t border-slate-700"></div>
                     {[...Array(5)].map((_, i) => (
                        <div key={`buy-${i}`} className="flex justify-between text-[10px] text-green-400 mb-0.5"><span>{1243 - i}</span><span>{(Math.random()*2).toFixed(2)}</span></div>
                     ))}
                  </div>

                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" hide />
                        <Tooltip 
                            contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{fill: 'transparent'}}
                        />
                        <Bar dataKey="val">
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.type === 'g' ? '#22c55e' : '#ef4444'} />
                            ))}
                        </Bar>
                    </BarChart>
                  </ResponsiveContainer>
              </div>

              {/* Action Buttons */}
              <div className="p-4 grid grid-cols-2 gap-4 border-t border-slate-800 bg-[#161822]">
                  <button className="bg-green-600 hover:bg-green-500 text-white py-2 rounded font-medium text-sm transition-colors">{t.trading.ui.buy}</button>
                  <button className="bg-red-600 hover:bg-red-500 text-white py-2 rounded font-medium text-sm transition-colors">{t.trading.ui.sell}</button>
              </div>
           </div>
        </div>
      </div>
    </Section>
  );
};