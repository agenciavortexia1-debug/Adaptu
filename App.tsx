
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import Problem from './components/Problem.tsx';
import Method from './components/Method.tsx';
import Value from './components/Value.tsx';
import Benefits from './components/Benefits.tsx';
import DiagnosisTool from './components/DiagnosisTool.tsx';
import Footer from './components/Footer.tsx';
import Modal from './components/Modal.tsx';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <Header onOpenDiagnosis={openModal} />
      <main>
        <Hero />
        <Problem />
        <Method />
        <Value />
        <Benefits />
        <DiagnosisTool />
      </main>
      <Footer />

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <DiagnosisTool isModal={true} />
      </Modal>
    </div>
  );
};

export default App;
