import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PainPoints } from './components/PainPoints';
import { IssuanceFeature } from './components/IssuanceFeature';
import { TradingFeature } from './components/TradingFeature';
import { CoreFeatures } from './components/CoreFeatures';
import { ComparisonTable } from './components/ComparisonTable';
import { Footer } from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#050508] text-white selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Hero />
          <PainPoints />
          <IssuanceFeature />
          <TradingFeature />
          <CoreFeatures />
          <ComparisonTable />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;