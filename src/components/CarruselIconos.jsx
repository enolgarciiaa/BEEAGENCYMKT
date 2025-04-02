import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Importa los logos
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
  wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma,wordpress, woocommerce, notion, photoshop, slack,
  github, pinterest, tiktok, shopify, figma
];

export default function CarruselIconos() {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center gap-16 bg-[radial-gradient(circle,black_20%,#131313_100%)] overflow-hidden py-24 px-4
        min-h-screen sm:min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] xl:min-h-[95vh] 2xl:min-h-screen">
  
        {/* Texto */}
        <div
            className="text-center max-w-full"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
        >
            <h2 className="text-white text-4xl sm:text-5xl lg:text-7xl font-ubuntu font-semibold mb-6">
            Codo a codo con los mejores
            </h2>
            <p className="text-neutral-300 text-lg sm:text-xl font-ubuntu">
            Personalizamos tus necesidades para conseguir los mejores resultados de la mano de herramientas de primer nivel.
            </p>
        </div>

        {/* Carrusel de logos */}
        <div className="flex flex-col gap-10 w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] overflow-hidden">
            {/* Fila 1 */}
            <div className="marquee">
            <div className="marquee-content">
                {[...icons, ...icons].map((icon, idx) => (
                <span key={`fila1-${idx}`} className="mx-6 inline-block hover:scale-110 transition-transform duration-300">
                    <img src={icon} alt="icono herramienta" className="w-14 h-14 object-contain" />
                </span>
                ))}
            </div>
            </div>

            {/* Fila 2 */}
            <div className="marquee reverse">
            <div className="marquee-content">
                {[...icons, ...icons, ...icons].map((icon, idx) => (
                <span key={`fila2-${idx}`} className="mx-6 inline-block hover:scale-110 transition-transform duration-300">
                    <img src={icon} alt="icono herramienta" className="w-14 h-14 object-contain" />
                </span>
                ))}
            </div>
            </div>

            {/* Fila 3 */}
            <div className="marquee">
            <div className="marquee-content">
                {[...icons, ...icons].map((icon, idx) => (
                <span key={`fila3-${idx}`} className="mx-6 inline-block hover:scale-110 transition-transform duration-300">
                    <img src={icon} alt="icono herramienta" className="w-14 h-14 object-contain" />
                </span>
                ))}
            </div>
            </div>
        </div>
    </section>

  );
}
