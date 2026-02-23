import Grainient from "../components/Granient";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen overflow-hidden">
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B19EEF"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
          <h1
            className="text-7xl font-extrabold text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] tracking-tight m-0 text-center"
            style={{ fontFamily: 'medium' }}
          >
            Eventos Moreira
          </h1>

          <div className="flex gap-4 flex-wrap justify-center">
            <a
              href="#inscricao"
              className="px-9 py-3.5 bg-white text-[#5227FF] rounded-full font-bold text-base no-underline shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-transform duration-150 hover:scale-105"
            >
              Comprar Ingresso
            </a>
            <a
              href="#horarios"
              className="px-9 py-3.5 bg-transparent text-white border-2 border-white/70 rounded-full font-bold text-base no-underline shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-transform duration-150 hover:scale-105"
            >
              Ver Programação
            </a>
          </div>
        </div>
      </section>

      {/* Próxima seção (placeholder) */}
      <section id="horarios" className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <p className="text-white text-2xl opacity-40">aqui vai ter mais coisa</p>
      </section>
    </>
  );
}

export default Home;
