import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Contenido de cada fila
const fila1 = ["Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral","Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral"];
const fila2 = ["Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido","Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido"];
const fila3 = ["Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts","Inteligencia Artificial", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts"];
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
    <section className="w-full bg-[#060606] text-white py-20 mt-20 md:mt-72 ">
      {/* Contenido superior */}
        <div
          className="text-center mx-auto w-full max-w-8xl px-4 sm:px-6 md:px-8 lg:px-10"
          data-aos="slide-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          >
          <h2 className="w-full max-w-none text-3xl md:text-7xl font-bold mb-4">
            Impulsa tu marca en un <span className="text-blue-400">océano azul</span> 
          </h2>
          <p className="text-lg md:text-xl">
            La diferencia es la ventaja más buscada, conoce más sobre los servicios
            de Bee Agency y cómo es nuestra metodología para destacar entre la multitud.
          </p>
        </div>

      {/* Carruseles (full width) */}
      <div
        className="mt-20  w-full"
        data-aos="slide-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        {filas.map((fila, i) => (
          <div key={i} className="w-full overflow-hidden border-t border-b border-white">
            <div
              className={`flex whitespace-nowrap  w-[200%] py-4 px-2 animate-scroll-${fila.direction}`}
            >
              {fila.contenido.map((item, idx) => (
                <span
                key={idx}
                className={`px-4 py-2 rounded-full shrink-0 whitespace-nowrap text-lg font-semibold ${
                  item.includes("🤝") || item.includes("💰") || item.includes("🎨")
                    ? "bg-white text-black font-semibold border border-white"
                    : ""
                }`}
              >
                {item}
              </span>
              
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
