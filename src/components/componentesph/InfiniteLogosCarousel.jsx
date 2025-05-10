import React from "react";

import wordpress from "../../assets/fotosph/wordpress-icon.svg";
import shopify from "../../assets/fotosph/shopify-icon.svg";
import tiktok from "../../assets/fotosph/tiktok.svg";
import notion from "../../assets/fotosph/notion-icon.svg";
import photoshop from "../../assets/fotosph/photoshop.svg";
import figma from "../../assets/fotosph/figma-icon.svg";

const logos = [
  { src: wordpress, alt: "wordpress" },
  { src: shopify, alt: "shopify" },
  { src: tiktok, alt: "tiktok" },
  { src: notion, alt: "notion" },
  { src: photoshop, alt: "photoshop" },
  { src: figma, alt: "figma" },
];

const duplicatedLogos = Array(6).fill(logos).flat();

export default function InfiniteLogosCarousel() {
  return (
    <div className="relative bg-black h-[200px] flex items-center w-full px-4 sm:px-6 md:px-12 lg:px-32">
      <div className="hidden md:flex items-center gap-4 z-20">
        <p className="text-sm text-white opacity-70 whitespace-nowrap">
          Trabajamos con los mejores
        </p>
        <div className="h-12 w-px bg-white/20" />
      </div>

      <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
        <div className="animate-marquee whitespace-nowrap flex gap-10 sm:gap-12 md:gap-16">
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex flex-col items-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 sm:h-16 w-auto opacity-80 hover:opacity-100 transition duration-300"
              />
              <span className="mt-1 text-[9px] sm:text-[10px] tracking-widest text-white font-semibold uppercase opacity-70 hover:opacity-100 transition">
                {logo.alt}
              </span>
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-10 sm:w-16 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />
      </div>
    </div>
  );
}
