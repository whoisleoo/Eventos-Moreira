import LaserFlow from './SetaLed';

const LASER_COLOR = '#B19EEF';

const schedule = [
  {
    stage: 'Palco Principal',
    color: LASER_COLOR,
    shows: [
      { time: '16:00', artist: 'DJ BERNARDO',      genre: 'House'        },
      { time: '17:30', artist: 'DJ NOVAKOSKI',       genre: 'Pop / FUNK'   },
      { time: '19:00', artist: 'MC BORDOGA',        genre: 'Funk'         },
      { time: '21:00', artist: 'PROFESSOR DIONATAN',       genre: 'Sertanejo'    },
      { time: '23:00', artist: 'ASSASINO DO PARQUE',     genre: 'Sertanejo'    },
    ],
  },
  {
    stage: 'Palco Alternativo',
    color: LASER_COLOR,
    shows: [
      { time: '16:30', artist: 'MOREIRA GATSON',   genre: 'Indie / Folk'  },
      { time: '18:00', artist: 'THE BOYS',   genre: 'Trap / Hip‑Hop'},
      { time: '20:00', artist: 'BLUES',     genre: 'Jazz Fusion'   },
      { time: '22:00', artist: 'DJ EPSTEIN',    genre: 'ILHA'           },
    ],
  },
];

function HorariosSection() {
  return (
    <section
      id="horarios"
      className="relative w-full pt-0 pb-28 px-6 bg-[#000] overflow-hidden"
    >
   
      
     

      <div className="relative z-10 max-w-5xl mx-auto mb-16 text-center">
        <p className="text-[#B19EEF] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          Programação de shows
        </p>
        <h2
          className="text-5xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: 'medium' }}
        >
          Horários dos Shows
        </h2>
        <p className="mt-4 text-white/40 text-base">
          Sábado, 30 de fevereiro de 2026 · CASA DOS MOREIRA, Prudentópolis
        </p>
      </div>

      <div className="relative w-full h-96 pointer-events-none">
        <LaserFlow
          color="#B19EEF"
          horizontalBeamOffset={0.0}
          verticalBeamOffset={-0.5}
          verticalSizing={0}
          horizontalSizing={1}
          wispDensity={2}
          wispSpeed={16.5}
          wispIntensity={5}
          flowSpeed={0.35}
          flowStrength={0.25}
          fogIntensity={0.2}
          fogScale={0.3}
          fogFallSpeed={0.6}
          decay={1.1}
          falloffStart={1.2}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        {schedule.map(({ stage, color, shows }) => (
          <div key={stage} className="rounded-2xl overflow-hidden"
            style={{
              background: `linear-gradient(160deg, ${color}22 0%, ${color}0d 100%)`,
              border: `1px solid ${color}55`,
              fontFamily: 'medium',
            }}
          >
            <div
              className="flex items-center gap-3 px-6 py-4"
              style={{
                background: `linear-gradient(90deg, ${color}50 0%, ${color}25 100%)`,
                borderBottom: `1px solid ${color}55`,
              }}
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: color, boxShadow: `0 0 8px ${color}` }}
              />
              <h3 className="text-white font-bold text-base tracking-wide">{stage}</h3>
            </div>

           
            <table className="w-full">
              <thead>
                <tr className="text-white/40 text-xs uppercase tracking-widest"
                  style={{ borderBottom: `1px solid ${color}35` }}>
                  <th className="text-left px-6 py-3 font-medium w-24">Horário</th>
                  <th className="text-left px-6 py-3 font-medium">Artista</th>
                  <th className="text-left px-6 py-3 font-medium hidden sm:table-cell">Gênero</th>
                </tr>
              </thead>
              <tbody>
                {shows.map(({ time, artist, genre }) => (
                  <tr
                    key={time}
                    className="last:border-0 transition-colors duration-150 group"
                    style={{ borderBottom: `1px solid ${color}25` }}
                    onMouseEnter={e => e.currentTarget.style.background = `${color}18`}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                  >
                    <td className="px-6 py-4">
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color }}
                      >
                        {time}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-white text-sm font-semibold group-hover:text-white/90">
                        {artist}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden sm:table-cell">
                      <span className="text-white/40 text-xs font-medium">{genre}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HorariosSection;
