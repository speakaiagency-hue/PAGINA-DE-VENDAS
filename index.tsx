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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[500] transition-all duration-300 overflow-x-hidden ${
          scrolled
            ? 'bg-black/95 backdrop-blur-2xl py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer z-[10001]"
            onClick={() => {
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-scaled-e1769270181764.png"
              alt="SPEAK IA"
              className="h-6 md:h-7 w-auto max-w-full"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white/50 hover:text-white transition-colors text-[9px] font-black italic uppercase tracking-[0.2em]"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('planos')}
              className="bg-brand-purple/20 border border-brand-purple/50 text-white hover:bg-brand-purple/40 hover:border-brand-purple px-4 py-1.5 text-[9px] font-black italic uppercase tracking-[0.2em] rounded-sm transition-all shadow-[0_0_15px_rgba(88,38,254,0.1)] hover:scale-105"
            >
              PLANOS
            </button>
          </nav>

          {/* Desktop Access Button */}
          <div className="hidden lg:block z-[501]">
            <a
              href="https://app.speakia.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-purple hover:bg-brand-blue text-white px-5 py-2.5 text-[9px] font-black italic uppercase tracking-wider transition-all hover:scale-105 rounded-sm shadow-lg"
            >
              ACESSAR PLATAFORMA
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative z-[10001] p-2 flex flex-col items-center justify-center gap-1.5 w-10 h-10"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[4px]' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[10px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </header>

      {/* Popup Menu Mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center">
          <div className="flex flex-col gap-10 text-center px-6 w-full max-w-xs">
            {['INÍCIO', 'SOBRE', 'CONTEÚDO', 'FAQ'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="text-white/80 hover:text-white text-3xl font-black italic uppercase tracking-[0.2em] transition-colors"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo('planos')}
              className="text-brand-purple text-2xl font-black italic uppercase tracking-[0.2em] transition-colors"
            >
              PLANOS
            </button>
            <div className="pt-6">
              <a
                href="https://app.speakia.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-brand-purple text-white px-8 py-5 text-sm font-black italic uppercase tracking-[0.1em] rounded-sm shadow-2xl active:scale-95 transition-transform"
              >
                ACESSAR PLATAFORMA
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// --- Hero ---
const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const targetId = id === "planos" ? "oferta" : id;
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    } else if (id === "início") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="início"
      className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-x-hidden px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 space-y-6 text-left">
          <div className="inline-block py-1.5 px-4 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-sm">
            <span className="text-brand-cyan font-black text-[9px] tracking-[0.3em] uppercase italic">
              Speak AI
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black italic tracking-tighter leading-[1] text-white uppercase">
              CHEGA DE CONTEÚDOS AMADORES
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-black italic tracking-tighter leading-[1] text-brand-purple uppercase">
              NA SUA REDE SOCIAL E CRIATIVOS!
            </h1>
          </div>
          <p className="text-xs md:text-sm text-zinc-400 font-bold max-w-sm leading-snug uppercase">
            COM A SPEAK AI VOCÊ VENDE E ENGAJA MAIS COM CONTEUDOS PROFISSIONAIS
          </p>

          <div className="pt-4">
            <button
              onClick={() => scrollTo("planos")}
              className="group relative inline-flex items-center justify-center"
            >
              <div className="absolute -inset-1 bg-brand-purple rounded-sm blur-md opacity-20 group-hover:opacity-100 transition duration-700"></div>
              <span className="relative inline-flex bg-brand-purple hover:bg-brand-blue text-white px-7 py-3.5 text-sm font-black italic uppercase tracking-tighter transition-all hover:scale-105 shadow-lg">
                COMECE AGORA!
              </span>
            </button>
          </div>
        </div>

        <div className="relative group w-full">
          <div className="absolute -inset-8 bg-brand-purple/5 blur-[100px] rounded-full opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-white/5 shadow-xl bg-zinc-950">
            <video
              className="w-full h-full object-cover"
              src="https://imagem.speakia.ai/wp-content/uploads/2026/01/video-tela-pagina-de-vendas.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
            <div className="absolute bottom-6 right-6 w-20 h-20 animate-float pointer-events-none">
              <img
                src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-1-scaled.png"
                alt="Selo"
                className="w-full h-full object-contain drop-shadow-lg"
                referrerPolicy="no-referrer"
              />
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
    { img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/produtos.jpg", video: "https://imagem.speakia.ai/wp-content/uploads/2026/01/produtos.mp4", label: "PRODUTOS" },
    { img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/servicos.jpg", video: "https://imagem.speakia.ai/wp-content/uploads/2026/01/servicos.mp4", label: "SERVIÇOS" },
    { img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/influencer.jpg", video: "https://imagem.speakia.ai/wp-content/uploads/2026/01/influencer.mp4", label: "INFLUENCER" },
    { img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/empresarios.jpg", video: "https://imagem.speakia.ai/wp-content/uploads/2026/01/empresarios.mp4", label: "EMPRESÁRIOS" },
    { img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/sem-aparecer.jpg", video: "https://imagem.speakia.ai/wp-content/uploads/2026/01/sem-aparecer.mp4", label: "PARA QUEM QUER VENDER SEM APARECER!" }
  ];

  return (
    <section className="py-24 px-6 overflow-x-hidden relative">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter">
          PARA QUEM É A SPEAK AI!
        </h2>
        <p className="text-[10px] text-zinc-500 font-black italic uppercase tracking-widest">
          APARECER EXEMPLOS QUANDO PASSAR O MOUSE ENCIMA DE CADA QUADRANTE!
        </p>
      </div>

      <div className="max-w-5xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {problems.map((p, i) => (
          <div
            key={i}
            className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 group bg-zinc-900"
          >
            <img
              src={p.img}
              alt={p.label}
              className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              referrerPolicy="no-referrer"
            />
            <video
              src={p.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <div className="text-center text-[9px] md:text-[10px] font-black italic uppercase text-white leading-tight">
                {p.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// --- WhyNotSellSection ---
const WhyNotSellSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-zinc-950/50 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black italic text-white uppercase tracking-tighter leading-tight">
            Sabe porque vc não vende? <br />
            <span className="text-brand-purple">Porque o seu video ainda é muito amador</span>
          </h2>
          <p className="text-zinc-400 text-sm font-bold italic uppercase tracking-wider">
            A SPEAK AI VEIO PARA RESOLVER ISSO!
          </p>
        </div>
        <div className="relative rounded-[2rem] overflow-hidden aspect-video border border-brand-purple/30 shadow-[0_0_50px_rgba(88,38,254,0.1)] bg-zinc-900">
          <div className="absolute inset-0 flex items-center justify-center text-center p-8">
             <p className="text-white font-black italic uppercase text-sm tracking-widest">
                VIDEO SIMULANDO O USO DA FERRAMENTA! <br /> E LIKES E VENDAS SENDO REALIZADAS!
             </p>
          </div>
          {/* Placeholder for the actual simulation video */}
          <video
            className="w-full h-full object-cover opacity-40"
            src="https://imagem.speakia.ai/wp-content/uploads/2026/01/video-tela-pagina-de-vendas.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

// --- ShowcaseCarousel ---
const ShowcaseCarousel: React.FC = () => {
  const items = [
    { t: "VIDEOS PROFISSIONAIS COM ALTO PODER DE ENGAJAMENTO E OU VENDA!", desc: "Criar uma influencer do zero pra vender pra você" },
    { t: "CREDIBILIDADE PARA SEU INSTAGRAM!", desc: "Adicionar seu produto diretamente na influencer" },
    { t: "COM POUCOS CLIQUES VOCÊ CRIA SEUS NOVOS CONTEUDOS!", desc: "Trocar roupas, cenários, cores, influencer, produtos" },
    { t: "IMAGENS PROFISSIONAIS COM ALTO PODER DE ENGAJAMENTO E OU VENDA!", desc: "Fazer seu próprio Avatar para criar conteúdo pra você" },
    { t: "CONSEGUINDO VENDER E ENGAJAR SEM APARECER!", desc: "Vender até mesmo sem aparecer" },
    { t: "FALE SOBRE ALGUM TEMA/ASSUNTO COM FACILIDADE COM A SPEAK.AI", desc: "Uma influencer ultra realista" }
  ];

  return (
    <section id="conteúdo" className="py-24 bg-black px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          O QUE VAMOS RESOLVER PARA <br /> VOCÊ!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <div key={i} className="group bg-zinc-900/40 border border-white/5 p-6 rounded-3xl hover:border-brand-purple/50 transition-all space-y-4">
              <div className="aspect-video rounded-xl overflow-hidden bg-zinc-950">
                <div className="w-full h-full flex items-center justify-center text-[10px] text-zinc-700 font-black italic uppercase tracking-widest text-center p-4">
                   {it.desc}
                </div>
              </div>
              <h3 className="text-xs md:text-sm font-black italic uppercase text-white leading-tight">
                {it.t}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- TestimonialsSection ---
const TestimonialsSection: React.FC = () => {
  const testimonials = [
    "VIDEO DA BELLA USANDO PARA MARCA LE QUO",
    "DONO DA NEW FOUR FALANDO",
    "DONO DE LOJA ONLINE DE ROUPA FALANDO",
    "DONO DE RESTAURANTE FALANDO",
    "INFLUENCER FALANDO QUE USA E FACILITOU A VIDA",
    "ADVOGADO FALANDO SOBRE ALGUMA NOVA MUDANÇA NA LEI E NAO GOSRTAVA DE APARECER",
    "DENTISTA QUE PRECISA DIVULGAR SERVIÇO E NÃO TEM TEMPO PARA GRAVAR",
    "AFILIADO DE PRODUTOS DIGITAIS E FISICOS USANDO A SPEAK.AI PARA VENDER"
  ];

  return (
    <section className="py-24 px-6 bg-zinc-950 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          VEJA O QUE OS CLIENTES DA SPEAK-AI <br /> FALAM SOBRE O NOSSO PRODUTO!
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="aspect-[3/4] bg-zinc-900 border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center text-center group hover:border-brand-purple/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-brand-purple/20 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-purple" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <p className="text-[9px] md:text-[10px] font-black italic uppercase text-zinc-400 group-hover:text-white transition-colors leading-tight">
                {t}
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
  { id: "01", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-585x1024-1.png", t: "AULA 1: APRENDA COMO USAR A FERRAMENTA" },
  { id: "02", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-1-585x1024-1.png", t: "AULA 2: O PODER DA SPEAK.AI NO SEU NEGOCIO/INSTAGRAM" },
  { id: "03", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-3.png", t: "AULA 3: APRENDA A CRIAR IMAGENS" },
  { id: "04", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-6.png", t: "AULA 4: APRENDA A CRIAR AUDIO E MOVIMENTO" },
  { id: "05", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/imagem-0-9.png", t: "AULA 5: CRIE VIDEOS REALISTAS PARA SEU NEGOCIO/INSTAGRAM" }
  ];
  return (
    <section id="sobre" className="py-24 px-6 border-t border-white/5 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-2">
            <span className="text-brand-purple text-[9px] font-black uppercase tracking-[0.4em] italic">METODOLOGIA DA</span>
            <h2 className="text-4xl md:text-5xl font-black italic text-white tracking-tighter">SPEAK.IA</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
           {skills.map((s, i) => (
             <div key={i} className="space-y-4 group">
                <div className={`aspect-[4/5] rounded-2xl overflow-hidden border-2 transition-all duration-500 ${i === 1 ? 'border-brand-cyan shadow-xl shadow-brand-cyan/10' : 'border-white/5 grayscale group-hover:grayscale-0'}`}>
                   <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                </div>
                <div className="text-center space-y-1">
                  <span className={`text-2xl font-black italic ${i === 1 ? 'text-brand-cyan' : 'text-zinc-800'}`}>{s.id}</span>
                  <p className="text-[8px] font-black italic text-zinc-500 uppercase tracking-tighter leading-none">{s.label}</p>
                  <p className="text-[9px] font-black italic text-white uppercase leading-tight">{s.t}</p>
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
    { t: "GERADOR DE PROMPT GRATUITO (PRA QUEM NÃO SABE CRIAR)", p: "R$ 1.997", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/prompt-768x439-1.png" },
    { t: "CANAL EXCLUSIVO COM DICAS DE USO", p: "R$ 997", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/CANAL-EXCLUSIVO-1024x585-1.png" },
    { t: "MINI CURSO GRATUITO", p: "R$ 297", img: "https://imagem.speakia.ai/wp-content/uploads/2026/01/Captura-de-tela-2026-01-21-194141.png" }
  ];
  return (
    <section className="py-24 px-6 bg-zinc-950/20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          BÔNUS EXCLUSIVOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonus.map((b, i) => (
            <div
              key={i}
              className="bg-zinc-900/10 border border-white/5 rounded-3xl overflow-hidden group hover:border-brand-purple/30 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                <img src={b.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 space-y-6">
                <h3 className="text-lg md:text-xl font-black italic text-white uppercase tracking-tighter">
                  {b.t}
                </h3>
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <span className="text-xl md:text-2xl text-zinc-500 line-through italic font-black">
                    {b.p}
                  </span>
                  <span className="text-brand-cyan font-black italic text-2xl md:text-3xl animate-pulse">
                    GRATUITO!
                  </span>
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
      link: "https://pay.kiwify.com.br/8IDayIy",
      features: [
        { t: "Chat IA ilimitado", icon: "💬" },
        { t: "Gerador de Prompt", icon: "⚡" },
        { t: "71 Geração de imagem", icon: "🖼️" },
        { t: "12 Gerações de vídeo", icon: "🎥" },
        { t: "Email", icon: "📧" },
      ],
    },
    {
      title: "Pro",
      subtitle: "Para profissionais - 1.500 créditos",
      price: "197,00",
      link: "https://pay.kiwify.com.br/QnHmsQm",
      isFeatured: true,
      features: [
        { t: "Chat IA ilimitado", icon: "💬" },
        { t: "Gerador de Prompt", icon: "⚡" },
        { t: "214 Geração de imagem", icon: "🖼️" },
        { t: "37 Gerações de vídeo", icon: "🎥" },
        { t: "Email", icon: "📧" },
      ],
    },
    {
      title: "Premium",
      subtitle: "Para agências e empresas - 5.000 créditos",
      price: "697,00",
      link: "https://pay.kiwify.com.br/hOJ3bEi",
      features: [
        { t: "Chat IA ilimitado", icon: "💬" },
        { t: "Gerador de Prompt", icon: "⚡" },
        { t: "714 Geração de imagem", icon: "🖼️" },
        { t: "125 Gerações de vídeo", icon: "🎥" },
        { t: "Email", icon: "📧" },
        { t: "Comunidade para troca de ideias", icon: "🤝" },
      ],
    },
  ];

  return (
    <section id="oferta" className="py-24 md:py-32 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-4xl md:text-5xl font-black italic text-center text-white uppercase tracking-tighter">
          ESCOLHA A MELHOR OPÇÃO PARA <br /> SEU NEGOCIO / INSTAGRAM
        </h2>
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
                    <li key={idx} className="flex flex-col gap-1 group">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">{feature.icon}</span>
                        <span className="text-sm text-zinc-300 font-medium group-hover:text-white transition-colors italic">
                          {feature.t}
                        </span>
                      </div>
                      {feature.t.includes("imagem") && (
                        <div className="flex flex-wrap gap-1 ml-8 mt-1 opacity-40">
                          {[...Array(12)].map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-brand-purple rounded-[1px]"></div>
                          ))}
                        </div>
                      )}
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
            src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Beige-Grey-Neutral-Minimal-Paper-Daily-Motivation-Quote-Your-Story-Video-para-Facebook.png" 
            alt="Embaixador Virtual" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
             EMBAIXADORA <span className="text-brand-cyan">SPEAK AI</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
              BELLA FALCONI 
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
          Pioneira nas redes sociais e influenciadora digital há mais de 12 anos, Bella é empresária, palestrante, mestre em nutrição, pós graduada em Teologia e autora de 4 livros. É também referência no mundo digital e foi eleita pela Forbes como uma das principais influenciadoras do Brasil na lista "Forbes Under 30".
Muito além da influência, Bella é empresária consolidada, com forte atuação na construção de marcas, posicionamento premium e comunidades altamente engajadas, sempre conectando performance, estética, disciplina e visão estratégica.
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
            alt="co-founder Lucas" 
            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Texto à direita */}
        <div className="w-full max-w-lg space-y-6 mx-auto">
          <div className="space-y-3">
            <span className="text-brand-purple text-xs font-black uppercase tracking-[0.3em] italic">
            FUNDADOR DA <span className="text-brand-cyan">SPEAK AI</span>
            </span>
            <h2 className="text-2xl md:text-3xl font-black italic tracking-tight text-white uppercase">
            LUCAS ZANARDO
            </h2>
          </div>

          <div className="space-y-4 text-justify">
            <p className="text-zinc-400 text-sm md:text-base font-bold italic leading-snug">
    Empresário, investidor e estrategista em Inteligência Artificial, Lucas Zanardo iniciou sua trajetória empreendedora ainda aos 16 anos de idade. Hoje, aos 32 anos, soma mais de 15 anos de experiência liderando equipes e grandes organizações.
Ao longo da carreira, tornou-se referência em estruturação de times comerciais e desenvolvimento de líderes, acumulando mais de R$ 800 milhões em vendas geradas por equipes que ele próprio formou, treinou e liderou.
            </p>
            <p className="text-zinc-500 text-xs md:text-sm font-medium leading-relaxed italic border-l-2 border-brand-purple pl-4">
              A Speak AI nasce da sua convicção de que a Inteligência Artificial é a maior alavanca da nova economia, capaz de transformar negócios e oferecer liberdade a empreendedores e criadores.
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
    { q: "4. QUAL É A DIFERENÇA DOS PLANOS E DO ACADEMY?", a: "A Speak AI Academy é um sistema de treinamentos criados para você começar do absoluto zero. Pra você que não entende muito bem de internet e inteligência artificial, dessa forma você vai aprender tudo bem detalhado e explicadinho, sem dificuldade. Vai poder criar de forma rápida e simples influenciadores realistas e conteúdos profissionais com os nossos prompts personalizados e nossa ajuda no Suporte individual.  Já a nossa ferramenta Speak AI é onde de fato você vai aplicar todo esse conhecimento. É uma ferramenta que foi desenvolvida por para ser muito mais fácil e acessível do que qualquer outra. Nela o pagamento é feito mensalmente, com valores a partir de 97 reais, onde você pode cancelar a qualquer momento." },
    { q: "5. E QUAL É A DIFERENÇA DA FERRAMENTA SPEAK AI PARA O CHAT GPT, GEMINI, E TODAS AS OUTRAS DO MERCADO?", a: "É simples, a principal diferença está na facilidade no uso da ferramenta. Ela foi criada para pessoas que não sabem nada de internet e inteligência artificial. Você não precisa entender de prompts de comando, nós criamos um gerador de prompt pra você! Além do fato dela ser muito mais acessível que todas essas plataformas." },
    { q: "6. PRECISO APARECER NOS VÍDEOS?", a: "Não. Você pode criar influenciadores e vídeos totalmente sem rosto usando IA." },
    { q: "7. POSSO USAR OS AVATARES PARA REPRESENTAR MINHA MARCA?", a: "Sim. Você pode criar influenciadores digitais personalizados para sua marca ou empresa." },
    { q: "8. COMO FUNCIONA PARA QUEM VENDE PRODUTOS?", a: "A plataforma ajuda você a criar conteúdos que vendem: vídeos, influenciadores digitais apresentando produtos, roteiros de anúncios e campanhas completas." },
    { q: "9. A SPEAK AI FUNCIONA NO CELULAR?", a: "Sim. Funciona no celular, computador ou tablet — basta ter acesso à internet." },
    { q: "10. MEUS DADOS ESTÃO SEGUROS?", a: "Sim. Utilizamos criptografia, servidores seguros e políticas rígidas de privacidade. Nada do que você cria é compartilhado com terceiros." },
    { q: "11. A SPEAK AI OFERECE SUPORTE?", a: "Sim! Você terá acesso a suporte humano, materiais educativos e comunidade exclusiva." },
    { q: "12. EU SOU DONO DOS AVATARES, VÍDEOS OU QUALQUER MATERIAL QUE EU CRIO?", a: "Sim. Todo conteúdo que você cria pertence 100% a você e pode ser usado comercialmente." }
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
        src="https://imagem.speakia.ai/wp-content/uploads/2026/01/Design-sem-nome-scaled-e1769270181764.png" 
        alt="SPEAK IA" 
        className="h-7 mx-auto opacity-80 mb-6"
        referrerPolicy="no-referrer"
      />
      <p className="text-white text-[9px] font-black italic uppercase tracking-[0.2em]">
        © 2025 SPEAK IA. TODOS OS DIREITOS RESERVADOS.
      </p>
    </footer>
  );
};

// --- App ---
export default function App() {
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
        <WhyNotSellSection />
        <ShowcaseCarousel /> 
        <TestimonialsSection />
        <SkillsSection />
        <PricingSection />
        <BonusSection />
        <AmbassadorSection />
        <AuthorSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
