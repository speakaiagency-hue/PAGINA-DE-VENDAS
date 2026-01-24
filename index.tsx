import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// --- Header ---
const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const targetId = id === 'planos' ? 'oferta' : id;
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (id === 'início') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 overflow-x-hidden ${scrolled ? 'bg-black/95 backdrop-blur-2xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer z-[10001]" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="https://speakia.ai/wp-content/uploads/2025/11/cropped-SPEAK-AI-Proposta-de-Marca-e1763141139366.png" alt="SPEAK IA" className="h-6 md:h-7 w-auto max-w-full" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white/50 hover:text-white transition-colors text-[9px] font-black italic uppercase tracking-[0.2em]">{item}</button>
          ))}
          <button onClick={() => scrollTo('planos')} className="bg-brand-purple/20 border border-brand-purple/50 text-white hover:bg-brand-purple/40 hover:border-brand-purple px-4 py-1.5 text-[9px] font-black italic uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_15px_rgba(88,38,254,0.1)] hover:scale-105">PLANOS</button>
        </nav>

        {/* Desktop Access Button */}
        <div className="hidden lg:block z-[501]">
          <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="bg-brand-purple hover:bg-brand-blue text-white px-5 py-2.5 text-[9px] font-black italic uppercase tracking-wider transition-all hover:scale-105 rounded-sm shadow-lg">ACESSAR PLATAFORMA</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden relative z-[10001] p-2 flex flex-col items-center justify-center gap-1.5 w-10 h-10">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
        </button>

        {/* Mobile Fullscreen Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
           <div className="flex flex-col gap-10 text-center px-6 w-full max-w-xs">
              {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white/60 hover:text-white text-3xl font-black italic uppercase tracking-[0.2em] transition-colors">{item}</button>
              ))}
              <button onClick={() => scrollTo('planos')} className="text-brand-purple text-2xl font-black italic uppercase tracking-[0.2em] transition-colors">PLANOS</button>
              <div className="pt-6">
                <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="block bg-brand-purple text-white px-8 py-5 text-sm font-black italic uppercase tracking-[0.1em] rounded-sm shadow-2xl active:scale-95 transition-transform">ACESSAR PLATAFORMA</a>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};

// --- Hero ---
const Hero: React.FC = () => {
  return (
    <section id="início" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-x-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-6 text-left">
          <div className="inline-block py-1.5 px-4 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm">
             <span className="text-brand-cyan font-black text-[9px] tracking-[0.3em] uppercase italic">Speak AI</span>
          </div>
          <div className="space-y-0.5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[64px] font-black italic tracking-tighter leading-[0.9] text-white uppercase block">Crie sua</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[64px] font-black italic tracking-tighter leading-[0.9] text-brand-purple uppercase block">INFLUENCER IA</h1>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm leading-snug">
            Crie seu próprio INFLUENCER com IA. Aulas curtas, diretas e que cabem no seu dia. Conhecimento sem complicação.
          </p>
          <div className="pt-4">
            <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-1 bg-brand-purple rounded-sm blur-md opacity-20 group-hover:opacity-100 transition duration-700"></div>
              <span className="relative inline-flex bg-brand-purple hover:bg-brand-blue text-white px-7 py-3.5 text-sm font-black italic uppercase tracking-tighter transition-all hover:scale-105 shadow-lg">
                SPEAK AI ACADEMY
              </span>
            </a>
          </div>
        </div>
        <div className="relative group w-full">
          <div className="absolute -inset-8 bg-brand-purple/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-white/5 shadow-xl bg-zinc-950">
            <video className="w-full h-full object-cover" src="https://ofilmboss.com/wp-content/uploads/2025/12/Video-Montado-V2.mp4" autoPlay loop muted playsInline></video>
            <div className="absolute bottom-6 right-6 w-20 h-20 animate-float pointer-events-none">
               <img src="https://ofilmboss.com/wp-content/uploads/2026/01/selo-2.png" alt="Selo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ProblemsSection ---
const ProblemsSection: React.FC = () => {
  const problems = [
    "A maioria tem medo de usar IA",
    "A maioria não sabe criar prompt corretamente",
    "Outras plataformas são difíceis de usar",
    "O resultado sai genérico e a estética amadora",
    "Outras plataformas são caras pra acessar"
  ];
  return (
    <section className="py-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <span className="text-[9px] text-zinc-600 font-black uppercase italic tracking-widest leading-none block">
          SPEAK AI <br /> 2026 //
        </span>
        <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
          EXISTEM ALGUNS <br /> PROBLEMAS
        </h2>
      </div>
      <div className="max-w-2xl mx-auto mt-12 space-y-2">
        {problems.map((p, i) => (
          <div key={i} className="bg-zinc-900/30 border border-white/5 p-4 rounded-sm flex items-center gap-4 justify-center group hover:border-brand-problem/40 transition-colors">
            <span className="text-zinc-700 font-black italic text-sm">0{i + 1}</span>
            <span className="text-zinc-400 font-bold uppercase italic text-xs md:text-sm">{p}</span>
          </div>
        ))}
      </div>
      <div id="sobre" className="max-w-7xl mx-auto mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24">
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.8] text-white">
            A <span className="text-brand-cyan">SPEAK AI</span> <br /> EXISTE PARA <br /> RESOLVER ISSO
          </h2>
        </div>
        <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
          <video src="https://imagem.speakia.ai/wp-content/uploads/2026/01/video-pagina.mp4" autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
        </div>
      </div>
    </section>
  );
};

// --- ShowcaseCarousel ---
const ShowcaseCarousel: React.FC = () => {
  const items = [
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Criar-uma-influencer-do-zero-pra-vender-pra-voce.mp4", t: "Criar uma influencer do zero pra vender pra você" },
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/dicionar-seu-produto-diretamente-na-influencer.mp4", t: "Adicionar seu produto diretamente na influencer" },
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Trocar-roupas-cenarios-cores-influencer-produtos.mp4", t: "Trocar roupas, cenários, cores, influencer, produtos" },
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Fazer-seu-proprio-Avatar-para-criar-conteudo-pra-voce.mp4", t: "Fazer seu próprio Avatar para criar conteúdo pra você" },
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Vender-ate-mesmo-sem-aparecer.mp4", t: "Vender até mesmo sem aparecer" },
    { v: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Uma-influencer-ultra-realista.mp4", t: "Uma influencer ultra realista" }
  ];
  return (
    <section id="conteúdo" className="py-24 bg-black px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          O QUE VOCÊ VAI <br/> CONSEGUIR FAZER?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="group space-y-3">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 transition-all group-hover:border-brand-purple/50">
                <video src={it.v} autoPlay loop muted playsInline className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <p className="text-[10px] md:text-[11px] font-black italic uppercase text-zinc-500 group-hover:text-white transition-colors">{it.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SkillsSection ---
const SkillsSection: React.FC = () => {
  const skills = [
    { id: "01", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-585x1024-1.png", t: "CRIAÇÃO DE INFLUENCER" },
    { id: "02", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-1-585x1024-1.png", t: "O PODER DO PROMPT" },
    { id: "03", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-3.png", t: "RETRATO REALISTA" },
    { id: "04", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-6.png", t: "VOZ E MOVIMENTO" },
    { id: "05", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-8.png", t: "EXPANSÃO GLOBAL" },
    { id: "06", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-9.png", t: "MONETIZAÇÃO" }
  ];
  return (
    <section className="py-24 px-6 border-t border-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
            <span className="text-brand-purple text-[9px] font-black uppercase tracking-[0.4em] italic">ESTRUTURA DA</span>
            <h2 className="text-4xl md:text-5xl font-black italic text-white tracking-tighter">SPEAK IA</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {skills.map((s, i) => (
             <div key={i} className="space-y-4 group">
                <div className={`aspect-[4/5] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${i === 1 ? 'border-brand-cyan shadow-xl shadow-brand-cyan/10' : 'border-white/5 grayscale group-hover:grayscale-0'}`}>
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-center">
                  <span className={`text-4xl font-black italic ${i === 1 ? 'text-brand-cyan' : 'text-zinc-800'}`}>{s.id}</span>
                  <p className="text-[10px] font-black italic text-white uppercase">{s.t}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// --- BonusSection ---
const BonusSection: React.FC = () => {
  const bonus = [
    { t: "GERADOR DE PROMPT GRATUITO (PRA QUEM NÃO SABE CRIAR)", p: "R$1.997", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/prompt-768x439-1.png" },
    { t: "CONSULTORIA DE AVALIAÇÃO DO NEGÓCIO", p: "R$10.597", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/CONSULTORIA.png" },
    { t: "CANAL EXCLUSIVO COM DICAS DE USO, TRENDS E PROMPTS QUE UTILIZAMOS", p: "R$997", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/CANAL-EXCLUSIVO.png" },
    { t: "MINI CURSO GRATUITO", p: "R$297", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/MINI-CURSO-GRATUITO.png" }
  ];
  return (
    <section className="py-24 px-6 bg-zinc-950/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">BÔNUS EXCLUSIVOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonus.map((b, i) => (
            <div key={i} className="bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-purple/30 transition-all">
               <div className="aspect-[4/3] overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img src={b.img} className="w-full h-full object-cover" />
               </div>
               <div className="p-6 space-y-4">
                  <h3 className="text-sm font-black italic text-white uppercase tracking-tighter">{b.t}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                     <span className="text-[10px] text-zinc-600 line-through italic">{b.p}</span>
                     <span className="text-brand-cyan font-black italic text-base">R$ 0,00</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PricingSection ---
const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Básico",
      subtitle: "Perfeito para iniciantes - 500 créditos",
      price: "97,00",
      link: "https://pay.kiwify.com.br/jM0siPY",
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
    {
      title: "Pro",
      subtitle: "Para profissionais - 1.500 créditos",
      price: "197,00",
      link: "https://pay.kiwify.com.br/q0rFdNB",
      isFeatured: true,
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
    {
      title: "Premium",
      subtitle: "Para agências e empresas - 5.000 créditos",
      price: "697,00",
      link: "https://pay.kiwify.com.br/KFXdvJv",
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
  ];

  return (
    <section id="oferta" className="py-24 md:py-32 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 ${
                plan.isFeatured
                  ? "bg-[#0f111e] border-brand-purple shadow-[0_0_40px_rgba(88,38,254,0.15)] scale-105 z-10"
                  : "bg-[#0a0c16] border-zinc-800/50 hover:border-zinc-700"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-blue text-white px-4 py-1.5 rounded-full text-[10px] font-black italic uppercase flex items-center gap-1.5 shadow-lg">
                  <span>⭐</span> MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black italic text-white mb-2 uppercase tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-tight">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                  R$ {plan.price}
                </span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">
                  INCLUSO:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <svg
                        className="w-4 h-4 text-brand-purple flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors italic">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-black italic uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all ${
                  plan.isFeatured
                    ? "bg-brand-purple text-white shadow-xl shadow-brand-purple/20 hover:scale-[1.02]"
                    : "bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"
                }`}
              >
                Comprar Agora
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- AmbassadorSection ---
const AmbassadorSection: React.FC = () => {
 return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] -z-10 rounded-full"></div>

      {/* Layout principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Foto à esquerda */}
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/5 group shadow-xl">
          <img 
            src="https://speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-7.png" 
            alt="Embaixador Virtual" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
              BELLA FALCONI
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
              EMBAIXADORA <span className="text-brand-cyan">SPEAK IA</span>
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Reconhecida como uma das maiores referências do Brasil nas categorias luxo, beleza e fitness, Bella Falconi construiu uma trajetória sólida de sucesso, influência e credibilidade no mercado digital e empresarial. Seu impacto é refletido em uma audiência de mais de 4 milhões de seguidores e em sua presença constante entre os principais nomes do empreendedorismo moderno.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Seu trabalho e relevância a levaram a integrar a prestigiada lista Forbes 30 Under 30, reconhecimento reservado a jovens líderes que transformam mercados e criam negócios de alto impacto.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Muito além da influência, Bella é empresária consolidada, com forte atuação na construção de marcas, posicionamento premium e comunidades altamente engajadas, sempre conectando performance, estética, disciplina e visão estratégica.
            </p>
             <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Sua conexão com a Speak AI nasce da compreensão de que a Inteligência Artificial é o próximo grande pilar dos negócios, especialmente para quem busca escala, eficiência e liberdade sem abrir mão de autenticidade. A tecnologia passa a ser uma aliada estratégica para ampliar resultados e impacto de forma inteligente.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-brand-purple pl-4">
              Como Embaixadora da Speak AI, Bella Falconi representa a união entre autoridade, inovação e futuro, ajudando a posicionar a Inteligência Artificial como uma ferramenta essencial para pessoas e empresas que querem crescer de forma estruturada e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- AuthorSection ---
const AuthorSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] -z-10 rounded-full"></div>

      {/* Layout principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Foto à esquerda */}
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/5 group shadow-xl">
          <img 
            src="https://speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-5.png" 
            alt="Embaixador Virtual" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
              QUEM É LUCAS ZANARDO?
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
              Fundador da <span className="text-brand-cyan">SPEAK IA</span>
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Empresário, investidor e estrategista em Inteligência Artificial, Lucas Zanardo iniciou sua trajetória empreendedora ainda aos 16 anos de idade. Hoje, aos 32 anos, soma mais de 15 anos de experiência liderando equipes e grandes organizações.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Ao longo da carreira, tornou-se referência em estruturação de times comerciais e desenvolvimento de líderes, acumulando mais de R$ 800 milhões em vendas geradas por equipes que ele próprio formou, treinou e liderou.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Esportista por paixão e empreendedor por essência, construiu sua trajetória baseada em disciplina, performance e visão estratégica. Pioneiro na aplicação prática da Inteligência Artificial nos negócios.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-brand-purple pl-4">
              A Speak AI nasce da sua convicção de que a Inteligência Artificial é a maior alavanca da nova economia — capaz de transformar negócios e oferecer liberdade a empreendedores e criadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "1. O QUE É SPEAK AI?", a: "A Speak AI é uma plataforma inteligente que permite qualquer pessoa criar sua própria influenciadora digital, produzir vídeos, conteúdos e automações completas usando inteligência artificial — tudo de forma simples, rápida e sem precisar aparecer." },
    { q: "2. PRECISO SABER PROGRAMAR PARA USAR A SPEAK AI?", a: "Não. Você não precisa saber programar nem entender de tecnologia avançada para usar a Speak AI. A plataforma foi criada para qualquer pessoa, mesmo totalmente leiga em IA." },
    { q: "3. COMO FUNCIONAM OS CRÉDITOS?", a: "Os créditos são a 'moeda interna' da Speak AI. Cada ação dentro da plataforma utiliza uma pequena quantidade de créditos. Você compra um pacote e usa conforme precisar." },
    { q: "4. MEUS DADOS ESTÃO SEGUROS?", a: "Sim. Utilizamos criptografia, servidores seguros e políticas rígidas de privacidade. Nada do que você cria é compartilhado com terceiros." },
    { q: "5. EU SOU DONO DOS AVATARES, VÍDEOS OU QUALQUER MATERIAL QUE EU CRIO?", a: "Sim. Todo conteúdo que você cria pertence 100% a você e pode ser usado comercialmente." },
    { q: "6. PRECISO APARECER NOS VÍDEOS?", a: "Não. Você pode criar influenciadores e vídeos totalmente sem rosto usando IA." },
    { q: "7. POSSO USAR OS AVATARES PARA REPRESENTAR MINHA MARCA?", a: "Sim. Você pode criar influenciadores digitais personalizados para sua marca ou empresa." },
    { q: "8. COMO FUNCIONA PARA QUEM VENDE PRODUTOS?", a: "A plataforma ajuda você a criar conteúdos que vendem: vídeos, influenciadores digitais apresentando produtos, roteiros de anúncios e campanhas completas." },
    { q: "9. A SPEAK AI FUNCIONA NO CELULAR?", a: "Sim. Funciona no celular, computador ou tablet — basta ter acesso à internet." },
    { q: "10. A SPEAK AI OFERECE SUPORTE?", a: "Sim! Você terá acesso a suporte humano, materiais educativos e comunidade exclusiva." }
  ];

  return (
    <section id="faq" className="bg-black py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-center text-white">DÚVIDAS?</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`group border rounded-[1.2rem] overflow-hidden transition-all ${open === i ? 'bg-zinc-900/20 border-brand-purple/30' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`text-sm md:text-base font-black italic uppercase transition-all ${open === i ? 'text-white' : 'text-zinc-600'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform ${open === i ? 'rotate-45' : ''}`}>
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                </div>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-zinc-500 text-[11px] md:text-xs italic leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 text-center">
      <img 
        src="https://speakia.ai/wp-content/uploads/2025/11/cropped-SPEAK-AI-Proposta-de-Marca-e1763141139366.png" 
        alt="SPEAK IA" 
        className="h-7 mx-auto opacity-80 mb-6"
      />
      <p className="text-white text-[9px] font-black italic uppercase tracking-[0.2em]">
        © 2025 SPEAK IA. TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
};

// --- App ---
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-brand-offwhite font-sans overflow-x-hidden">
      <div className="aurora-container">
        <div className="aurora-bg animate-aurora"></div>
      </div>
      <div className="grain"></div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <ProblemsSection />
        <ShowcaseCarousel /> 
        <SkillsSection />
        <BonusSection />
        <PricingSection />
        <AmbassadorSection />
        <AuthorSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  }, [isMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const targetId = id === 'planos' ? 'oferta' : id;
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else if (id === 'início') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 overflow-x-hidden ${scrolled ? 'bg-black/95 backdrop-blur-2xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer z-[10001]" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img src="https://speakia.ai/wp-content/uploads/2025/11/cropped-SPEAK-AI-Proposta-de-Marca-e1763141139366.png" alt="SPEAK IA" className="h-6 md:h-7 w-auto max-w-full" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
            <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white/50 hover:text-white transition-colors text-[9px] font-black italic uppercase tracking-[0.2em]">{item}</button>
          ))}
          <button onClick={() => scrollTo('planos')} className="bg-brand-purple/20 border border-brand-purple/50 text-white hover:bg-brand-purple/40 hover:border-brand-purple px-4 py-1.5 text-[9px] font-black italic uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_15px_rgba(88,38,254,0.1)] hover:scale-105">PLANOS</button>
        </nav>

        {/* Desktop Access Button */}
        <div className="hidden lg:block z-[501]">
          <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="bg-brand-purple hover:bg-brand-blue text-white px-5 py-2.5 text-[9px] font-black italic uppercase tracking-wider transition-all hover:scale-105 rounded-sm shadow-lg">ACESSAR PLATAFORMA</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden relative z-[10001] p-2 flex flex-col items-center justify-center gap-1.5 w-10 h-10">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''}`}></span>
        </button>

        {/* Mobile Fullscreen Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
           <div className="flex flex-col gap-10 text-center px-6 w-full max-w-xs">
              {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="text-white/60 hover:text-white text-3xl font-black italic uppercase tracking-[0.2em] transition-colors">{item}</button>
              ))}
              <button onClick={() => scrollTo('planos')} className="text-brand-purple text-2xl font-black italic uppercase tracking-[0.2em] transition-colors">PLANOS</button>
              <div className="pt-6">
                <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="block bg-brand-purple text-white px-8 py-5 text-sm font-black italic uppercase tracking-[0.1em] rounded-sm shadow-2xl active:scale-95 transition-transform">ACESSAR PLATAFORMA</a>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
};

// --- Hero ---
const Hero: React.FC = () => {
  return (
    <section id="início" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-x-hidden px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-6 text-left">
          <div className="inline-block py-1.5 px-4 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm">
             <span className="text-brand-cyan font-black text-[9px] tracking-[0.3em] uppercase italic">Speak AI</span>
          </div>
          <div className="space-y-0.5">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[64px] font-black italic tracking-tighter leading-[0.9] text-white uppercase block">Crie sua</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[64px] font-black italic tracking-tighter leading-[0.9] text-brand-purple uppercase block">INFLUENCER IA</h1>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm leading-snug">
            Crie seu próprio INFLUENCER com IA. Aulas curtas, diretas e que cabem no seu dia. Conhecimento sem complicação.
          </p>
          <div className="pt-4">
            <a href="https://app.speakia.ai/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center">
              <div className="absolute -inset-1 bg-brand-purple rounded-sm blur-md opacity-20 group-hover:opacity-100 transition duration-700"></div>
              <span className="relative inline-flex bg-brand-purple hover:bg-brand-blue text-white px-7 py-3.5 text-sm font-black italic uppercase tracking-tighter transition-all hover:scale-105 shadow-lg">
                SPEAK AI ACADEMY
              </span>
            </a>
          </div>
        </div>
        <div className="relative group w-full">
          <div className="absolute -inset-8 bg-brand-purple/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-white/5 shadow-xl bg-zinc-950">
            <video className="w-full h-full object-cover" src="https://ofilmboss.com/wp-content/uploads/2025/12/Video-Montado-V2.mp4" autoPlay loop muted playsInline></video>
            <div className="absolute bottom-6 right-6 w-20 h-20 animate-float pointer-events-none">
               <img src="https://ofilmboss.com/wp-content/uploads/2026/01/selo-2.png" alt="Selo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ProblemsSection ---
const ProblemsSection: React.FC = () => {
  const problems = [
    "A maioria tem medo de usar IA",
    "A maioria não sabe criar prompt corretamente",
    "Outras plataformas são difíceis de usar",
    "O resultado sai genérico e a estética amadora",
    "Outras plataformas são caras pra acessar"
  ];
  return (
    <section className="py-24 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <span className="text-[9px] text-zinc-600 font-black uppercase italic tracking-widest leading-none block">
          SPEAK AI <br /> 2026 //
        </span>
        <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
          EXISTEM ALGUNS <br /> PROBLEMAS
        </h2>
      </div>
      <div className="max-w-2xl mx-auto mt-12 space-y-2">
        {problems.map((p, i) => (
          <div key={i} className="bg-zinc-900/30 border border-white/5 p-4 rounded-sm flex items-center gap-4 justify-center group hover:border-brand-problem/40 transition-colors">
            <span className="text-zinc-700 font-black italic text-sm">0{i + 1}</span>
            <span className="text-zinc-400 font-bold uppercase italic text-xs md:text-sm">{p}</span>
          </div>
        ))}
      </div>
      <div id="sobre" className="max-w-7xl mx-auto mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-mt-24">
        <div className="space-y-6">
          <h2 className="text-5xl lg:text-7xl font-black italic tracking-tighter uppercase leading-[0.8] text-white">
            A <span className="text-brand-cyan">SPEAK AI</span> <br /> EXISTE PARA <br /> RESOLVER ISSO
          </h2>
        </div>
        <div className="rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl relative">
          <video src="https://speakia.ai/wp-content/uploads/2026/01/video-pagina.mp4" autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
        </div>
      </div>
    </section>
  );
};

// --- ShowcaseCarousel ---
export const ShowcaseCarousel: React.FC = () => {
  const items = [
    { v: "/midia/videos/Criar-uma-influencer-do-zero-pra-vender-pra-voce.mp4", t: "Criar uma influencer do zero pra vender pra você" },
    { v: "/midia/videos/Adicionar-seu-produto-diretamente-na-influencer.mp4", t: "Adicionar seu produto diretamente na influencer" },
    { v: "/midia/videos/Trocar-roupas-cenarios-cores-influencer-produtos.mp4", t: "Trocar roupas, cenários, cores, influencer, produtos" },
    { v: "/midia/videos/Fazer-seu-proprio-Avatar-para-criar-conteudo-pra-voce.mp4", t: "Fazer seu próprio Avatar para criar conteúdo pra você" },
    { v: "/midia/videos/Vender-ate-mesmo-sem-aparecer.mp4", t: "Vender até mesmo sem aparecer" },
    { v: "/midia/videos/Uma-influencer-ultra-realista.mp4", t: "Uma influencer ultra realista" }
  ];

  return (
    <section id="conteudo" className="py-24 bg-black px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          O QUE VOCÊ VAI <br /> CONSEGUIR FAZER?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div key={i} className="group space-y-3">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 transition-all group-hover:border-brand-purple/50">
                <video
                  src={it.v}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <p className="text-[10px] md:text-[11px] font-black italic uppercase text-zinc-500 group-hover:text-white transition-colors">
                {it.t}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SkillsSection ---
const SkillsSection: React.FC = () => {
  const skills = [
    { id: "01", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0.png", t: "CRIAÇÃO DE INFLUENCER" },
    { id: "02", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0-1.png", t: "O PODER DO PROMPT" },
    { id: "03", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0-3.png", t: "RETRATO REALISTA" },
    { id: "04", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0-6.png", t: "VOZ E MOVIMENTO" },
    { id: "05", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0-8.png", t: "EXPANSÃO GLOBAL" },
    { id: "06", img: "https://speakia.ai/wp-content/uploads/2026/01/imagem-0-9.png", t: "MONETIZAÇÃO" }
  ];
  return (
    <section className="py-24 px-6 border-t border-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
            <span className="text-brand-purple text-[9px] font-black uppercase tracking-[0.4em] italic">ESTRUTURA DA</span>
            <h2 className="text-4xl md:text-5xl font-black italic text-white tracking-tighter">SPEAK IA</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {skills.map((s, i) => (
             <div key={i} className="space-y-4 group">
                <div className={`aspect-[4/5] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${i === 1 ? 'border-brand-cyan shadow-xl shadow-brand-cyan/10' : 'border-white/5 grayscale group-hover:grayscale-0'}`}>
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div className="text-center">
                  <span className={`text-4xl font-black italic ${i === 1 ? 'text-brand-cyan' : 'text-zinc-800'}`}>{s.id}</span>
                  <p className="text-[10px] font-black italic text-white uppercase">{s.t}</p>
                </div>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

// --- BonusSection ---
const BonusSection: React.FC = () => {
  const bonus = [
    { t: "GERADOR DE PROMPT GRATUITO (PRA QUEM NÃO SABE CRIAR)", p: "R$1.997", img: "https://speakia.ai/wp-content/uploads/2026/01/prompt.png" },
    { t: "CONSULTORIA DE AVALIAÇÃO DO NEGÓCIO", p: "R$10.597", img: "https://speakia.ai/wp-content/uploads/2026/01/CONSULTORIA.png" },
    { t: "CANAL EXCLUSIVO COM DICAS DE USO, TRENDS E PROMPTS QUE UTILIZAMOS", p: "R$997", img: "https://speakia.ai/wp-content/uploads/2026/01/CANAL-EXCLUSIVO.png" },
    { t: "MINI CURSO GRATUITO", p: "R$297", img: "https://speakia.ai/wp-content/uploads/2026/01/MINI-CURSO-GRATUITO.png" }
  ];
  return (
    <section className="py-24 px-6 bg-zinc-950/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">BÔNUS EXCLUSIVOS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bonus.map((b, i) => (
            <div key={i} className="bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-purple/30 transition-all">
               <div className="aspect-[4/3] overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                  <img src={b.img} className="w-full h-full object-cover" />
               </div>
               <div className="p-6 space-y-4">
                  <h3 className="text-sm font-black italic text-white uppercase tracking-tighter">{b.t}</h3>
                  <div className="flex justify-between items-center pt-4 border-t border-white/5">
                     <span className="text-[10px] text-zinc-600 line-through italic">{b.p}</span>
                     <span className="text-brand-cyan font-black italic text-base">R$ 0,00</span>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- PricingSection ---
const PricingSection: React.FC = () => {
  const plans = [
    {
      title: "Básico",
      subtitle: "Perfeito para iniciantes - 500 créditos",
      price: "97,00",
      link: "https://pay.kiwify.com.br/jM0siPY",
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
    {
      title: "Pro",
      subtitle: "Para profissionais - 1.500 créditos",
      price: "197,00",
      link: "https://pay.kiwify.com.br/q0rFdNB",
      isFeatured: true,
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
    {
      title: "Premium",
      subtitle: "Para agências e empresas - 5.000 créditos",
      price: "697,00",
      link: "https://pay.kiwify.com.br/KFXdvJv",
      features: [
        "Chat IA ilimitado",
        "Gerador de Prompt",
        "Gerações de imagem",
        "Geração de Vídeos",
        "Email + WhatsApp",
      ],
    },
  ];

  return (
    <section id="oferta" className="py-24 md:py-32 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all duration-500 ${
                plan.isFeatured
                  ? "bg-[#0f111e] border-brand-purple shadow-[0_0_40px_rgba(88,38,254,0.15)] scale-105 z-10"
                  : "bg-[#0a0c16] border-zinc-800/50 hover:border-zinc-700"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-purple to-brand-blue text-white px-4 py-1.5 rounded-full text-[10px] font-black italic uppercase flex items-center gap-1.5 shadow-lg">
                  <span>⭐</span> MAIS POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-black italic text-white mb-2 uppercase tracking-tight">
                  {plan.title}
                </h3>
                <p className="text-zinc-500 text-sm font-medium leading-tight">
                  {plan.subtitle}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl md:text-5xl font-black text-white italic tracking-tighter">
                  R$ {plan.price}
                </span>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest italic">
                  INCLUSO:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <svg
                        className="w-4 h-4 text-brand-purple flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors italic">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-black italic uppercase text-xs tracking-widest flex items-center justify-center gap-2 transition-all ${
                  plan.isFeatured
                    ? "bg-brand-purple text-white shadow-xl shadow-brand-purple/20 hover:scale-[1.02]"
                    : "bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600"
                }`}
              >
                Comprar Agora
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- AmbassadorSection ---
const AmbassadorSection: React.FC = () => {
 return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] -z-10 rounded-full"></div>

      {/* Layout principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Foto à esquerda */}
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/5 group shadow-xl">
          <img 
            src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-7.png" 
            alt="Embaixador Virtual" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
              BELLA FALCONI
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
              EMBAIXADORA <span className="text-brand-cyan">SPEAK IA</span>
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Reconhecida como uma das maiores referências do Brasil nas categorias luxo, beleza e fitness, Bella Falconi construiu uma trajetória sólida de sucesso, influência e credibilidade no mercado digital e empresarial. Seu impacto é refletido em uma audiência de mais de 4 milhões de seguidores e em sua presença constante entre os principais nomes do empreendedorismo moderno.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Seu trabalho e relevância a levaram a integrar a prestigiada lista Forbes 30 Under 30, reconhecimento reservado a jovens líderes que transformam mercados e criam negócios de alto impacto.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Muito além da influência, Bella é empresária consolidada, com forte atuação na construção de marcas, posicionamento premium e comunidades altamente engajadas, sempre conectando performance, estética, disciplina e visão estratégica.
            </p>
             <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Sua conexão com a Speak AI nasce da compreensão de que a Inteligência Artificial é o próximo grande pilar dos negócios, especialmente para quem busca escala, eficiência e liberdade sem abrir mão de autenticidade. A tecnologia passa a ser uma aliada estratégica para ampliar resultados e impacto de forma inteligente.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-brand-purple pl-4">
              Como Embaixadora da Speak AI, Bella Falconi representa a união entre autoridade, inovação e futuro, ajudando a posicionar a Inteligência Artificial como uma ferramenta essencial para pessoas e empresas que querem crescer de forma estruturada e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- AuthorSection ---
const AuthorSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 blur-[120px] -z-10 rounded-full"></div>

      {/* Layout principal */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Foto à esquerda */}
        <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden border border-white/5 group shadow-xl">
          <img 
            src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-5.png" 
            alt="Embaixador Virtual" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
              QUEM É LUCAS ZANARDO?
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
              Fundador da <span className="text-brand-cyan">SPEAK IA</span>
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Empresário, investidor e estrategista em Inteligência Artificial, Lucas Zanardo iniciou sua trajetória empreendedora ainda aos 16 anos de idade. Hoje, aos 32 anos, soma mais de 15 anos de experiência liderando equipes e grandes organizações.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Ao longo da carreira, tornou-se referência em estruturação de times comerciais e desenvolvimento de líderes, acumulando mais de R$ 800 milhões em vendas geradas por equipes que ele próprio formou, treinou e liderou.
            </p>
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
              Esportista por paixão e empreendedor por essência, construiu sua trajetória baseada em disciplina, performance e visão estratégica. Pioneiro na aplicação prática da Inteligência Artificial nos negócios.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-brand-purple pl-4">
              A Speak AI nasce da sua convicção de que a Inteligência Artificial é a maior alavanca da nova economia — capaz de transformar negócios e oferecer liberdade a empreendedores e criadores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FAQ ---
const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "1. O QUE É SPEAK AI?", a: "A Speak AI é uma plataforma inteligente que permite qualquer pessoa criar sua própria influenciadora digital, produzir vídeos, conteúdos e automações completas usando inteligência artificial — tudo de forma simples, rápida e sem precisar aparecer." },
    { q: "2. PRECISO SABER PROGRAMAR PARA USAR A SPEAK AI?", a: "Não. Você não precisa saber programar nem entender de tecnologia avançada para usar a Speak AI. A plataforma foi criada para qualquer pessoa, mesmo totalmente leiga em IA." },
    { q: "3. COMO FUNCIONAM OS CRÉDITOS?", a: "Os créditos são a 'moeda interna' da Speak AI. Cada ação dentro da plataforma utiliza uma pequena quantidade de créditos. Você compra um pacote e usa conforme precisar." },
    { q: "4. MEUS DADOS ESTÃO SEGUROS?", a: "Sim. Utilizamos criptografia, servidores seguros e políticas rígidas de privacidade. Nada do que você cria é compartilhado com terceiros." },
    { q: "5. EU SOU DONO DOS AVATARES, VÍDEOS OU QUALQUER MATERIAL QUE EU CRIO?", a: "Sim. Todo conteúdo que você cria pertence 100% a você e pode ser usado comercialmente." },
    { q: "6. PRECISO APARECER NOS VÍDEOS?", a: "Não. Você pode criar influenciadores e vídeos totalmente sem rosto usando IA." },
    { q: "7. POSSO USAR OS AVATARES PARA REPRESENTAR MINHA MARCA?", a: "Sim. Você pode criar influenciadores digitais personalizados para sua marca ou empresa." },
    { q: "8. COMO FUNCIONA PARA QUEM VENDE PRODUTOS?", a: "A plataforma ajuda você a criar conteúdos que vendem: vídeos, influenciadores digitais apresentando produtos, roteiros de anúncios e campanhas completas." },
    { q: "9. A SPEAK AI FUNCIONA NO CELULAR?", a: "Sim. Funciona no celular, computador ou tablet — basta ter acesso à internet." },
    { q: "10. A SPEAK AI OFERECE SUPORTE?", a: "Sim! Você terá acesso a suporte humano, materiais educativos e comunidade exclusiva." }
  ];

  return (
    <section id="faq" className="bg-black py-24 px-6 border-t border-white/5">
      <div className="max-w-3xl mx-auto space-y-12">
        <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter uppercase text-center text-white">DÚVIDAS?</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className={`group border rounded-[1.2rem] overflow-hidden transition-all ${open === i ? 'bg-zinc-900/20 border-brand-purple/30' : 'bg-transparent border-white/5 hover:border-white/10'}`}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                <span className={`text-sm md:text-base font-black italic uppercase transition-all ${open === i ? 'text-white' : 'text-zinc-600'}`}>{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform ${open === i ? 'rotate-45' : ''}`}>
                   <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                </div>
              </button>
              <div className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 text-zinc-500 text-[11px] md:text-xs italic leading-relaxed">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-16 px-6 text-center">
      <img 
        src="https://speakia.ai/wp-content/uploads/2025/11/cropped-SPEAK-AI-Proposta-de-Marca-e1763141139366.png" 
        alt="SPEAK IA" 
        className="h-7 mx-auto opacity-80 mb-6"
      />
      <p className="text-white text-[9px] font-black italic uppercase tracking-[0.2em]">
        © 2025 SPEAK IA. TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
};

// --- App ---
const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-brand-offwhite font-sans overflow-x-hidden">
      <div className="aurora-container">
        <div className="aurora-bg animate-aurora"></div>
      </div>
      <div className="grain"></div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <ProblemsSection />
        <ShowcaseCarousel /> 
        <SkillsSection />
        <BonusSection />
        <PricingSection />
        <AmbassadorSection />
        <AuthorSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
