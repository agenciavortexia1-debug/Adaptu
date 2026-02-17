
import React from 'react';

const Method: React.FC = () => {
  return (
    <section id="method" className="py-20 bg-slate-900 scroll-mt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-5">Como invertemos a lógica do mercado</h2>
          <p className="text-base text-slate-400">
            Enquanto outros vendem licenças, nós entregamos soluções que respiram a sua cultura operacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-800 -z-10" />
          
          {[
            {
              step: "01",
              title: "Mapeamento Ativo",
              text: "Entendemos cada etapa do seu fluxo de trabalho. Não perguntamos o que você quer, mas analisamos o que você faz.",
              color: "bg-emerald-600"
            },
            {
              step: "02",
              title: "Desenvolvimento Adaptativo",
              text: "Criamos o sistema em torno da sua realidade. Cada funcionalidade existe para servir a um processo mapeado.",
              color: "bg-emerald-500"
            },
            {
              step: "03",
              title: "Inteligência Analítica",
              text: "Automações que identificam gargalos e economizam mão de obra antes mesmo de você perceber.",
              color: "bg-emerald-400"
            }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-5 group">
              <div className={`w-14 h-14 ${item.color} text-slate-950 rounded-lg flex items-center justify-center text-xl font-bold mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                {item.step}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Method;
