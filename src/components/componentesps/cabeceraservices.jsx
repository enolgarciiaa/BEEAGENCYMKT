import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import videoBg from "/src/assets/fotosps/coverr-timelapse-using-social-media-1556-1080p.mp4";
import logoBA from "/src/assets/logoBAheader.png";

export default function CabeceraServices({ setMenuOpen }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHasScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Fondo video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={videoBg} type="video/mp4" />
        Tu navegador no soporta el video
      </video>

      {/* Header con comportamiento scroll */}
      <div className={`
        fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50 transition-all duration-500
        ${hasScrolled ? 'bg-gradient-to-r from-[#0f0f0f]/80 to-[#1e1e1e]/80 backdrop-blur-md shadow-md' : ''}
        ${showHeader ? 'translate-y-0' : '-translate-y-full'}
      `}>
        <img
          src={logoBA}
          alt="Logo BeeAgency"
          className="w-12 sm:w-16 md:w-20 lg:w-24"
        />
        <button
          className="text-white text-3xl sm:text-4xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* Título principal actualizado */}
      <motion.div
        className="z-40 px-4 mt-16 sm:mt-24 md:mt-0 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="font-cinzel text-4xl sm:text-5xl md:text-6xl text-white font-bold leading-tight drop-shadow-md">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-transparent bg-clip-text">
            Servicios digitales
          </span>{" "}
          que conectan,<br />convierten y construyen marca.
        </h1>

        <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>

        <p className="text-neutral-300 text-base sm:text-lg font-prata max-w-xl drop-shadow-sm">
          Elige estrategia, diseño y resultados reales.
        </p>
      </motion.div>
    </section>
  );
}
