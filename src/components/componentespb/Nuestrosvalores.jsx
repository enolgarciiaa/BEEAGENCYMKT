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

  const handleHover = (images, event) => {
    const mouseY = event.clientY;

    const randomized = images.map((src) => ({
      src,
      rotation: getRandomRotation(),
      key: crypto.randomUUID(),
      y: mouseY,
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
      className="w-full relative overflow-hidden"
    >
      {/* TÍTULO CENTRADO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mt-40 text-left z-10 ml-10"
      >
        <div className="text-3xl md:text-6xl lg:text-7xl xl:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          <h2 className="">¿COMO</h2>
          <h2 className="">SON</h2>
          <h2 className="neon-blue">NUESTROS VALORES?</h2>
        </div>
        <div className="absolute top-2 sm:top-3 lg:top-2 xl:top-3 left-28 sm:left-72 md:left-60 lg:left-72 xl:left-72 h-[20px] sm:h-[30px] lg:h-[50px] w-[40%] neon-button-cyan z-0" />
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-55px] w-[90%] xl:w-[70%] h-[20px] sm:h-[30px] lg:h-[50px] neon-button-cyan z-0" />
        <div className="font-inspiration text-[4rem] sm:text-[8rem] md:text-[8rem] lg:text-[13rem] text-white absolute bottom-[-60px] md:bottom-[-120px] lg:bottom-[-200px] ml-40 sm:ml-72 xl:ml-96 z-20">
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
        <p className="text-white text-2xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-roboto-slab font-light leading-relaxed max-w-[1000px] text-center">
          Nuestros valores no están escritos en mármol, están vivos en cada{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={(e) => handleHover([imagenB1], e)}
            onMouseLeave={clearImages}
          >
            decisión valiente
          </span>{" "}
          que tomamos. Son el pulso que guía cada proyecto y la base de todo lo que creamos.

          <br /><br />

          La{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={(e) => handleHover([imagenB2], e)}
            onMouseLeave={clearImages}
          >
            autenticidad
          </span>{" "}
          no es una meta, es una actitud. Defendemos las ideas con alma, el trabajo con propósito y las relaciones construidas desde la confianza.

          <br /><br />

          Creemos en la colaboración real, en escuchar antes de hablar y en sumar talentos que se complementan, no que compiten. Aquí, la innovación y la empatía se dan la mano para construir algo que importe.

          <br /><br />

          Porque lo que nos mueve no es solo hacer campañas bonitas, sino provocar un impacto positivo. Nuestro valor más fuerte: hacer las cosas con sentido.
        </p>
      </motion.div>

      {/* IMÁGENES FLOTANTES A LA ALTURA DEL MOUSE PERO A LA IZQUIERDA */}
      {floatingImages.length > 0 && (
        <>
          {floatingImages.map((img) => (
            <img
              key={img.key}
              src={img.src}
              className="fixed z-50 w-[500px] pointer-events-none drop-shadow-xl transition-opacity duration-300"
              style={{
                top: `${img.y}px`,
                left: "40px",
                transform: `translateY(-50%) rotate(${img.rotation})`,
              }}
            />
          ))}
        </>
      )}
    </motion.section>
  );
}
