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
      className="w-full  mb-48 relative overflow-hidden"
    >
      {/* TÍTULO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mt-40 text-left z-10 ml-10  "
      >
        <div className="font-cinzel uppercase text-3xl md:text-6xl lg:text-6x1 xl:text-8xl leading-tight relative">
          <h2 className="text-color-principal-azul">¿COMO</h2>
          <h2 className="text-color-principal-azul">SON</h2>
          <h2 className="text-color-principal-azul">NUESTROS VALORES?</h2>
        </div>
        <div className="absolute top-2 sm:top-3 lg:top-2 xl:top-3 left-32 sm:left-72 md:left-60 lg:left-64 xl:left-96  h-[20px] sm:h-[30px] lg:h-[50px] w-[40%] bg-color-principal-azul z-0" />
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-55px]  w-[85%] h-[20px] sm:h-[30px] lg:h-[50px] bg-color-principal-azul z-0" />
        <div className="font-inspiration text-[4rem] sm:text-[8rem] md:text-[8rem] lg:text-[13rem] text-color-secundario-amarillo absolute bottom-[-60px] md:bottom-[-120px] lg:bottom-[-200px] ml-40 sm:ml-72 xl:ml-96  z-20">
          Valores
        </div>
      </motion.div>

      {/* TEXTO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex justify-end mt-[100px] sm:mt-[250px] md:mt-[200px] px-10 md:mr-24 sm:px-10 z-10"
      >
        <p className="text-white text-2xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-roboto-slab font-light leading-relaxed max-w-[1000px] text-center">
          Las mejores ideas no se planifican, se descubren. A veces aparecen bailando en una{" "}
          <span
            className="text-color-secundario-amarillo font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={() => handleHover([imagenB1])}
            onMouseLeave={clearImages}
          >
            esquina creativa
          </span>, listas para cambiarlo todo.

          <br /><br />

          La{" "}
          <span
            className="text-color-secundario-amarillo font-inspiration text-[2.6rem] cursor-pointer"
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
