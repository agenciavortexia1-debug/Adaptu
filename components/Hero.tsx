
import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-16 bg-slate-950">
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-900/30 text-emerald-400 text-xs font-semibold mb-6 uppercase tracking-wider border border-emerald-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Sistemas Web e Apps Mobile
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Seu negócio não cabe em uma caixa. <br />
              <span className="text-emerald-400">Por que sua plataforma de gestão deveria ser assim?</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Desenvolvemos <strong>sistemas web robustos e aplicativos mobile intuitivos</strong> baseados no mapeamento real dos seus processos. 
              Sua operação na palma da mão ou no desktop, feita sob medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a 
                href="#diagnosis" 
                onClick={(e) => scrollToSection(e, 'diagnosis')}
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-md hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
              >
                Agendar Mapeamento de Processos
              </a>
              <div className="flex items-center gap-4 px-6 text-slate-500">
                <div className="flex -space-x-2">
                  <img className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Client 1" />
                  <img className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/150?u=a04258114e29026702d" alt="Client 2" />
                  <img className="w-8 h-8 rounded-full border-2 border-slate-950" src="https://i.pravatar.cc/150?u=a04258114e29026708c" alt="Client 3" />
                </div>
                <span className="text-sm font-medium text-slate-400"><span className="text-emerald-400 font-bold">+350</span> empresas otimizadas</span>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Desktop Dashboard Frame - Modern Slate Theme */}
              <div className="bg-slate-900 rounded-md shadow-2xl border border-slate-800 p-2 transform rotate-1 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                  alt="Dashboard de Gestão Web" 
                  className="rounded-sm object-cover aspect-video opacity-80"
                />
              </div>
              
              {/* Mobile Device Mockup */}
              <div className="absolute -bottom-10 -right-4 md:-right-8 w-40 md:w-56 transform -rotate-3 hover:rotate-0 transition-all duration-700 group">
                <div className="relative bg-slate-950 p-[7px] rounded-[1.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.3)] ring-1 ring-slate-800">
                  <div className="relative bg-black rounded-[1.2rem] overflow-hidden aspect-[9/19.5] ring-1 ring-emerald-500/20 shadow-inner">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=400" 
                      alt="Interface App Mobile" 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent to-emerald-500/10 pointer-events-none"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-10 -left-10 bg-slate-900/95 backdrop-blur-md p-5 rounded-md shadow-2xl border border-slate-800 hidden sm:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 text-slate-950 rounded-sm flex items-center justify-center shadow-lg shadow-emerald-500/30">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest mb-0.5">Adaptabilidade</p>
                    <p className="text-base font-extrabold text-white">Sincronização Real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
