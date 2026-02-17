
import React from 'react';

const Problem: React.FC = () => {
  const problems = [
    {
      title: "Retrabalho Constante",
      desc: "Inserção manual de dados que já existem em outros lugares, gerando erros e cansaço.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    {
      title: "Dados Soltos",
      desc: "Informações presas em planilhas que não conversam entre si, impedindo uma visão clara.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: "Burocracia Lenta",
      desc: "Sistemas engessados que exigem 10 cliques para uma tarefa simples. Burocracia que trava o time.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Falta de Insight",
      desc: "Sistemas que guardam dados, mas não geram inteligência. Você decide no escuro.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="problem" className="py-20 bg-slate-950 text-white overflow-hidden relative scroll-mt-16">
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2070" 
          alt="Crescimento Empresarial" 
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-slate-950/90"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-xs mb-3">A Realidade do Mercado</h2>
          <h3 className="text-2xl lg:text-4xl font-bold mb-6">O custo invisível de um sistema genérico.</h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Planilhas paralelas, retrabalho e dados espalhados. Quando sua equipe precisa se adaptar ao software, você perde tempo e dinheiro. 
            <span className="text-emerald-400 font-medium"> Nós eliminamos essa fricção.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {problems.map((item, idx) => (
            <div key={idx} className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-md border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 bg-slate-950/50 rounded-lg flex items-center justify-center mb-5 text-emerald-500/80 group-hover:text-emerald-400 transition-colors border border-slate-800 group-hover:border-emerald-500/30">
                {item.icon}
              </div>
              <h4 className="text-base font-bold mb-2.5 text-white">{item.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
