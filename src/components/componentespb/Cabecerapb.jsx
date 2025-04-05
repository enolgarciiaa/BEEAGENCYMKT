import { motion } from "framer-motion";
import videoBg from "/src/assets/fotospb/bgvquienes_somos.mp4";
import logoBA from "/src/assets/logoBAheader.png";

export default function Cabecera({ setMenuOpen }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoBg} type="video/mp4" />
        Tu navegador no soporta el video
      </video>

      {/* Logo arriba a la izquierda */}
      <img
        src={logoBA}
        alt="Logo BeeAgency"
        className="absolute top-0 left-6 sm:left-10 z-30 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32"
      />

      {/* Botón menú */}
      <button
        className="absolute top-6 sm:top-8 right-6 z-30 text-white text-3xl sm:text-4xl"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* TÍTULO VISUAL PERSONALIZADO */}
      <motion.div
        className="z-40 px-4 mt-16 sm:mt-24 md:mt-0 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-white font-cinzel text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          <span className="text-white">Be</span>{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-blue-500 text-transparent bg-clip-text animate-text font-extrabold">
            Found
          </span>, <span className="text-white">BeeAgency</span>
        </h1>
        <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
        <p className="text-neutral-300 text-lg sm:text-xl md:text-2xl font-prata max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
          Estrategia, presencia y creatividad. Todo empieza aquí.
        </p>
      </motion.div>
    </section>
  );
}
