import { motion } from "framer-motion";
import NavBar from "/src/components/NavBar";

export default function Blog() {
  return (
    
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24 bg-gradient-to-b from-black via-[#0e0e10] to-black text-white relative overflow-hidden">
      <NavBar />
      {/* Encabezado con animación */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight neon-blue bg-clip-text text-transparent drop-shadow-[0_1px_15px_rgba(255,255,0,0.2)]"
      >
        Blog en mantenimiento
      </motion.h1>

      {/* Texto descriptivo */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
      >
        Estamos preparando contenido útil, innovador y estratégico para potenciar tu marca digital.
        <br className="hidden sm:inline" /> ¡Muy pronto disponible!
      </motion.p>

      {/* Fecha */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-12 text-sm sm:text-base text-gray-500 italic"
      >
        Última actualización: abril 2025
      </motion.div>
    </section>
  );
}
