import { useState } from 'react';

const ACCENT = '#B19EEF';

const tickets = [
  {
    id: 'pista',
    label: 'Pista',
    price: 'R$ 80',
    description: 'Acesso a casa do pedro, próximo ao nosso futuro.',
    perks: ['Acesso a casa do pedro', 'Acesso ao palco', 'da pra beber'],
  },
  {
    id: 'vip',
    label: 'VIP',
    price: 'R$ 180',
    description: 'só pros ricão',
    perks: ['Todos os benefícios da pista', 'Área VIP exclusiva', 'open bar de agua', 'Banheiros sem precisa paga'],
    highlight: true,
  },
  {
    id: 'camarote',
    label: 'Camarote',
    price: 'R$ 350',
    description: 'só para os verdadeiro',
    perks: ['Todos os benefícios do VIP', 'Camarote com vista pra sacada', 'Open bar completo', 'Serviço de garçom', 'Estacionamento reservado'],
  },
];

function IngressosSection() {
  const [selected, setSelected] = useState('vip');
  const [updates, setUpdates] = useState(true);
  const [form, setForm] = useState({ nome: '', email: '', telefone: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="inscricao" className="relative w-full bg-[#000] py-28 px-6 overflow-hidden">

     
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-15 blur-[130px] pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${ACCENT} 0%, #5227FF 100%)` }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="text-[#B19EEF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Garanta sua vaga
          </p>
          <h2
            className="text-5xl font-extrabold text-white tracking-tight"
            style={{ fontFamily: 'medium' }}
          >
            Ingressos
          </h2>
          <p className="mt-4 text-white/50 text-base">
            Sábado, 30 de Março de 2026 · CASA DOS MOREIRA, Prudentópolis
          </p>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
          {tickets.map(ticket => {
            const isSelected = selected === ticket.id;
            return (
              <button
                key={ticket.id}
                type="button"
                onClick={() => setSelected(ticket.id)}
                className="relative text-left rounded-2xl p-6 transition-all duration-200 cursor-pointer w-full"
                style={{
                  background: isSelected
                    ? `linear-gradient(145deg, ${ACCENT}30 0%, ${ACCENT}10 100%)`
                    : 'rgba(255,255,255,0.03)',
                  border: isSelected ? `1.5px solid ${ACCENT}99` : '1.5px solid rgba(255,255,255,0.08)',
                  boxShadow: isSelected ? `0 0 32px ${ACCENT}22` : 'none',
                }}
              >
                {ticket.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-widest uppercase px-3 py-1 rounded-full"
                    style={{ background: ACCENT, color: '#000' }}
                  >
                    Mais popular
                  </span>
                )}

               
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-150"
                    style={{
                      borderColor: isSelected ? ACCENT : 'rgba(255,255,255,0.3)',
                      background: isSelected ? ACCENT : 'transparent',
                    }}
                  >
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                  </span>
                  <span className="text-white font-bold text-base">{ticket.label}</span>
                </div>

                <p className="text-white/50 text-sm mb-5 leading-relaxed">{ticket.description}</p>

                <ul className="flex flex-col gap-1.5 mb-6">
                  {ticket.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-2 text-white/70 text-sm">
                      <svg className="shrink-0" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="7" fill={ACCENT} fillOpacity="0.2" />
                        <path d="M4 7l2 2 4-4" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {perk}
                    </li>
                  ))}
                </ul>

                <span
                  className="text-2xl font-extrabold"
                  style={{ color: isSelected ? ACCENT : 'rgba(255,255,255,0.6)' }}
                >
                  {ticket.price}
                </span>
              </button>
            );
          })}
        </div>

       
        {sent ? (
          <div
            className="rounded-2xl p-12 text-center"
            style={{ background: `${ACCENT}15`, border: `1px solid ${ACCENT}40` }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{ background: `${ACCENT}25` }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M6 14l6 6 10-12" stroke={ACCENT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-white text-2xl font-bold mb-2">Inscrição enviada!</h3>
            <p className="text-white/50 text-base">
              Obrigado, <strong className="text-white/80">{form.nome}</strong>! Em breve você receberá a confirmação no e-mail <strong className="text-white/80">{form.email}</strong>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl p-8 flex flex-col gap-5"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <h3 className="text-white font-bold text-lg mb-1">Dados para inscrição</h3>

         
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { name: 'nome',     label: 'Nome completo', type: 'text',  placeholder: 'Seu nome'         },
                { name: 'email',    label: 'E-mail',        type: 'email', placeholder: 'seu@email.com'     },
                { name: 'telefone', label: 'Telefone',      type: 'tel',   placeholder: '(00) 00000-0000'   },
              ].map(field => (
                <div key={field.name} className={field.name === 'nome' ? 'sm:col-span-2' : ''}>
                  <label className="block text-white/50 text-xs font-semibold uppercase tracking-widest mb-1.5">
                    {field.label}
                  </label>
                  <input
                    required
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-150 placeholder:text-white/20"
                    style={{
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}
                    onFocus={e => e.target.style.borderColor = `${ACCENT}80`}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                </div>
              ))}
            </div>

           
            <div className="flex gap-3 flex-wrap">
              {tickets.map(t => (
                <label key={t.id} className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="radio"
                    name="ingresso"
                    value={t.id}
                    checked={selected === t.id}
                    onChange={() => setSelected(t.id)}
                    className="hidden"
                  />
                  <span
                    className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center transition-all duration-150"
                    style={{
                      borderColor: selected === t.id ? ACCENT : 'rgba(255,255,255,0.25)',
                      background: selected === t.id ? ACCENT : 'transparent',
                    }}
                  />
                  <span className="text-white/70 text-sm">{t.label} — {t.price}</span>
                </label>
              ))}
            </div>

      
            <label className="flex items-center gap-3 cursor-pointer select-none w-fit">
              <span
                className="w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 shrink-0"
                style={{
                  borderColor: updates ? ACCENT : 'rgba(255,255,255,0.25)',
                  background: updates ? ACCENT : 'transparent',
                }}
                onClick={() => setUpdates(u => !u)}
              >
                {updates && (
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M2 5.5l2.5 2.5 4.5-5" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <input type="checkbox" className="hidden" checked={updates} onChange={() => setUpdates(u => !u)} />
              <span className="text-white/60 text-sm">Receber atualizações e novidades por e-mail</span>
            </label>

      
            <button
              type="submit"
              className="mt-2 w-full sm:w-auto sm:self-end rounded-full px-10 py-3.5 font-bold text-base transition-transform duration-150 hover:scale-105 active:scale-95"
              style={{ background: ACCENT, color: '#000' }}
            >
              Confirmar inscrição →
            </button>
          </form>
        )}

      </div>
    </section>
  );
}

export default IngressosSection;
