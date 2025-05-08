import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import imagenB1 from "/src/assets/fotospb/imagenB1.jpg";
import imagenB2 from "/src/assets/fotospb/imagenB2.jpg";

function getRandomRotation() {
  return `${Math.floor(Math.random() * 50 - 25)}deg`;
}

export default function TextoCreativo() {
  const [floatingImages, setFloatingImages] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleHover = (images) => {
    const randomized = images.map((src) => ({
      src,
      rotation: getRandomRotation(),
      key: crypto.randomUUID(),
    }));
    setFloatingImages(randomized);
  };

  const clearImages = () => setFloatingImages([]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full   relative  overflow-hidden"
    >
      {/* TÍTULO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mt-40 text-left z-10 ml-10  "
      >
       <div className="text-3xl md:text-6xl lg:text-7xl xl:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          <h2 className="">¿COMO</h2>
          <h2 className="">SON</h2>
          <h2 className="neon-blue">NUESTROS VALORES?</h2>
        </div>
        <div className="absolute top-2 sm:top-3 lg:top-2 xl:top-3 left-28 sm:left-72 md:left-60 lg:left-72 xl:left-72  h-[20px] sm:h-[30px] lg:h-[50px] w-[40%] neon-button-cyan z-0" />
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-55px]  w-[85%] xl:w-[70%] h-[20px] sm:h-[30px] lg:h-[50px] neon-button-cyan z-0" />
        <div className="font-inspiration text-[4rem] sm:text-[8rem] md:text-[8rem] lg:text-[13rem] neon-blue absolute bottom-[-60px] md:bottom-[-120px] lg:bottom-[-200px] ml-40 sm:ml-72 xl:ml-96  z-20">
          Valores
        </div>
      </motion.div>

      {/* TEXTO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex justify-center 2xl:ml-[800px] mb-32 mt-[100px] sm:mt-[250px] md:mt-[200px] px-10 z-10"
      >
        <p className="text-white text-2xl  sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-roboto-slab font-light leading-relaxed max-w-[1000px] text-center">
          Las mejores ideas no se planifican, se descubren. A veces aparecen bailando en una{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={() => handleHover([imagenB1])}
            onMouseLeave={clearImages}
          >
            esquina creativa
          </span>, listas para cambiarlo todo.

          <br /><br />

          La{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={() => handleHover([imagenB2])}
            onMouseLeave={clearImages}
          >
            energía
          </span>{" "}
          no está solo en las personas. Está en las salas de reuniones con post-its volando, en las pizarras llenas de flechas y en las conversaciones absurdas que terminan siendo geniales.

          <br /><br />

          La creatividad no tiene límites, y en nuestro equipo siempre estamos buscando nuevas formas de pensar. Creemos que cada idea es una oportunidad para transformar el futuro, para desafiar lo establecido y para inspirar a otros a hacer lo mismo.
        </p>
      </motion.div>

      {/* IMÁGENES FLOTANTES */}
      {floatingImages.length > 0 && (
        <div className="absolute z-50 top-[50%] left-[10%] w-[320px] sm:w-[420px] lg:w-[500px] pointer-events-none select-none opacity-0 scale-75 animate-fade-in-fast drop-shadow-xl">
          {floatingImages.map((img) => (
            <img
              key={img.key}
              src={img.src}
              className="w-full"
              style={{ transform: `rotate(${img.rotation})` }}
            />
          ))}
        </div>
      )}
    </motion.section>
  );
}
