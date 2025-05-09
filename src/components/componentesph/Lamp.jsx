import React from "react";
import { motion } from "motion/react";
import videoSrc from "/src/assets/fotosph/159053-818026314.mp4"; // ✅ IMPORTACIÓN CORRECTA

export default function LampDemo() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden w-full px-4 mt-10 text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-2]"
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta vídeos HTML5.
      </video>

      <div className="absolute inset-0 bg-black/60 z-[-1]" />
      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-[-1]" />

      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          Descubre el futuro
        </h1>
        <p className="mt-6 text-sm md:text-lg lg:text-xl text-neutral-100 tracking-widest font-light">
          "El futuro ya está aquí. Y piensa por sí mismo."
        </p>
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-button-cyan bg-black text-white px-10 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            Descubre más
          </a>
          <a
            href="/services"
            className="neon-button-cyan bg-black text-white px-10 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            Servicios
          </a>
        </div>
      </motion.div>
    </div>
  );
}
