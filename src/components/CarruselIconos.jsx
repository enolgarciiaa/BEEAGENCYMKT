import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Importamos los iconos directamente desde src/assets
import wordpress from "../assets/wordpress-icon.svg";
import woocommerce from "../assets/VectorWiki-yAnVI__woocommerce.svg";
import notion from "../assets/notion-icon.svg";
import photoshop from "../assets/photoshop.svg";
import slack from "../assets/slack.svg";
import github from "../assets/github-icon.svg";
import pinterest from "../assets/pinterest.svg";
import tiktok from "../assets/TikTok.svg";
import shopify from "../assets/shopify-icon.svg";
import figma from "../assets/figma-icon.svg";

const icons = [
  wordpress,
  woocommerce,
  notion,
  photoshop,
  slack,
  github,
  pinterest,
  tiktok,
  shopify,
  figma,
];

const duplicate = (arr, times = 3) => Array(times).fill(arr).flat();

export default function CarruselIconos() {
  useEffect(() => {
    AOS.init();
  }, []);

  const rows = [
    { content: duplicate(icons, 3), direction: "left" },
    { content: duplicate(icons, 4), direction: "right" },
    { content: duplicate(icons, 3), direction: "left" },
  ];

  return (
    <section className="w-full bg-black text-white py-40 md:py-52 lg:py-64 px-4 overflow-hidden">
      {/* Texto superior */}
      <div
        className="text-center max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="3000"
      >
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Codo a codo con los mejores
        </h2>
        <p className="text-lg md:text-xl">
          Personalizamos tus necesidades para conseguir los mejores resultados de la mano de herramientas de primer nivel
        </p>
      </div>

      {/* Carrusel con contenedor más grande */}
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
                  key={idx}
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
