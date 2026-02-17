
import React, { useState } from 'react';

interface HeaderProps {
  onOpenDiagnosis: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenDiagnosis }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'O Problema', href: '#problem' },
    { label: 'Método', href: '#method' },
    { label: 'Diferenciais', href: '#value' },
    { label: 'Benefícios', href: '#benefits' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    } else if (href === '#hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a 
          href="#hero" 
          onClick={(e) => scrollToSection(e, '#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-7 h-7 text-emerald-500 flex items-center justify-center">
             <svg viewBox="0 0 24 24" className="w-full h-full fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zM12 15.5l-4.5 2 4.5-11 4.5 11-4.5-2z"/>
             </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-white">Adaptu</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-300">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={onOpenDiagnosis}
            className="px-5 py-1.5 bg-emerald-500 text-slate-950 rounded-md hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 font-bold"
          >
            Diagnóstico Gratuito
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none overflow-hidden'}`}>
        <nav className="flex flex-col p-4 gap-3 text-slate-300 text-sm font-medium">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => scrollToSection(e, item.href)}
              className="py-2 px-4 hover:bg-slate-800 rounded-sm transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => {
              onOpenDiagnosis();
              setIsMenuOpen(false);
            }}
            className="w-full py-2.5 bg-emerald-500 text-slate-950 rounded-md font-bold text-center"
          >
            Diagnóstico Gratuito
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
