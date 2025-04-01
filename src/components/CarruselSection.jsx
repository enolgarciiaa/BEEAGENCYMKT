import React from "react";

const CarruselSection = () => {
  const filas = [
    ["Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral", "Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral", "Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral", "Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral", "Social Media", "Efecto WOW", "Let's do it 🤝", "Marketing", "Stories", "Viral"],
    ["Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido", "IA", "Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido", "IA", "Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido", "IA", "Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido", "IA", "Paid Media 💰💲", "Programación", "Diseño UX", "Eventos", "Branding", "Contenido", "IA"],
    ["IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts"],
    ["SEO", "Mobile First", "Copywriting", "Animación", "Performance", "Creatividad 🎨", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts", "IA", "Vídeos", "Creatividad 🎨", "Responsive", "UI", "Posts"],
  ];

  const speeds = ["animation-duration-100s", "animation-duration-100s", "animation-duration-100s", "animation-duration-100s"];
  const animations = ["animate-marquee-left", "animate-marquee-right", "animate-marquee-left", "animate-marquee-right"];

  return (
    <section className="w-full mt-52 bg-black text-white h-[600px] flex items-center justify-center flex-col mb-20">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl sm:text-7xl font-bold mb-6">
          Impulsa tu marca en un océano azul
        </h2>
        <p className="text-lg sm:text-xl max-w-5xl mx-auto">
          La diferencia es la ventaja más buscada. Conoce más sobre los servicios de Bee Agency y cómo destacamos.
        </p>
      </div>

      <div className="flex flex-col gap-0 px-4 py-6 overflow-hidden w-full">
        {filas.map((fila, index) => {
          const items = [...fila, ...fila];
          const isRight = animations[index] === "animate-marquee-right";

          return (
            <div
              key={index}
              className={`relative w-full overflow-hidden border-t border-white ${
                index === filas.length - 1 ? "border-b" : ""
              } py-4`}
            >
              <div className={`flex w-max ${isRight ? "animation-delay-start-right" : ""}`}>
                <div className={`flex gap-6 whitespace-nowrap ${animations[index]} ${speeds[index]}`}>
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
                <div className={`flex gap-6 whitespace-nowrap ${animations[index]} ${speeds[index]}`}>
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
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarruselSection;
