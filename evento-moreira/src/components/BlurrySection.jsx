import GradualBlur from './BlurryScroll';

/**
 * BlurrySection — wrapper de seção com efeito de blur gradual nas bordas.
 * Basta envolver o conteúdo de qualquer seção com ele.
 *
 * Props:
 *   id, className  → repassados para o <section>
 *   blurBottom     → blur na borda inferior (default: true)
 *   blurTop        → blur na borda superior (default: false)
 *   height         → altura do blur (default: '8rem')
 *   strength       → intensidade do blur (default: 2.5)
 */
function BlurrySection({
  id,
  className = '',
  children,
  blurBottom = true,
  blurTop = false,
  height = '8rem',
  strength = 2.5,
}) {
  const shared = {
    target: 'parent',
    height,
    strength,
    divCount: 6,
    curve: 'bezier',
    exponential: true,
    opacity: 1,
  };

  return (
    <section id={id} className={`relative overflow-hidden ${className}`}>
      {children}

      {blurTop && (
        <GradualBlur {...shared} position="top" />
      )}

      {blurBottom && (
        <GradualBlur {...shared} position="bottom" />
      )}
    </section>
  );
}

export default BlurrySection;
