import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ Rutas relativas a la carpeta /public
const iconPaths = [
  "/icons/wordpress-icon.svg",
  "/icons/VectorWiki-yAnVI__woocommerce.svg",
  "/icons/notion-icon.svg",
  "/icons/photoshop.svg",
  "/icons/slack.svg",
  "/icons/github-icon.svg",
  "/icons/pinterest.svg",
  "/icons/TikTok.svg",
  "/icons/shopify-icon.svg",
  "/icons/figma-icon.svg",
];

const duplicate = (arr, times = 3) => Array(times).fill(arr).flat();

export default function CarruselIconos() {
  useEffect(() => {
    AOS.init();
  }, []);

  const rows = [
    { content: duplicate(iconPaths, 3), direction: "left" },
    { content: duplicate(iconPaths, 4), direction: "right" },
    { content: duplicate(iconPaths, 3), direction: "left" },
  ];

  return (
    <section className="w-full text-white py-40 md:py-52 lg:py-64 px-4 overflow-hidden">
      {/* Texto superior */}
      <div
        className="text-center max-w-8xl mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <h2 className="text-3xl md:text-7xl font-bold mb-4">
          Codo a codo con <span className="text-yellow-400">los mejores</span>
        </h2>
        <p className="text-lg md:text-xl">
          Personalizamos tus necesidades para conseguir los mejores resultados
          de la mano de herramientas de primer nivel
        </p>
      </div>

      {/* Carrusel */}
      <div className="mt-16 w-full max-w-7xl mx-auto">
        {rows.map((row, i) => (
          <div key={i} className="w-full overflow-hidden">
            <div
              className={`flex whitespace-nowrap gap-8 w-[200%] py-6 ${
                row.direction === "left"
                  ? "animate-icon-scroll-left"
                  : "animate-icon-scroll-right"
              }`}
            >
              {row.content.map((src, idx) => (
                <span
                  key={`row-${i}-icon-${idx}`}
                  className="shrink-0 w-16 h-16 md:w-16 md:h-16 flex items-center justify-center"
                >
                  <img
                    src={src}
                    alt={`icono ${idx}`}
                    className="h-full w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
