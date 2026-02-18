
import React, { useState } from 'react';

interface DiagnosisToolProps {
  isModal?: boolean;
}

const DiagnosisTool: React.FC<DiagnosisToolProps> = ({ isModal = false }) => {
  const [loading, setLoading] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [segment, setSegment] = useState('');
  const [revenue, setRevenue] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/^(\d{2})(\d)/g, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substring(0, 15);
    }
    return value.substring(0, 15);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim() || !segment.trim() || !revenue || !description.trim() || !phone.trim()) {
      setError("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://2n8n-n8n.oggciy.easypanel.host/webhook/683f7819-556f-4f58-8a43-6b7ad93253a8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessName,
          segment,
          revenue,
          description,
          phone,
          timestamp: new Date().toISOString(),
          source: isModal ? 'modal' : 'landing_page'
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('Falha ao enviar os dados.');
      }
    } catch (err) {
      console.error(err);
      setError("Houve um erro ao enviar sua solicitação. Por favor, tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    if (submitted) {
      return (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 text-center py-8">
          <div className="w-14 h-14 bg-emerald-900/30 text-emerald-400 rounded-md flex items-center justify-center mx-auto mb-5 border border-emerald-500/30">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Solicitação Enviada!</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-xs mx-auto">
            Recebemos seus dados. Um de nossos analistas entrará em contato em breve para agendar seu diagnóstico.
          </p>
          <button 
            onClick={() => {
              setSubmitted(false);
              setBusinessName('');
              setSegment('');
              setRevenue('');
              setDescription('');
              setPhone('');
            }} 
            className="text-xs font-medium text-emerald-400 hover:text-emerald-300"
          >
            Enviar outra solicitação
          </button>
        </div>
      );
    }

    const inputClasses = "w-full px-4 py-2.5 rounded-md border border-slate-800 bg-slate-900 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none text-white text-sm placeholder:text-slate-500";
    const labelClasses = "block text-xs font-semibold text-slate-400 mb-2";

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left">
            <label className={labelClasses}>
              Nome do Negócio
            </label>
            <input 
              type="text"
              className={inputClasses}
              placeholder="Ex: Minha Empresa LTDA"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>

          <div className="text-left">
            <label className={labelClasses}>
              Segmento do Negócio
            </label>
            <input 
              type="text"
              className={inputClasses}
              placeholder="Ex: Varejo, Logística, Serviços..."
              value={segment}
              onChange={(e) => setSegment(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-left">
            <label className={labelClasses}>
              Faturamento Médio Mensal
            </label>
            <select 
              className={inputClasses}
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              required
            >
              <option value="" disabled className="bg-slate-900">Selecione uma opção</option>
              <option value="-5k" className="bg-slate-900">Menos de R$ 5k</option>
              <option value="5k-10k" className="bg-slate-900">Entre R$ 5k e 10k</option>
              <option value="10k-20k" className="bg-slate-900">Entre R$ 10k e 20k</option>
              <option value="20k-50k" className="bg-slate-900">Entre R$ 20k e 50k</option>
              <option value="50k-100k+" className="bg-slate-900">Entre R$ 50k e 100k+</option>
            </select>
          </div>

          <div className="text-left">
            <label className={labelClasses}>
              Telefone para contato (com DDD)
            </label>
            <input 
              type="tel"
              className={inputClasses}
              placeholder="(00) 00000-0000"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
        </div>

        <div className="text-left">
          <label className={labelClasses}>
            Descreva seu processo e o que espera do sistema
          </label>
          <textarea 
            rows={2}
            className={inputClasses}
            placeholder="Como funciona seu fluxo de trabalho atual?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-400 text-xs font-medium text-left">{error}</p>}
        
        <button 
          type="submit"
          disabled={loading}
          className={`w-full py-3.5 rounded-md font-bold text-base transition-all flex items-center justify-center gap-3 ${
            loading ? 'bg-slate-800 text-slate-500 cursor-not-allowed' : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 active:scale-[0.99]'
          }`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-slate-500" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </>
          ) : 'Solicitar Diagnóstico Profissional'}
        </button>
      </form>
    );
  };

  if (isModal) {
    return (
      <div className="text-center bg-slate-950 p-2 rounded-lg">
        <h2 className="text-xl font-extrabold text-white mb-1.5">Solicitar Diagnóstico</h2>
        <p className="text-slate-400 mb-5 text-xs">
          Preencha os dados e um analista avaliará sua operação.
        </p>
        {renderContent()}
      </div>
    );
  }

  return (
    <section id="diagnosis" className="py-20 bg-slate-950 text-white relative overflow-hidden scroll-mt-16">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid-dark" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="emerald" strokeWidth="0.1" />
          </pattern>
          <rect width="100" height="100" fill="url(#grid-dark)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold mb-5">Agende seu Diagnóstico Gratuito</h2>
          <p className="text-slate-400 text-base">
            Analisaremos seu fluxo de trabalho para identificar como economizar tempo e dinheiro.
          </p>
        </div>

        <div className="bg-slate-900 rounded-lg shadow-2xl p-7 lg:p-10 border border-slate-800">
          {renderContent()}
        </div>
      </div>
    </section>
  );
};

export default DiagnosisTool;
