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
      {/* TÍTULO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-6 text-left z-10 lg:ml-20"
      >
        <div className="text-3xl mt-20 md:text-6xl lg:text-7xl xl:text-7xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          <h2>¿QUIERES</h2>
          <h2>UNIRTE A</h2>
          <h2 className="neon-blue">NUESTRO EQUIPO?</h2>
        </div>
        <div className="absolute top-2 sm:top-3  lg:top-4 xl:top-3 left-[155px] sm:left-[300px] lg:left-[370px] h-[20px] sm:h-[30px] lg:h-[50px] w-[40%] neon-button-cyan z-0" />
        <div className="absolute bottom-[-20px] sm:bottom-[-30px] lg:bottom-[-55px] left-0 w-[90%] lg:w-[80%] h-[20px] sm:h-[30px] lg:h-[50px] neon-button-cyan z-0" />
        <div className="font-inspiration text-[4rem] sm:text-[8rem] md:text-[8rem] lg:text-[13rem] text-white absolute bottom-[-60px] md:bottom-[-120px] lg:bottom-[-200px] left-10 z-20">
          Equipo
        </div>
      </motion.div>

      {/* TEXTO */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: true }}
        className="relative flex sm:justify-center mb-36 mt-[100px] sm:mt-[250px] md:mt-[200px] px-10 z-10"
      >
        <p className="text-white text-2xl sm:text-[2rem] md:text-[2.3rem] lg:text-[2.5rem] font-roboto-slab font-light leading-relaxed max-w-[1000px] text-center md:text-center lg:text-center lg:mt-10 xl:text-center 2xl:ml-[800px] ">
          Los mejores talentos no se buscan, se atraen. A veces aparecen cruzando una{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={(e) => handleHover([imagenB1], e)}
            onMouseLeave={clearImages}
          >
            puerta luminosa
          </span>, trayendo consigo una forma distinta de ver el mundo.

          <br /><br />

          La{" "}
          <span
            className="neon-blue font-inspiration text-[2.6rem] cursor-pointer"
            onMouseEnter={(e) => handleHover([imagenB2], e)}
            onMouseLeave={clearImages}
          >
            chispa
          </span>{" "}
          no está solo en las ideas. Vive en las charlas improvisadas, en los cafés compartidos y en los “¿y si probamos esto?” que terminan siendo inolvidables.

          <br /><br />

          Porque aquí, incluso una{" "}
          <span
            className="border neon-blue  rounded-full px-4 cursor-pointer"
            onMouseEnter={(e) => handleHover([imagenB1], e)}
            onMouseLeave={clearImages}
          >
            servilleta garabateada
          </span>{" "}
          puede contener la próxima revolución creativa.

          <br /><br />

          No buscamos personas perfectas, buscamos mentes inquietas. En nuestro equipo, cada nueva incorporación es una nueva posibilidad de romper moldes, cuestionar normas y dejar una huella luminosa en lo que hacemos.
        </p>
      </motion.div>

      {/* IMÁGENES FLOTANTES A LA ALTURA DEL RATÓN, PERO A LA IZQUIERDA */}
      {floatingImages.length > 0 && (
        <>
          {floatingImages.map((img) => (
            <img
              key={img.key}
              src={img.src}
              className="fixed z-50 w-[500px] pointer-events-none drop-shadow-xl transition-opacity duration-300"
              style={{
                top: `${img.y}px`,
                left: "40px", // siempre a la izquierda de la pantalla
                transform: `translateY(-50%) rotate(${img.rotation})`,
              }}
            />
          ))}
        </>
      )}
    </motion.section>
  );
}
