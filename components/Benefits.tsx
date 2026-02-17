
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: "Redução de custos operacionais",
      text: "Elimine redundâncias e tarefas manuais através de automação inteligente integrada.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Gargalos em tempo real",
      text: "Receba notificações push no celular assim que um ponto de lentidão for detectado.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Ecossistema Multiplataforma",
      text: "Sua equipe usa no computador e o gestor acompanha tudo via App Mobile exclusivo.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM9 3h6m-6 4h6m-6 4h6m-6 4h6" />
        </svg>
      )
    },
    {
      title: "Escalabilidade real",
      text: "Sistemas em nuvem (Web) que crescem conforme sua demanda e volume de usuários aumenta.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
        </svg>
      )
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-slate-950 scroll-mt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl font-extrabold text-white">Por que escolher o personalizado?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="p-7 rounded-md bg-slate-900 border border-slate-800 shadow-sm hover:shadow-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-11 h-11 bg-emerald-900/30 text-emerald-400 rounded-sm flex items-center justify-center mb-5">
                {benefit.icon}
              </div>
              <h4 className="text-base font-bold text-white mb-2.5">{benefit.title}</h4>
              <p className="text-slate-400 text-xs leading-relaxed">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
