import React from "react";

const logos = [
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" },
  { src: "/src/assets/fotosph/wordpress-icon.svg", alt: "wordpress" },
  { src: "/src/assets/fotosph/shopify-icon.svg", alt: "shopify" },
  { src: "/src/assets/fotosph/tiktok.svg", alt: "tiktok" },
  { src: "/src/assets/fotosph/notion-icon.svg", alt: "notion" },
  { src: "/src/assets/fotosph/photoshop.svg", alt: "photoshop" },
  { src: "/src/assets/fotosph/figma-icon.svg", alt: "figma" }
];

export default function InfiniteLogosCarousel() {
  return (
    <div className="relative bg-black h-[200px] flex items-center w-full px-4 sm:px-6 md:px-12 lg:px-32">
      {/* Texto solo visible desde md hacia arriba */}
      <div className="hidden md:flex items-center gap-4 z-20">
        <p className="text-sm text-white opacity-70 whitespace-nowrap">
          Trabajamos con los mejores
        </p>
        <div className="h-12 w-px bg-white/20" />
      </div>

      {/* Carrusel */}
      <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <div className="animate-marquee whitespace-nowrap flex gap-10 sm:gap-12 md:gap-16">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10  sm:h-16 w-auto opacity-80 hover:opacity-100 transition duration-300"
              />
              <span className="mt-1 text-[9px] sm:text-[10px] tracking-widest text-white font-semibold uppercase opacity-70 hover:opacity-100 transition">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>

        {/* Gradientes laterales */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
      </div>
    </div>
  );
}
