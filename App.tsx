import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MarketSection from './components/MarketSection';
import ProblemsSection from './components/ProblemsSection';
import ShowcaseCarousel from './components/ShowcaseCarousel';
import AmbassadorSection from './components/AmbassadorSection';
import SkillsSection from './components/SkillsSection';
import BonusSection from './components/BonusSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

declare global {
  interface Window {
    fbq: any;
  }
}

const App: React.FC = () => {
  // Função para rastrear cadastro (Lead)
  const handleLead = () => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
      console.log('Evento Lead disparado');
    }
  };

  // Função para rastrear compra (Purchase)
  const handlePurchase = () => {
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 199.90,
        currency: 'BRL',
      });
      console.log('Evento Purchase disparado');
    }
  };

  return (
    <div className="relative min-h-screen text-brand-offwhite font-sans overflow-x-hidden">
      
      {/* Background Layers */}
      <div className="aurora-container">
        <div className="aurora-bg"></div>
      </div>
      <div className="grain"></div>

      <Header />
      
      <main className="relative z-10">
        <Hero />
        <MarketSection />
        <ProblemsSection />
        <ShowcaseCarousel />
        <AmbassadorSection />
        <SkillsSection />
        <BonusSection />

        {/* Pricing Section */}
        <section id="oferta">
          <PricingSection />
          {/* Botão de compra com Pixel */}
          <button 
            onClick={handlePurchase} 
            className="mt-6 px-6 py-3 bg-brand-purple text-white rounded-lg font-bold hover:bg-brand-blue transition"
          >
            Comprar Agora
          </button>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-24">
          <FAQSection />
          {/* Botão de cadastro com Pixel */}
          <button 
            onClick={handleLead} 
            className="mt-6 px-6 py-3 bg-brand-cyan text-black rounded-lg font-bold hover:bg-brand-purple transition"
          >
            Quero me Cadastrar
          </button>
        </section>

        {/* Autor Section */}
        <section className="bg-black py-24 md:py-32 px-6 border-t border-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            {/* ... conteúdo original ... */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
