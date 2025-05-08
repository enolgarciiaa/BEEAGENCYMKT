import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const cardsData = [
  {
    number: "01",
    title: "Análisis Inteligente",
    text: "Usamos sistemas avanzados y modelos basados en datos para entender tu situación digital y definir un punto de partida claro.",
  },
  {
    number: "02",
    title: "Estrategia Algorítmica",
    text: "Diseñamos rutas personalizadas para tu marca basándonos en patrones predictivos, tendencias y automatización de decisiones.",
  },
  {
    number: "03",
    title: "Implementación Automatizada",
    text: "Ejecutamos las acciones con herramientas automatizadas y tecnologías que garantizan rapidez, escalabilidad y precisión.",
  },
  {
    number: "04",
    title: "Optimización Cognitiva",
    text: "Iteramos con mediciones constantes, análisis en tiempo real y machine learning para adaptar cada paso al entorno.",
  },
];

export default function Metodologia() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen text-white px-6 md:px-10 lg:px-16 2xl:px-32 py-24 flex flex-col items-center justify-center overflow-hidden"
      data-aos="fade-up"
    >
      <div className="absolute -z-10 inset-0" />

      <div className="relative z-10 w-full max-w-[1600px] flex flex-col items-center gap-12">
        {/* Texto */}
        <div className="w-full text-center space-y-6">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
            Metodología <span className="neon-blue">Beeagency</span>
          </h2>

          <hr className="neon-button-cyan w-3/4 mx-auto" />

          <p className="text-base text-gray-300 font-light max-w-2xl mx-auto">
            Fusionamos inteligencia artificial y estrategia digital para ayudarte a crecer. Desde el análisis hasta la optimización, cada paso está diseñado para mejorar tu rendimiento con tecnología de vanguardia y visión estratégica personalizada.
          </p>

          {/* Espacio adicional para evitar que se monte */}
          <div className="mt-6">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="neon-button-cyan bg-black text-white px-6 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            >
              Únete al cambio
            </a>
          </div>
        </div>


        {/* Cards */}
        <div className="w-full flex flex-wrap justify-center gap-5 px-2 md:px-6">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="relative group flex flex-col p-8 sm:p-10 lg:px-4 w-full sm:w-[48%] lg:w-[23%] h-[460px] sm:h-[520px] lg:h-[480px] transition-all duration-300 cursor-pointer bg-black/30 backdrop-blur-md border border-blue-400 hover:scale-105"
            >
              <p className="text-xl font-bold text-blue-400">{card.number}</p>
              <h3 className="mt-4 text-lg font-semibold text-blue-300">{card.title}</h3>
              <p
                className="mt-2 text-sm text-gray-100 opacity-20 group-hover:opacity-100 transition-opacity duration-300"
              >
                {card.text}
              </p>

              {/* Luz tipo linterna */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 sm:w-48 md:w-56 h-36 sm:h-44 md:h-48 pointer-events-none z-0 overflow-hidden opacity-0 group-hover:opacity-100 transition duration-500">
                <div
                  className="w-full h-full animate-flare bg-gradient-to-t from-cyan-400/80 via-cyan-300/20 to-transparent"
                  style={{
                    clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)"
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
