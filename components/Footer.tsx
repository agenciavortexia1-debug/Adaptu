
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 text-emerald-500 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zM12 15.5l-4.5 2 4.5-11 4.5 11-4.5-2z"/>
              </svg>
            </div>
            <span className="font-bold text-lg tracking-tight text-white">Adaptu</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Adaptu Consultoria. Focado em ROI.
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-900 text-center">
          <p className="text-slate-600 text-xs italic">
            Pronto para ter um sistema que trabalha para você? O próximo passo é o mapeamento.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
