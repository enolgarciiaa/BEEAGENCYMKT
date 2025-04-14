import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import fondoSeccion  from "/src/assets/fondo-seccion3.png";
import bombilla from "/src/assets/fotosph/bombillacards.png";


const cardsData = [
  {
    number: "01",
    title: "Puntos de control",
    text: "Analizamos a fondo tu negocio y entorno para establecer un punto de partida sólido que alinee metas claras con la misión de tu marca.",
    imgAlt: "bandera punto de control",
  },
  {
    number: "02",
    title: "Estrategia",
    text: "Analizamos a fondo tu negocio y entorno para establecer un punto de partida sólido que alinee metas claras con la misión de tu marca.",
    imgAlt: "icono estrategia",
  },
  {
    number: "03",
    title: "Ejecución",
    text: "Analizamos a fondo tu negocio y entorno para establecer un punto de partida sólido que alinee metas claras con la misión de tu marca.",
    imgAlt: "icono sistema operacional",
  },
  {
    number: "04",
    title: "Optimización y medición",
    text: "Analizamos a fondo tu negocio y entorno para establecer un punto de partida sólido que alinee metas claras con la misión de tu marca.",
    imgAlt: "icono optimización",
  },
];

export default function Metodologiaservices() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 3000, once: true });
  }, []);

  return (
    <section
      className="w-full text-black px-6 md:px-10 lg:px-16 2xl:px-32 py-12 lg:py-20 overflow-hidden flex items-center justify-center min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[900px]"
      data-aos="slide-left"
      data-aos-anchor-placement="top-bottom"
      style={{
                backgroundImage: `url(${fondoSeccion})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-[1600px] h-full gap-12 lg:gap-16 xl:gap-20">
        {/* Texto */}
        <div className="w-full lg:w-[25%] flex flex-col space-y-6 justify-center text-center lg:text-left">
          <h2 className="text-3xl xl:text-4xl 2xl:text-5xl font-cinzel font-light">
            Metodología BeeAgency
          </h2>
          <hr className="border-black w-3/4 mx-auto lg:mx-0" />
          <p className="text-sm xl:text-base text-black font-light max-w-md mx-auto lg:mx-0">
            Buscamos alinearnos con el cliente en búsqueda de su satisfacción, definiendo los objetivos, la estrategia para conseguirlos y lo más divertido, ¡las acciones!
          </p>
          <button
            className="mt-4 w-fit mx-auto lg:mx-0 bg-black text-white border border-black rounded-full px-6 py-2 text-sm italic font-ubuntu transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400 hover:text-black"
            >
            Únete al cambio
          </button>
        </div>

        {/* Cards */}
        <div className="w-full lg:w-[75%] flex flex-col sm:flex-row lg:flex-nowrap justify-between items-center gap-6 lg:gap-4">
          {cardsData.map((card, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className={`flex flex-col border border-black p-4 transition-all duration-300 cursor-pointer items-start bg-white hover:shadow-lg hover:scale-105 hover:border-yellow-400 ${
                  isActive ? "bg-black/5" : ""
                } w-full sm:w-[45%] lg:w-[23%] h-[400px]`}
                onClick={() => setActiveIndex(index)}
              >
                <p className="text-xl font-bold text-black">{card.number}</p>
                <h3 className="mt-6 text-lg font-cinzel text-black">{card.title}</h3>
                <p className={`mt-4 underline text-black ${isActive ? "invisible" : "visible"}`}>¡Haz click!</p>
                <p className={`mt-3 text-sm transition-opacity duration-300 text-black ${isActive ? "opacity-100" : "opacity-0"}`}>
                  {card.text}
                </p>
                <img
                  src={bombilla}
                  alt={card.imgAlt}
                  className={`mt-auto mx-auto transition-all duration-300 ${
                    isActive ? "w-[40px] opacity-100" : "w-[60px] opacity-0"
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
