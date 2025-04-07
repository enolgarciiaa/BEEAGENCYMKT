import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import apretonIcon from "/src/assets/fotospb/apreton-de-manos.png";
import estrellaIcon from "/src/assets/fotospb/estrella.png";
import cursorIcon from "/src/assets/fotospb/cursor.png";
import dianaIcon from "/src/assets/fotospb/diana.png";
import fondoValores from "/src/assets/fondo-seccion3.png";

const valores = [
  {
    icon: estrellaIcon,
    titulo: "Excelencia Creativa",
    texto: "Buscamos la perfección en cada detalle, fusionando innovación, arte y estrategia para dejar huella.",
  },
  {
    icon: apretonIcon,
    titulo: "Relaciones Reales",
    texto: "Forjamos lazos auténticos con cada cliente, basados en confianza, cercanía y compromiso mutuo.",
  },
  {
    icon: cursorIcon,
    titulo: "Estrategia con Impacto",
    texto: "Nada es al azar. Tomamos decisiones estratégicas respaldadas por datos y orientadas a resultados concretos.",
  },
  {
    icon: dianaIcon,
    titulo: "Enfoque al Cliente",
    texto: "Caminamos a tu lado. Escuchamos, proponemos y ejecutamos con el objetivo de hacer crecer tu marca.",
  },
];

export const Feature6 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full min-h-screen sm:min-h-[110vh] md:min-h-[130vh] xl:min-h-[150vh] 2xl:min-h-[160vh] py-16 sm:py-24 flex items-center justify-center bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondoValores})` }}
    >
      <div className="w-full max-w-7xl px-6 flex flex-col gap-14">
        {/* Encabezado */}
        <div className="flex flex-col gap-4 items-center text-center">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="animated-gradient-title text-4xl sm:text-5xl md:text-6xl font-cinzel font-extrabold uppercase tracking-tight text-center drop-shadow-lg">
              ¿Nuestros Valores?
            </h2>
            <p className="text-lg max-w-2xl leading-relaxed text-gray-700 italic font-medium">
              Descubre los principios que nos impulsan a transformar marcas en experiencias inolvidables.
            </p>
          </div>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {valores.map((valor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`bg-gradient-to-br from-blue-900 to-yellow-300 rounded-2xl shadow-lg p-6 flex flex-col justify-start items-center text-center transition-transform duration-300 hover:scale-[1.03] ${
                i === 0 || i === 3 ? "lg:col-span-2" : ""
              } h-[350px] sm:h-[400px] md:h-[460px] lg:h-[520px]`}
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-white drop-shadow-md">
                  {valor.titulo}
                </h3>
                <p className="text-white text-base max-w-md leading-relaxed opacity-95 font-light">
                  {valor.texto}
                </p>
              </div>
              <div className="w-full flex justify-center mt-20">
                <img
                  src={valor.icon}
                  alt={`icono-${valor.titulo.toLowerCase().replace(/\s/g, "-")}`}
                  className="w-28 h-28 sm:w-44 sm:h-44 md:w-48 md:h-48 object-contain drop-shadow-[0_0_15px_rgba(255,255,0,0.8)] brightness-110 saturate-150"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
