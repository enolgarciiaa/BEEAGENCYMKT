import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const fila1 = ["Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral"];
const fila2 = ["Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido"];
const fila3 = ["Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts"];
const fila4 = [...fila3];

const duplicate = (arr, times = 4) => Array(times).fill(arr).flat();

export default function ImpulsaMarca() {
  useEffect(() => {
    AOS.init();
  }, []);

  const filas = [
    { contenido: duplicate(fila1, 4), direction: "left" },
    { contenido: duplicate(fila2, 4), direction: "right" },
    { contenido: duplicate(fila3, 4), direction: "left" },
    { contenido: duplicate(fila4, 4), direction: "right" },
  ];

  return (
    <section className="relative w-full min-h-[100vh] md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-screen text-white overflow-hidden">
      
      {/* Título y texto */}
      <div
        className="relative z-10 text-center mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text mt-10 text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
          Impulsa tu marca en un{" "}
          <span className="neon-blue">
            entorno inteligente
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto">
          La diferencia es la ventaja más buscada. Descubre cómo Bee Agency combina IA, creatividad y estrategia para destacar entre la multitud.
        </p>
      </div>

      {/* Carruseles */}
      <div className="relative z-10 mt-20 space-y-6">
        {filas.map((fila, i) => (
          <div key={i} className="w-full overflow-hidden ">
            <div
              className={`flex whitespace-nowrap w-[200%] py-4 px-2 animate-scroll-${fila.direction}`}
            >
              {fila.contenido.map((item, idx) => {
                const isHighlight = item.includes("🤝") || item.includes("💰") || item.includes("🎨");

                return (
                  <span
                    key={idx}
                    className={`mx-2 px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 whitespace-nowrap 
                    ${isHighlight
                      ? "neon-button-cyan text-white  hover:scale-105"
                      : "bg-white/10 border border-white/10 text-white hover:bg-white/20"}`}
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
