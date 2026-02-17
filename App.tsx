
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Method from './components/Method';
import Value from './components/Value';
import Benefits from './components/Benefits';
import DiagnosisTool from './components/DiagnosisTool';
import Footer from './components/Footer';
import Modal from './components/Modal';

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
