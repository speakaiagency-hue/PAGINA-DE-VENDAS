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

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-brand-offwhite font-sans overflow-x-hidden">
      
      {/* Background Layers */}
      <div className="aurora-container">
        <div className="aurora-bg"></div>
      </div>
      <div className="grain"></div>

      <Header />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />
        
        {/* Market Section */}
        <MarketSection />
        
        {/* Problems & Vision Section */}
        <ProblemsSection />
        
        {/* Showcase / Content Section */}
        <ShowcaseCarousel />
        
        {/* Ambassador Section */}
        <AmbassadorSection />
        
        {/* Skills / Course Structure */}
        <SkillsSection />

        {/* Bonus Items */}
        <BonusSection />

        {/* Pricing Section */}
        <section id="oferta">
          <PricingSection />
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="scroll-mt-24">
          <FAQSection />
        </section>

        {/* Who is the Author Section */}
        <section className="bg-black py-24 md:py-32 px-6 border-t border-zinc-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
              <div className="relative group flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg blur-2xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                <img 
                  src="https://ofilmboss.com/wp-content/uploads/2026/01/Frame-1707478239.png" 
                  alt="Rick" 
                  className="relative w-full max-w-[380px] rounded-2xl border border-zinc-800 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="text-left space-y-6 max-w-xl">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 45 45" fill="none">
                    <path d="M18.75 33.75H24.375V39.375H18.75V33.75ZM31.875 9.375V20.625H30V22.5H28.125V24.375H24.375V28.125H18.75V22.5H20.625V20.625H24.375V18.75H26.25V11.25H18.75V13.125H16.875V15H13.125V9.375H15V7.5H16.875V5.625H28.125V7.5H30V9.375H31.875Z" fill="#5826fe"></path>
                  </svg>
                  <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic leading-none">
                    QUEM É O RICK?
                  </h2>
                </div>
                <p className="text-zinc-400 leading-relaxed text-lg font-medium">
                  Rick é o criador por trás do Filmboss e referência mundial em audiovisual com IA. Ele construiu um método que hoje é usado por milhares de alunos pra criar personagens que vendem 24/7.
                </p>
                <div className="p-6 bg-brand-purple/5 border border-brand-purple/20 rounded-xl">
                  <p className="text-zinc-200 leading-relaxed text-lg font-black italic uppercase tracking-tighter">
                    Hoje, ele mostra como unir criatividade e tecnologia para criar influenciadores virtuais que vendem. Com o método SPEAK, ele ensina a dominar a técnica que está revolucionando o mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
