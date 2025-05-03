import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fondoAsesoria from "/src/assets/fotospb/asesoria-juridica.png";
import fondoEcommerce from "/src/assets/fotospb/ecommerce.png";
import fondoHosteleria from "/src/assets/fotospb/hosteleria.png";
import fondoInmobiliaria from "/src/assets/fotospb/inmobiliaria.png";

const sectores = [
  {
    nombre: "Ecommerce",
    fondo: fondoEcommerce,
    descripcion: "Impulsamos tu tienda online con estrategias que convierten visitas en ventas."
  },
  {
    nombre: "Hostelería",
    fondo: fondoHosteleria,
    descripcion: "Creamos experiencias digitales memorables para bares, restaurantes y hoteles."
  },
  {
    nombre: "Inmobiliaria",
    fondo: fondoInmobiliaria,
    descripcion: "Atrae compradores con campañas visuales que destacan cada propiedad."
  },
  {
    nombre: "Asesoría Jurídica",
    fondo: fondoAsesoria,
    descripcion: "Transmitimos confianza y profesionalidad para captar a tus clientes ideales."
  },
];

export default function SectoresFondoDoble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="relative w-full min-h-screen px-4 sm:px-6 py-20 sm:py-28 flex flex-col items-center justify-start text-white overflow-hidden"
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative text-center w-full flex flex-col items-center mb-32 mt-20 px-4 z-10"
      >
        <div className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          <h2>SOMOS NUESTROS <span className="neon-blue">CLIENTES</span></h2>
        </div>

        <div className="w-full max-w-7xl relative">
          <div className="absolute bottom-[-20px] sm:bottom-[-40px] left-24 xl:w-[85%] h-[20px] sm:h-[40px] neon-button-cyan" />
          <div className="font-[Inspiration,cursive] neon-blue font-medium text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] text-black absolute bottom-[-50px] sm:bottom-[-140px] md:bottom-[-100px] xl:bottom-[-130px] left-16 sm:left-44 md:left-32 lg:left-36 xl:left-48 transform -translate-x-1/2 z-[3]">
            Sectores
          </div>
        </div>
      </motion.div>

      {/* Tarjetas */}
      <div className="z-10 grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1800px] px-4">
        {sectores.map((sector, index) => (
          <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl p-6 w-full max-w-sm mx-auto flex flex-col items-center transition duration-500 transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] hover:border-cyan-400 border border-transparent group"
        >
          <img
            src={sector.fondo}
            alt={sector.nombre}
            className="rounded-xl w-full max-w-[300px] aspect-square object-cover mb-6 border-2 border-cyan-400 shadow-lg shadow-cyan-500/40 transition duration-300"
          />
          <h3 className="text-xl font-semibold mb-2 text-center bg-gradient-to-br from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_1px_6px_rgba(0,255,255,0.3)]">
            {sector.nombre}
          </h3>
          <p className="text-gray-300 text-sm text-center leading-relaxed drop-shadow-[0_1px_4px_rgba(0,255,255,0.15)]">
            {sector.descripcion}
          </p>
        </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
