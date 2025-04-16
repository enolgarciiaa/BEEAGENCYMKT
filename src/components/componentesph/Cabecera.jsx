import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import videoBg from "/src/assets/fotosph/fondomain.webm";
import tarjetaImg from "/src/assets/fotosph/fondotarjeta.png";
import logoBA from "/src/assets/logoBAheader.png";

const palabras = [
  { texto: "cambio", clase: "text-yellow-400" },
  { texto: "futuro", clase: "text-blue-500" },
];

export default function Cabecera({ setMenuOpen }) {
  const [palabraIndex, setPalabraIndex] = useState(0);
  const [letraIndex, setLetraIndex] = useState(0);
  const [actualPalabra, setActualPalabra] = useState("");
  const [borrando, setBorrando] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const palabra = palabras[palabraIndex].texto;
      if (!borrando) {
        const nuevaPalabra = palabra.substring(0, letraIndex + 1);
        setActualPalabra(nuevaPalabra);
        setLetraIndex((prev) => prev + 1);

        if (nuevaPalabra === palabra) {
          setBorrando(true);
        }
      } else {
        const nuevaPalabra = palabra.substring(0, letraIndex - 1);
        setActualPalabra(nuevaPalabra);
        setLetraIndex((prev) => prev - 1);

        if (nuevaPalabra === "") {
          setBorrando(false);
          setPalabraIndex((prev) => (prev + 1) % palabras.length);
        }
      }
    }, borrando ? 400 : (letraIndex === palabras[palabraIndex].texto.length ? 4000 : 450));

    return () => clearTimeout(timeout);
  }, [letraIndex, borrando, palabraIndex]);

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
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-visible pt-24 pb-[300px]">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls={false}
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none select-none"
      >
        <source src={videoBg} type="video/mp4" />
        Tu navegador no soporta el video
      </video>

      {/* Header con visibilidad dinámica */}
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

      {/* Título central */}
      <div className="w-[95%] max-w-[950px] h-[200px] md:h-[300px] flex flex-col items-center justify-center bg-black/70 border-2 border-white z-40 px-4 mt-48 sm:mt-36 md:mt-28 shadow-lg">
        <h2 className="text-white text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem] font-bold leading-tight">
          Descubre el{" "}
          <span className={`${palabras[palabraIndex].clase}`}>
            {actualPalabra}
          </span>
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-prata mt-4 max-w-3xl">
          En un entorno cada vez más cambiante, la diferencia es la meta.
        </p>
      </div>

      {/* Tarjeta */}
      <div className="hidden md:flex absolute bottom-[-270px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[1050px] h-auto bg-white  shadow-xl flex-col md:flex-row items-center gap-6 p-6 z-30">
        <div
          className="flex flex-col justify-center items-center text-center w-full md:w-2/3 h-full gap-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-cinzel font-semibold text-black leading-snug">
           <span className="text-yellow-500">Agencia</span> de <span className="text-blue-500">Marketing</span> Digital
          </h1>
          <p className="text-black font-light text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Descubre la revolución del Marketing Digital con nosotros integrando las últimas
            tendencias de Inteligencia Artificial, Procesos Automatizados y el lado más humano con
            la creatividad que nos representa.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-4 py-2 text-sm sm:text-base md:text-lg font-ubuntu italic font-light rounded-full bg-yellow-400 text-black hover:bg-blue-500 hover:text-white transition-all duration-700"
            >
            Únete al cambio
          </button>

        </div>

        <div className="w-full md:w-1/3 flex justify-center md:justify-center">
          <img
            src={tarjetaImg}
            alt="movil beeagency"
            className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[180px] xl:w-[200px] 2xl:w-[220px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
