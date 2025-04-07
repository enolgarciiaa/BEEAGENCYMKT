import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import fondoGeneral from "/src/assets/fondo-seccion3.png";
import fondoAsesoria from "/src/assets/fotospb/asesoria-juridica.png";
import fondoEcommerce from "/src/assets/fotospb/ecommerce.png";
import fondoHosteleria from "/src/assets/fotospb/hosteleria.png";
import fondoInmobiliaria from "/src/assets/fotospb/inmobiliaria.png";

const sectores = [
  {
    nombre: "Ecommerce",
    fondo: fondoEcommerce,
    descripcion: "Impulsamos tu tienda online con estrategias que convierten visitas en ventas."
  },
  {
    nombre: "Hostelería",
    fondo: fondoHosteleria,
    descripcion: "Creamos experiencias digitales memorables para bares, restaurantes y hoteles."
  },
  {
    nombre: "Inmobiliaria",
    fondo: fondoInmobiliaria,
    descripcion: "Atrae compradores con campañas visuales que destacan cada propiedad."
  },
  {
    nombre: "Asesoría Jurídica",
    fondo: fondoAsesoria,
    descripcion: "Transmitimos confianza y profesionalidad para captar a tus clientes ideales."
  },
];

export default function SectoresFondoDoble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1 }}
      className="w-full min-h-screen md:min-h-[120vh] xl:min-h-[140vh] 2xl:min-h-[160vh] px-4 sm:px-6 py-20 sm:py-28 flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${fondoGeneral})` }}
    >
      {/* Título estilo valores */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative text-center w-full flex flex-col items-center mb-[150px] sm:mb-[200px] mt-[80px] sm:mt-[100px] px-4"
      >
        <div className="text-[1.5rem] sm:text-[1.6rem] md:text-[3rem] lg:text-[4rem] xl:text-[5rem] 2xl:text-[5.5rem] font-cinzel font-normal uppercase text-blue-900 leading-tight whitespace-nowrap">
          <h2 className="text-sectores">somos nuestros clientes</h2>
        </div>

        <div className="w-full max-w-7xl relative">
          <div className="absolute bottom-[-20px] sm:bottom-[-30px] left-0 w-full h-[20px] sm:h-[40px] bg-blue-900" />
          <div className="font-[Inspiration,cursive] font-medium text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] text-yellow-500 absolute bottom-[-50px] sm:bottom-[-140px] md:bottom-[-100px] xl:bottom-[-130px] left-16 sm:left-44 md:left-32 lg:left-36 xl:left-48 transform -translate-x-1/2 z-[3]">
            Sectores
          </div>
        </div>
      </motion.div>

      {/* Tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full max-w-[1800px] px-4">
        {sectores.map((sector, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="h-[300px] xs:h-[340px] sm:h-[400px] lg:h-[460px] rounded-[2rem] overflow-hidden shadow-xl relative group transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            style={{
              backgroundImage: `url(${sector.fondo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat"
            }}
          >
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300 flex items-center justify-center">
              <div className="text-white text-center px-6">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 tracking-wide drop-shadow-md">
                  {sector.nombre}
                </h3>
                <p className="hidden lg:block text-sm sm:text-base opacity-90 font-light">
                  {sector.descripcion}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
