import React from "react";

const CarruselSection = () => {
  const filas = [
    ["Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral"],
    ["Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido"],
    ["IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts"],
    ["SEO", "Mobile First", "Copywriting", "Animación", "Performance", "Creatividad 🎨"],
  ];

  return (
    <section className="w-full  py-20 bg-black text-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
          Impulsa tu marca en un océano azul
        </h2>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          La diferencia es la ventaja más buscada. Conoce más sobre los servicios de Bee Agency y cómo destacamos.
        </p>
      </div>

      <div className="flex flex-col gap-6 border border-white px-4 py-6 overflow-hidden">
        {filas.map((fila, index) => {
          const items = [...fila, ...fila];

          return (
            <div key={index} className="relative w-full overflow-hidden">
              <div className="flex w-max">
                {index % 2 === 0 ? (
                  <>
                    <div className="flex gap-6 whitespace-nowrap animate-marquee-left">
                      {items.map((text, i) => (
                        <span
                          key={`left1-${i}`}
                          className={`text-[20px] px-4 py-2 font-semibold ${
                            text.includes("🤝") || text.includes("💰") || text.includes("🎨")
                              ? "border border-white rounded-full"
                              : ""
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 whitespace-nowrap animate-marquee-left">
                      {items.map((text, i) => (
                        <span
                          key={`left2-${i}`}
                          className={`text-[20px] px-4 py-2 font-semibold ${
                            text.includes("🤝") || text.includes("💰") || text.includes("🎨")
                              ? "border border-white rounded-full"
                              : ""
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex gap-6 whitespace-nowrap animate-marquee-right">
                      {items.map((text, i) => (
                        <span
                          key={`right2-${i}`}
                          className={`text-[20px] px-4 py-2 font-semibold ${
                            text.includes("🤝") || text.includes("💰") || text.includes("🎨")
                              ? "border border-white rounded-full"
                              : ""
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6 whitespace-nowrap animate-marquee-right">
                      {items.map((text, i) => (
                        <span
                          key={`right1-${i}`}
                          className={`text-[20px] px-4 py-2 font-semibold ${
                            text.includes("🤝") || text.includes("💰") || text.includes("🎨")
                              ? "border border-white rounded-full"
                              : ""
                          }`}
                        >
                          {text}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarruselSection;
