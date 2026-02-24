import CircularGallery from './CircularGallery';

const items = [
  { image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80', text: '' },
  { image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80', text: ''        },
  { image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', text: ''   },
  { image: 'https://images.unsplash.com/photo-1504680177321-2e6a879aac86?w=800&q=80', text: ''          },
  { image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80', text: ''        },
  { image: 'https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?w=800&q=80', text: ''       },
  { image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=800&q=80', text: ''},
  { image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80', text: ''  },
];

function GaleriaSection() {
  return (
    <section className="relative w-full bg-[#000] mb-70 snap-center">

    
      <div className="pt-20 pb-4 text-center">
        <p className="text-[#B19EEF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Galeria
        </p>
        <h2
          className="text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: 'medium' }}
        >
          Melhores momentos
        </h2>
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <CircularGallery
          items={items}
          bend={1}
          textColor="#B19EEF"
          borderRadius={0.05}
          scrollSpeed={2}
          scrollEase={0.05}
        />
      </div>

    </section>
  );
}

export default GaleriaSection;
