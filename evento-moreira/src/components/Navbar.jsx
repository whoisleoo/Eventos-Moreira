const links = [
  { label: 'Home',      href: '#home'      },
  { label: 'Horários',  href: '#horarios'  },
  { label: 'Ingressos', href: '#inscricao' },
];

function Navbar() {
  return (
    <nav
      className="fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-10 px-8 py-3.5 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1.5px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(0,0,0,0.15)]"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.06) 100%)',
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      {links.map(({ label, href }) => (
        <a
          key={href}
          href={href}
          className="text-white/85 text-sm font-semibold tracking-wide no-underline transition-colors duration-150 hover:text-white"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;
