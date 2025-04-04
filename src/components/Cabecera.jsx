import { useEffect, useState } from "react";
import videoBg from "/src/assets/fondomain.webm";
import tarjetaImg from "/src/assets/fondotarjeta.png";
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

  return (
    <section
      className="relative w-full 
        min-h-[600px] sm:min-h-[700px] md:min-h-[800px] 
        lg:min-h-[850px] xl:min-h-[950px] 2xl:min-h-[1000px] 
        flex flex-col items-center justify-center text-center overflow-visible pb-[300px]"
      >
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
        className="absolute top-0 left-10 z-30 w-20 sm:w-24 md:w-28 lg:w-35"
      />

      {/* Botón menú */}
      <button
        className="absolute top-6 right-6 z-30 text-white text-3xl sm:text-4xl "
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </button>

      {/* Título central */}
      <div className="w-[95%] max-w-[950px] h-[200px] md:h-[300px] flex flex-col items-center justify-center bg-black/70 border-2 border-white z-40 px-4 mt-60 md:mt-10 shadow-lg">
        <h2 className="text-white text-[2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] 2xl:text-[5rem] font-cinzel font-normal leading-tight">
          Descubre el{" "}
          <span className={`${palabras[palabraIndex].clase}`}>
            {actualPalabra}
          </span>
        </h2>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-prata mt-4 max-w-3xl">
          En un entorno cada vez más cambiante, la diferencia es la meta.
        </p>
      </div>

      {/* Tarjeta superpuesta – solo visible en tablets y ordenadores */}
      <div className="hidden md:flex absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1050px]  h-[400px] bg-white shadow-xl flex-col md:flex-row items-center gap-6 p-6 z-30 ">
        <div
          className="flex flex-col justify-center items-center text-center w-full md:w-2/3 h-full gap-4"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="3000"
          >
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-cinzel text-black leading-snug">
            Agencia de Marketing Digital
          </h1>
          <p className="text-black font-roboto-slab text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
            Descubre la revolución del Marketing Digital con nosotros integrando las últimas
            tendencias de Inteligencia Artificial, Procesos Automatizados y el lado más humano con
            la creatividad que nos representa.
          </p>
          <button className="px-4 py-2 text-sm sm:text-base md:text-lg font-ubuntu italic font-light rounded-full bg-black border border-black text-white hover:bg-yellow-400 hover:text-black transition-all duration-700">
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
