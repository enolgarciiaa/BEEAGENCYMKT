import { motion } from "framer-motion";
import { useState } from "react";
import Lottie from "lottie-react";
import lottieAmarillo from "/src/data/lotties/lottie-amarillo.json";
import lottieAzul from "/src/data/lotties/lottie-azul.json";
import lottieAzul2 from "/src/data/lotties/lottie-azul2.json";

const servicios = [
  {
    title: "Desarrollo Web",
    color: lottieAzul2,
    descripcion: "Creamos sitios funcionales, visuales y optimizados para resultados.",
    items: ["Ecommerce", "SEO y SEM", "Webs corporativas", "Empresas"],
  },
  {
    title: "Consultoría de Negocio",
    color: lottieAmarillo,
    descripcion: "Auditorías, planificación y automatización para escalar tu empresa.",
    items: ["Auditoría", "Automatización", "Plan de Marketing", "Consultoría"],
  },
  {
    title: "Branding & Identidad",
    color: lottieAzul,
    descripcion: "Creamos marcas con personalidad, coherencia y estrategia visual.",
    items: ["Diseño Gráfico", "Social Media", "Manual de Marca", "Comunicación"],
  },
];

export default function LottiesSection() {
  return (
    <section className="w-full py-24 px-6 sm:px-10 lg:px-20 bg-black text-white">
      {/* Título */}
      <div className="text-center max-w-5xl mx-auto mb-20">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text mt-10 text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
        
          Lo que hacemos por tu <span className="neon-blue">marca</span> 
        </motion.h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 font-light">
          Estrategia, diseño y tecnología al servicio de tu negocio.
        </p>
        <div className="w-24 h-1 mt-6 mx-auto neon-button-cyan rounded-full" />
      </div>

      {/* Tarjetas en fila con flip */}
      <div className="flex flex-col lg:flex-row gap-12 justify-center items-center">
        {servicios.map((servicio, index) => (
          <FlipCard key={index} servicio={servicio} animationData={servicio.color} />
        ))}
      </div>
    </section>
  );
}

function FlipCard({ servicio, animationData }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative w-full max-w-sm h-[520px] perspective"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          hovered ? "rotate-y-180" : ""
        }`}
      >
        {/* CARA FRONTAL */}
        <div className={`
          absolute inset-0 backface-hidden 
          bg-white/5 backdrop-blur-md 
          rounded-xl 
           flex flex-col items-center justify-start 
          transition-all duration-500 
          ${hovered 
            ? "border-transparent shadow-[0_0_60px_#00ffff60]" 
            : "border border-cyan-400"}
        `}>
          <div className="w-full h-[320px] flex items-center justify-center mb-2">
            <Lottie
              animationData={animationData}
              loop
              autoplay
              className="h-full w-auto"
            />
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-center text-transparent bg-gradient-to-br from-slate-300 to-slate-400 bg-clip-text neon-blue2">
            {servicio.title}
          </h3>

          <p className="text-gray-300 text-sm text-center leading-relaxed px-2 drop-shadow-[0_1px_4px_rgba(255,255,255,0.1)]">
            {servicio.descripcion}
          </p>
        </div>

        {/* CARA TRASERA */}
        <div className="absolute inset-0 rotate-y-180 backface-hidden bg-[#0b0b0b] border border-white/10 rounded-xl shadow-[0_0_30px_#00ffff20] p-6 flex flex-col justify-center items-center">
          <h4 className="neon-blue2 text-base font-semibold mb-4 text-center drop-shadow-md">Incluye:</h4>
          <ul className="grid grid-cols-1 gap-6 w-full text-center">
            {servicio.items.map((item, idx) => (
              <li
                key={idx}
                className="bg-blue-500/20 border border-cyan-400 rounded-md px-3 py-2 text-sm text-white hover:scale-105 transition shadow-md shadow-cyan-400/20"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


