
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

  // Mock abstract company logos
  const companyLogos = [
    (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" />
      </svg>
    ),
    (props: any) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12l2 2 4-4" />
      </svg>
    )
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden scroll-mt-16 bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative z-10">
            {/* Badge removed as per "remova essa campo" instruction */}
            
            <h1 className="text-4xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Seu negócio não cabe em uma caixa. <br />
              <span className="text-emerald-400">Por que sua plataforma de gestão deveria ser assim?</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              Desenvolvemos <strong>sistemas web robustos e aplicativos mobile intuitivos</strong> baseados no mapeamento real dos seus processos. 
              Sua operação na palma da mão, feita sob medida.
            </p>
            
            {/* CTA AREA REFINED */}
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <a 
                href="#diagnosis" 
                onClick={(e) => scrollToSection(e, 'diagnosis')}
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-emerald-500 text-slate-950 font-black text-lg rounded-md hover:bg-emerald-400 transition-all active:scale-[0.98] overflow-hidden"
              >
                <span className="relative z-10">Agendar Mapeamento de Processos</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-[-20deg]"></div>
              </a>
              
              <div className="flex flex-col gap-3">
                <div className="flex -space-x-2">
                  {companyLogos.map((Logo, i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-md border border-slate-800 bg-slate-900 flex items-center justify-center text-emerald-500/60 shadow-lg"
                    >
                      <Logo className="w-5 h-5" />
                    </div>
                  ))}
                </div>
                <p className="text-sm font-bold text-slate-500 tracking-tight">
                  <span className="text-emerald-400">+350</span> empresas otimizadas
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Main Desktop Frame */}
              <div className="bg-slate-900 rounded-md shadow-2xl border border-slate-800 p-2 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Adaptu" 
                  className="rounded-sm object-cover aspect-video opacity-60 group-hover:opacity-90 transition-opacity"
                />
                
                {/* Floating Card inside Desktop */}
                <div className="absolute top-1/4 -left-6 bg-slate-950/90 backdrop-blur-xl p-4 rounded-md border border-slate-800 shadow-2xl hidden md:block animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500/20 rounded-md flex items-center justify-center text-emerald-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-500 font-bold uppercase">Eficiência</p>
                      <p className="text-sm font-bold text-white">+42% ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Realistic Mobile Device */}
              <div className="absolute -bottom-12 -left-4 md:-left-12 w-44 md:w-60 transform -rotate-6 hover:rotate-0 transition-all duration-1000 group">
                <div className="relative bg-slate-900 p-[6px] rounded-[2rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.8)] ring-1 ring-slate-800">
                  <div className="relative bg-black rounded-[1.7rem] overflow-hidden aspect-[9/19.5] ring-1 ring-emerald-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=500" 
                      alt="Adaptu App Mobile" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-0 w-full px-4 text-center">
                      <div className="h-1 w-8 bg-emerald-500 mx-auto mb-2 rounded-full"></div>
                      <p className="text-[10px] text-white font-bold tracking-tighter uppercase">Painel de Campo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-12 right-0 bg-slate-900/90 backdrop-blur-md p-4 rounded-md shadow-2xl border border-emerald-500/20 hidden sm:block animate-float-delayed">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500 text-slate-950 rounded-sm flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-400 font-black uppercase tracking-[0.2em]">Live Status</p>
                    <p className="text-sm font-bold text-white">Sincronização Ativa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-15px) translateX(5px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
