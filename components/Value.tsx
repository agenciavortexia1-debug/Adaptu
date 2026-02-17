
import React from 'react';
import DashboardPreview from './DashboardPreview';

const Value: React.FC = () => {
  return (
    <section id="value" className="py-24 bg-slate-950 scroll-mt-16 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <DashboardPreview />
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-900 p-4 rounded-md border border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">ROI Médio</p>
                <p className="text-2xl font-bold text-white">3.5x</p>
                <p className="text-xs text-emerald-400 font-medium">No 1º ano</p>
              </div>
              <div className="bg-slate-900 p-4 rounded-md border border-slate-800">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Horas Salvas</p>
                <p className="text-2xl font-bold text-white">+450h</p>
                <p className="text-xs text-emerald-400 font-medium">Por trimestre</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-4">Diferencial Adaptu</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-white mb-6 leading-tight">
              Muito além de um ERP. <br />Uma central de decisões.
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Como analista e desenvolvedor, entrego sistemas que pensam. Identificamos automaticamente onde você está perdendo dinheiro e onde pode otimizar sua equipe.
            </p>
            <ul className="space-y-4">
              {[
                "Acesso direto: sem tickets de suporte infinitos",
                "Interface limpa: apenas o que você realmente usa",
                "Adaptação contínua: o sistema evolui com seu negócio",
                "Inteligência real: dados que viram decisões"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-sm bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-300 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Comparison Table Section */}
        <div className="bg-slate-900 rounded-lg border border-slate-800 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-8 lg:p-12">
              <h4 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                Sistemas Tradicionais
              </h4>
              <ul className="space-y-6">
                {[
                  "Processos burocráticos e lentos",
                  "Tickets de suporte que levam dias",
                  "Funcionalidades inúteis que poluem a tela",
                  "Sua empresa se adapta ao software",
                  "Treinamentos longos e complexos"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-500">
                    <svg className="w-5 h-5 text-slate-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-8 lg:p-12 bg-emerald-500/[0.02]">
              <h4 className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Consultoria Adaptu
              </h4>
              <ul className="space-y-6">
                {[
                  "Fluxos ágeis e 100% intuitivos",
                  "Acesso direto ao desenvolvedor",
                  "Interface focada 100% na sua produtividade",
                  "O software se molda ao seu negócio",
                  "Curva de aprendizado zero"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-200">
                    <svg className="w-5 h-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-bold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
