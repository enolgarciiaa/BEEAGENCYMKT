"use client";
import React from "react";
import { motion } from "framer-motion";
import Particles from "/src/components/componentesps/Particles";

const HeroParallaxMobile = () => {
  return (
    <div className="relative w-full h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Fondo de partículas */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Contenido animado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-2xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          Estrategia hecha de <br /> mente y emoción.
        </h1>
        <p className="text-base text-gray-300 mt-7 mb-8">
          Combinamos innovación, análisis y sensibilidad para crear marcas que no solo destacan, sino que se adaptan y evolucionan en un entorno cada vez más inteligente.
        </p>
        <motion.a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="neon-button-cyan bg-black text-white px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-widest transition shadow-md"
        >
          Descubre más
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroParallaxMobile;
