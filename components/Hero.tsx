
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
    <section id="hero" className="relative pt-24 pb-16 lg:pt-40 lg:pb-28 overflow-hidden scroll-mt-16 bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent opacity-40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative z-10">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Seu negócio não cabe em uma caixa. <br />
              <span className="text-emerald-400">Por que sua plataforma de gestão deveria ser assim?</span>
            </h1>
            
            <p className="text-base lg:text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
              Desenvolvemos <strong>sistemas web robustos e aplicativos mobile intuitivos</strong> baseados no mapeamento real dos seus processos. 
              Sua operação na palma da mão, feita sob medida.
            </p>
            
            {/* CTA AREA - Botão removido conforme solicitado */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {companyLogos.map((Logo, i) => (
                    <div 
                      key={i}
                      className="w-9 h-9 rounded-md border border-slate-800 bg-slate-900 flex items-center justify-center text-emerald-500/60 shadow-lg"
                    >
                      <Logo className="w-4 h-4" />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs font-bold text-slate-400 tracking-tight">
                    <span className="text-emerald-400">+350</span> empresas otimizadas
                  </p>
                  <p className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">Resultados Reais</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Main Desktop Frame */}
              <div className="bg-slate-900 rounded-md shadow-2xl border border-slate-800 p-2 transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Adaptu" 
                  className="rounded-sm object-cover aspect-video opacity-60 group-hover:opacity-90 transition-opacity"
                />
                
                {/* Floating Card inside Desktop */}
                <div className="absolute top-1/4 -left-4 bg-slate-950/90 backdrop-blur-xl p-3 rounded-md border border-slate-800 shadow-2xl hidden md:block animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-md flex items-center justify-center text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[8px] text-slate-500 font-bold uppercase">Eficiência</p>
                      <p className="text-xs font-bold text-white">+42% ROI</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Realistic Mobile Device */}
              <div className="absolute -bottom-8 -left-2 md:-left-10 w-36 md:w-52 transform -rotate-6 hover:rotate-0 transition-all duration-1000 group">
                <div className="relative bg-slate-900 p-[5px] rounded-[1.8rem] shadow-[0_30px_60px_-10px_rgba(0,0,0,0.8)] ring-1 ring-slate-800">
                  <div className="relative bg-black rounded-[1.5rem] overflow-hidden aspect-[9/19.5] ring-1 ring-emerald-500/30">
                    <img 
                      src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=500" 
                      alt="Adaptu App Mobile" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-0 w-full px-3 text-center">
                      <div className="h-0.5 w-6 bg-emerald-500 mx-auto mb-1.5 rounded-full"></div>
                      <p className="text-[8px] text-white font-bold tracking-tighter uppercase">Painel de Campo</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-10 right-0 bg-slate-900/90 backdrop-blur-md p-3 rounded-md shadow-2xl border border-emerald-500/20 hidden sm:block animate-float-delayed">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-emerald-500 text-slate-950 rounded-sm flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[8px] text-emerald-400 font-black uppercase tracking-[0.2em]">Live Status</p>
                    <p className="text-xs font-bold text-white">Sincronização Ativa</p>
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
          50% { transform: translateY(-12px) translateX(4px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
