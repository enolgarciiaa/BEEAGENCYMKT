import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import imagenB1 from "/src/assets/fotospb/imagenB1.jpg";
import imagenB2 from "/src/assets/fotospb/imagenB2.jpg";

// Rotación aleatoria entre -25 y +25 grados con 'deg'
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
      className="w-full mb-48 relative overflow-hidden"
    >
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-6 mt-24 text-left z-10 lg:ml-20"
      >
        <div className="font-cinzel uppercase text-3xl md:text-6xl lg:text-8xl leading-tight relative">
          <h2 className="text-color-principal-azul">¿QUIERES</h2>
          <h2 className="text-color-principal-azul">UNIRTE A</h2>
          <h2 className="text-color-principal-azul">NUESTRO EQUIPO?</h2>
        </div>
        <div className="absolute top-2 lg:top-4 left-[150px] sm:left-[290px] lg:left-[450px] h-[20px] sm:h-[30px] lg:h-[50px] w-[40%] bg-color-principal-azul z-0" />
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-55px] left-0 w-[90%] lg:w-[100%] h-[20px] sm:h-[30px] lg:h-[50px] bg-color-principal-azul z-0" />
        <div className="font-inspiration text-[4rem] sm:text-[8rem] md:text-[8rem] lg:text-[13rem] text-color-secundario-amarillo absolute bottom-[-60px] md:bottom-[-120px] lg:bottom-[-200px] left-10 z-20">
          Equipo
        </div>
      </motion.div>

      {/* TEXTO A LA DERECHA */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex sm:justify-center mt-[100px] sm:mt-[250px] md:mt-[200px] px-10 z-10"
      >
        <p className="text-white text-2xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-roboto-slab font-light leading-relaxed max-w-[1000px] text-center md:text-center lg:text-center lg:mt-10 lg:ml-auto lg:mr-20">
          Las mejores ideas no se planifican, se descubren. A veces aparecen bailando en una {" "}
          <span
            className="text-color-secundario-amarillo font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={() => handleHover([imagenB1])}
            onMouseLeave={clearImages}
          >
            esquina creativa
          </span>, listas para cambiarlo todo.

          <br /><br />

          La {" "}
          <span
            className="text-color-secundario-amarillo font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={() => handleHover([imagenB2])}
            onMouseLeave={clearImages}
          >
            energía
          </span> {" "}
          no está solo en las personas. Está en las salas de reuniones con post-its volando, en las pizarras llenas de flechas y en las conversaciones absurdas que terminan siendo geniales.

          <br /><br />

          Porque aquí, incluso una {" "}
          <span
            className="border border-color-secundario-amarillo text-color-secundario-amarillo rounded-full px-4 cursor-pointer"
            onMouseEnter={() => handleHover([imagenB1])}
            onMouseLeave={clearImages}
          >
            bola disco
          </span> {" "}
          puede ser la chispa que encienda tu próxima gran campaña.

          <br /><br />

          La creatividad no tiene límites, y en nuestro equipo siempre estamos buscando nuevas formas de pensar. Creemos que cada idea es una oportunidad para transformar el futuro, para desafiar lo establecido y para inspirar a otros a hacer lo mismo.
        </p>
      </motion.div>

      {/* IMÁGENES A LA IZQUIERDA Y SIEMPRE TORCIDAS */}
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