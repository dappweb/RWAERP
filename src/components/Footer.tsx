import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Building2, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050508] border-t border-slate-900">
      
      {/* Trust Section */}
      <Section className="pb-0" id="team">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
           <div>
              <h2 className="text-3xl font-bold mb-4">{t.footer.title}</h2>
              <p className="text-slate-400 mb-6">{t.footer.subtitle}</p>
              
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <div className="bg-blue-900/20 p-2 rounded h-fit text-blue-400"><Building2 size={20}/></div>
                    <div>
                       <h4 className="text-white font-bold">{t.footer.reasons[0].title}</h4>
                       <p className="text-sm text-slate-500">{t.footer.reasons[0].desc}</p>
                    </div>
                 </div>
                 <div className="flex gap-4">
                    <div className="bg-blue-900/20 p-2 rounded h-fit text-blue-400"><Handshake size={20}/></div>
                    <div>
                       <h4 className="text-white font-bold">{t.footer.reasons[1].title}</h4>
                       <p className="text-sm text-slate-500">{t.footer.reasons[1].desc}</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0e0f16] border border-slate-800 p-6 rounded-lg text-center flex flex-col items-center justify-center">
                 <div className="text-blue-500 font-bold text-2xl mb-1">10+ Years</div>
                 <div className="text-slate-500 text-xs">{t.footer.stats.ops}</div>
              </div>
              <div className="bg-[#0e0f16] border border-slate-800 p-6 rounded-lg text-center flex flex-col items-center justify-center">
                 <div className="text-blue-500 font-bold text-2xl mb-1">Top Tier</div>
                 <div className="text-slate-500 text-xs">{t.footer.stats.security}</div>
              </div>
              <div className="col-span-2 bg-[#0e0f16] border border-slate-800 p-6 rounded-lg text-center flex flex-col items-center justify-center">
                 <ShieldCheck className="text-slate-600 mb-2" size={32} />
                 <div className="text-slate-300 text-sm">{t.footer.stats.trust}</div>
              </div>
           </div>
        </div>
      </Section>

      {/* CTA Box */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
           <h2 className="text-3xl md:text-5xl font-bold mb-6">{t.footer.cta.title}</h2>
           <p className="text-slate-400 mb-10 max-w-xl mx-auto">
             {t.footer.cta.desc}
           </p>

           <div className="bg-[#161822] p-8 rounded-2xl max-w-md mx-auto border border-slate-700 shadow-2xl">
              <div className="space-y-4">
                 <div>
                    <label className="block text-left text-xs text-slate-400 mb-1">{t.footer.cta.emailPlaceholder}</label>
                    <input type="email" placeholder={t.footer.cta.emailPlaceholder} className="w-full bg-[#0B0C15] border border-slate-700 rounded px-3 py-2 text-white focus:border-blue-500 outline-none transition-colors" />
                 </div>
                 <div>
                    <label className="block text-left text-xs text-slate-400 mb-1">{t.footer.cta.typePlaceholder}</label>
                    <input type="text" placeholder={t.footer.cta.typePlaceholder} className="w-full bg-[#0B0C15] border border-slate-700 rounded px-3 py-2 text-white focus:border-blue-500 outline-none transition-colors" />
                 </div>
                 <Button variant="secondary" className="w-full mt-2">{t.footer.cta.btn}</Button>
                 <p className="text-[10px] text-slate-600">{t.footer.cta.privacy}</p>
              </div>
           </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-900 bg-black py-12 px-4">
         <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                     <div className="w-3 h-3 border border-white rounded-sm"></div>
                  </div>
                  <span className="font-bold">RWAERP</span>
               </div>
               <p className="text-xs text-slate-500">The premier RWA issuance engine for global enterprises. Connect Real World to Web3.</p>
            </div>
            <div>
               <h4 className="font-bold text-white mb-4 text-sm">{t.footer.columns.product.title}</h4>
               <ul className="space-y-2 text-xs text-slate-500">
                  {t.footer.columns.product.items.map((item, i) => <li key={i}>{item}</li>)}
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-white mb-4 text-sm">{t.footer.columns.solutions.title}</h4>
               <ul className="space-y-2 text-xs text-slate-500">
                  {t.footer.columns.solutions.items.map((item, i) => <li key={i}>{item}</li>)}
               </ul>
            </div>
            <div>
               <h4 className="font-bold text-white mb-4 text-sm">{t.footer.columns.contact.title}</h4>
               <ul className="space-y-2 text-xs text-slate-500">
                  {t.footer.columns.contact.items.map((item, i) => <li key={i}>{item}</li>)}
               </ul>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 flex justify-between text-[10px] text-slate-600">
            <div>{t.footer.rights}</div>
            <div className="flex gap-4">
               {t.footer.links.map((link, i) => <span key={i}>{link}</span>)}
            </div>
         </div>
      </div>
    </footer>
  );
};