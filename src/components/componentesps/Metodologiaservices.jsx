import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 👉 Importar useNavigate
import AOS from "aos";
import "aos/dist/aos.css";
import bombilla from "/src/assets/fotosph/bombillacards.png";

const cardsData = [
  {
    number: "01",
    title: "Análisis Inteligente",
    text: "Usamos sistemas avanzados y modelos basados en datos para entender tu situación digital y definir un punto de partida claro.",
    imgAlt: "icono análisis IA",
  },
  {
    number: "02",
    title: "Estrategia Algorítmica",
    text: "Diseñamos rutas personalizadas para tu marca basándonos en patrones predictivos, tendencias y automatización de decisiones.",
    imgAlt: "icono algoritmo estrategia",
  },
  {
    number: "03",
    title: "Implementación Automatizada",
    text: "Ejecutamos las acciones con herramientas automatizadas y tecnologías que garantizan rapidez, escalabilidad y precisión.",
    imgAlt: "icono ejecución IA",
  },
  {
    number: "04",
    title: "Optimización Cognitiva",
    text: "Iteramos con mediciones constantes, análisis en tiempo real y machine learning para adaptar cada paso al entorno.",
    imgAlt: "icono optimización IA",
  },
];

export default function Metodologiaservices() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate(); // 👉 Hook de navegación

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className="w-full min-h-screen text-white px-6 md:px-10 lg:px-16 2xl:px-32 py-24 sm:py-28 md:py-32 lg:py-36 xl:py-40 flex items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1600px] gap-12 lg:gap-16 xl:gap-20">
        {/* Texto */}
        <div className="w-full lg:w-[30%] text-center lg:text-left space-y-6">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-extrabold text-yellow-400">
            <span className="text-blue-400">Metodología</span> BeeAgency
          </h2>
          <hr className="border-yellow-400 w-3/4 mx-auto lg:mx-0" />
          <p className="text-base text-gray-300 font-light max-w-md mx-auto lg:mx-0">
            Fusionamos inteligencia artificial y estrategia digital para ayudarte a crecer. Desde <span className="text-blue-400">el análisis hasta la optimización</span>, cada paso está diseñado para mejorar tu rendimiento con tecnología de vanguardia y visión estratégica <span className="text-yellow-400">personalizada</span>.
          </p>
          <button
            onClick={() => navigate("/contact")} // 👉 Redirección a /contact
            className="mt-4 w-fit mx-auto lg:mx-0 bg-yellow-400 text-black border border-yellow-400 rounded-full px-6 py-2 text-sm italic font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white"
          >
            Únete al cambio
          </button>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cardsData.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`flex flex-col p-8 sm:p-10 lg:px-4 h-[460px] sm:h-[520px] lg:h-[480px]  transition-all duration-300 cursor-pointer bg-gray-600 border border-white/10 hover:border-yellow-400 hover:scale-105 ${
                  isActive ? "shadow-[0_0_20px_rgba(255,255,255,0.2)]" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <p className="text-xl font-bold text-yellow-400">{card.number}</p>
                <h3 className="mt-4 text-lg font-semibold text-blue-400">{card.title}</h3>
                <p className={`mt-2 text-sm text-gray-300 transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-20"}`}>
                  {card.text}
                </p>
                <img
                  src={bombilla}
                  alt={card.imgAlt}
                  className={`mt-auto mx-auto transition-all duration-300 ${
                    isActive ? "w-[60px] opacity-100" : "w-[50px] opacity-40"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
