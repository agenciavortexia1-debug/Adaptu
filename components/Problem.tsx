
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-slate-950 text-white overflow-hidden relative scroll-mt-16">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
          alt="Crescimento Empresarial" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-slate-950/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm mb-4">A Realidade do Mercado</h2>
          <h3 className="text-3xl lg:text-5xl font-bold mb-8">O custo invisível de um sistema genérico.</h3>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Planilhas paralelas, retrabalho e dados espalhados. Quando sua equipe precisa se adaptar ao software, você perde tempo e dinheiro. 
            <span className="text-emerald-400 font-medium"> Nós eliminamos essa fricção.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Retrabalho Constante",
              desc: "Inserção manual de dados que já existem em outros lugares, gerando erros e cansaço.",
              icon: "🔄"
            },
            {
              title: "Dados Silados",
              desc: "Informações presas em planilhas que não conversam entre si, impedindo uma visão clara.",
              icon: "📁"
            },
            {
              title: "Burocracia Lenta",
              desc: "Sistemas engessados que exigem 10 cliques para uma tarefa simples. Burocracia que trava o time.",
              icon: "🚧"
            },
            {
              title: "Falta de Insight",
              desc: "Sistemas que guardam dados, mas não geram inteligência. Você decide no escuro.",
              icon: "📉"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-md border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">{item.icon}</div>
              <h4 className="text-lg font-bold mb-3 text-white">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
