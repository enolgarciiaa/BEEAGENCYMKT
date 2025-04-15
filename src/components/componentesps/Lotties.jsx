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
    descripcion:
      "Creamos sitios que combinan funcionalidad, diseño visual y posicionamiento SEO para ayudarte a destacar en internet. Desde webs corporativas hasta ecommerce avanzados. Siempre enfocados en la conversión, el rendimiento y la experiencia de usuario.",
    items: ["Ecommerce", "Webs Corporativas", "SEO y SEM", "Landing Pages"],
  },
  {
    title: "Consultoría de Negocio",
    color: lottieAmarillo,
    descripcion:
      "Auditorías, planificación estratégica y automatización para impulsar tu crecimiento digital. Analizamos tu negocio, creamos un plan personalizado y lo ejecutamos contigo paso a paso para lograr resultados reales.",
    items: ["Auditoría Digital", "Plan de Marketing", "Automatización", "Consultoría Estratégica"],
  },
  {
    title: "Branding & Identidad",
    color: lottieAzul,
    descripcion:
      "Diseñamos marcas con coherencia, personalidad y propósito. Cuidamos cada detalle visual y verbal para crear una identidad única que conecte con tu público objetivo en todos los canales digitales.",
    items: ["Social Media", "Diseño Gráfico", "Naming y Voz", "Manual de Marca"],
  },
];

export default function LottiesSection() {
  return (
    <section className="w-full py-10 px-6 sm:px-8 lg:px-24  text-white relative overflow-hidden">
      {/* Título principal */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl mt-32 font-extrabold leading-tight tracking-tight"
        >
          Lo que <span className="text-blue-400">hacemos</span> por tu{" "}
          <span className="text-yellow-400">marca</span>
        </motion.h2>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
          Soluciones creativas, tecnológicas y estratégicas que impulsan tu presencia digital con visión de futuro.
        </p>
      </div>

      {/* Servicios */}
      <div className="relative z-10 space-y-32">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className={`flex flex-col ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16 lg:gap-20 animate-[float_8s_ease-in-out_infinite]`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Lottie Animation */}
            <div className="flex-1 w-full max-w-[800px] mx-auto lg:mx-0">
              <Lottie animationData={servicio.color} loop autoplay />
            </div>

            {/* Flip Card */}
            <FlipCard servicio={servicio} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function FlipCard({ servicio }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-1 w-full max-w-3xl mx-auto lg:mx-0 perspective min-h-[500px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          hovered ? "rotate-y-180" : ""
        }`}
      >
        {/* Cara frontal */}
        <div className="absolute w-full h-full backface-hidden p-6 lg:p-8">
          <h3 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {servicio.title.includes("Web") && (
              <>
                <span className="text-white">Desarrollo </span>
                <span className="text-blue-400">Web</span>
              </>
            )}
            {servicio.title.includes("Consultoría") && (
              <>
                <span className="text-white">Consultoría de </span>
                <span className="text-yellow-400">Negocio</span>
              </>
            )}
            {servicio.title.includes("Branding") && (
              <>
                <span className="text-blue-400">Branding </span>
                <span className="text-yellow-400">& Identidad</span>
              </>
            )}
          </h3>
          <p className="text-gray-300 text-lg sm:text-xl md:text-2xl italic leading-relaxed">
            {servicio.descripcion}
          </p>
        </div>

        {/* Cara trasera */}
        <div className="absolute w-full  rotate-y-180 backface-hidden p-6 lg:p-8 bg-[#0b0b0b] border border-white/10 rounded-xl flex flex-col items-start justify-center shadow-xl">
          <h4 className="text-2xl font-bold mb-6 text-yellow-400">Incluye:</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {servicio.items.map((item, idx) => (
              <li
                key={idx}
                className="bg-blue-500 font-semibold rounded-md px-4 py-3 text-center text-white hover:scale-105 transition transform duration-300 shadow-md"
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
