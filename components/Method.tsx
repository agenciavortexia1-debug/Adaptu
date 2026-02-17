
import React from 'react';

const Method: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Mapeamento Ativo",
      text: "Entendemos cada etapa do seu fluxo de trabalho. Não perguntamos o que você quer, mas analisamos o que você faz.",
      color: "bg-emerald-600",
      glow: "shadow-emerald-600/20"
    },
    {
      step: "02",
      title: "Desenvolvimento Adaptativo",
      text: "Criamos o sistema em torno da sua realidade. Cada funcionalidade existe para servir a um processo mapeado.",
      color: "bg-emerald-500",
      glow: "shadow-emerald-500/20"
    },
    {
      step: "03",
      title: "Inteligência Analítica",
      text: "Automações que identificam gargalos e economizam mão de obra antes mesmo de você perceber.",
      color: "bg-emerald-400",
      glow: "shadow-emerald-400/20"
    }
  ];

  return (
    <section id="method" className="py-20 bg-slate-950 scroll-mt-16 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-5">Como invertemos a lógica do mercado</h2>
          <p className="text-base text-slate-400">
            Enquanto outros vendem licenças, nós entregamos soluções que respiram a sua cultura operacional através de uma jornada clara.
          </p>
        </div>

        <div className="relative">
          {/* Horizontal Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
            {/* Vertical Line (Mobile) */}
            <div className="lg:hidden absolute left-7 top-0 w-0.5 h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />

            {steps.map((item, idx) => (
              <div key={idx} className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group">
                {/* Node / Marker */}
                <div className="flex-shrink-0 z-10">
                  <div className={`w-14 h-14 ${item.color} ${item.glow} text-white rounded-2xl flex items-center justify-center text-xl font-black shadow-xl ring-4 ring-slate-950 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div className="ml-6 lg:ml-0 lg:mt-8">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-emerald-500/40 mb-4 lg:mx-auto rounded-full group-hover:w-20 transition-all duration-500"></div>
                  <p className="text-sm text-slate-400 leading-relaxed max-w-sm lg:max-w-xs">
                    {item.text}
                  </p>
                </div>

                {/* Arrow Decor (Desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 -right-4 translate-x-1/2 text-emerald-500/20">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
