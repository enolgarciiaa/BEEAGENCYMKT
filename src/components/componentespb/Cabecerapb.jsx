import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import videoBg from "/src/assets/fotospb/bgvquienes_somos.webm";
import fallbackImg from "/src/assets/fotospb/captura-fondobeeagency.png";
import logoBA from "/src/assets/logoBAheader.webp";

export default function Cabecera({ setMenuOpen }) {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);
  }, []);

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
      {/* Fondo: imagen en móviles, vídeo en escritorio */}
      {isMobile ? (
        <img
          src={fallbackImg}
          alt="Fondo BeeAgency móvil"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
        />
      ) : (
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
        >
          <source src={videoBg} type="video/webm" />
          Tu navegador no soporta el video
        </video>
      )}

      {/* Header */}
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

      {/* Título */}
      <motion.div
        className="z-40 px-4 mt-16 sm:mt-24 md:mt-0 flex flex-col items-center gap-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="text-white font-cinzel text-4xl sm:text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          <span className="text-white">Be</span>{" "}
          <span className="text-white font-extrabold">Found</span>,{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-blue-500 text-transparent bg-clip-text animate-text font-extrabold">
            BeeAgency
          </span>
        </h1>
        <div className="w-20 h-1 bg-yellow-400 rounded-full"></div>
      </motion.div>
    </section>
  );
}
