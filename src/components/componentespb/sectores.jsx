import React from "react";
import { motion } from "framer-motion";

// Datos de los sectores
const sectores = [
  {
    nombre: "Inmobiliarias",
    descripcion: "Soluciones digitales para el sector inmobiliario.",
    icono: "/src/assets/fotospb/inmobiliaria.gif",
  },
  {
    nombre: "Hostelería",
    descripcion: "Transformamos la presencia digital en el sector de la hostelería.",
    icono: "/src/assets/fotospb/hosteleria.gif",
  },
  {
    nombre: "Asesorías Jurídicas",
    descripcion: "Digitalización de estrategias para asesorías legales.",
    icono: "/src/assets/fotospb/asesoria-juridica.gif",
  },
  {
    nombre: "Ecommerce",
    descripcion: "Impulsa tus ventas online con estrategias de marketing digital.",
    icono: "/src/assets/fotospb/ecommerce.gif",
  },
];

const SectorCard = ({ sector }) => {
  return (
    <div className="relative w-80 h-80 m-4 p-6 rounded-3xl bg-gradient-to-r from-blue-600 via-yellow-500 to-blue-600 shadow-2xl hover:scale-110 hover:rotate-6 transform transition-all duration-300 flex flex-col justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-3xl"></div>
      <img
        src={sector.icono}
        alt={sector.nombre}
        className="w-20 h-20 mb-6 z-10 transition-transform duration-200 hover:scale-125"
      />
      <h3 className="text-white text-3xl font-bold z-10">{sector.nombre}</h3>
      <p className="text-white text-sm mt-3 z-10">{sector.descripcion}</p>
    </div>
  );
};

const Sectores = () => {
  return (
    <section className="w-full py-24 bg-[#060606] mb-24">
      <div className="text-center mb-16">
        {/* Animación para el título */}
        <motion.h2
          className="text-6xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-500 mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sectores en los que trabajamos
        </motion.h2>

        {/* Animación para el párrafo */}
        <motion.p
          className="text-lg sm:text-2xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Transformamos digitalmente empresas de diferentes sectores para mejorar su presencia y rendimiento online.
        </motion.p>
      </div>

      {/* Contenedor de tarjetas */}
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {sectores.map((sector, index) => (
          <SectorCard key={index} sector={sector} />
        ))}
      </div>
    </section>
  );
};

export default Sectores;
