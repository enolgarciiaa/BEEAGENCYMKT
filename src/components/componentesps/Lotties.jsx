import { motion } from "framer-motion";
import Lottie from "lottie-react";
import lottieAmarillo from "/src/data/lotties/lottie-amarillo.json";
import lottieAzul from "/src/data/lotties/lottie-azul.json";
import lottieAzul2 from "/src/data/lotties/lottie-azul2.json";
import fondoSeccion from "/src/assets/fondo-seccion3.png";

const servicios = [
  {
    title: "Desarrollo Web",
    color: lottieAzul2,
    descripcion:
      "Creamos sitios que combinan funcionalidad, diseño y posicionamiento para ayudarte a destacar. Adaptamos cada proyecto al objetivo del cliente, desde páginas informativas hasta plataformas de venta avanzadas. Utilizamos tecnologías modernas y buenas prácticas para asegurar rendimiento, usabilidad y resultados.",
    items: ["Ecommerce", "Webs Corporativas", "SEO y SEM", "Empresas"],
  },
  {
    title: "Consultoría de Negocio",
    color: lottieAmarillo,
    descripcion:
      "Analizamos, planificamos y trazamos estrategias digitales enfocadas en resultados reales. Acompañamos a tu marca en su evolución digital mediante auditorías completas, planes de marketing personalizados y automatizaciones que optimizan tu tiempo y recursos.",
    items: ["Auditoría Digital", "Plan de Marketing", "Automatización", "Consultoría"],
  },
  {
    title: "Branding & Identidad",
    color: lottieAzul,
    descripcion:
      "Transformamos ideas en marcas con propósito. Creamos una identidad visual coherente y auténtica que conecta con tu audiencia. Desde el logo y la paleta de colores, hasta la voz y el tono de la marca en redes sociales y materiales gráficos.",
    items: ["Social Media", "Diseño Gráfico", "Estrategia de Comunicación"],
  },
];

export default function LottiesSection() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-36 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${fondoSeccion})` }}
    >
      <div className="max-w-7xl mx-auto text-center mb-24 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-md"
        >
          Lo que <span className="text-blue-400">hacemos</span> por tu <span className="text-yellow-500">marca</span>
        </motion.h2>
        <p className="mt-6 text-xl sm:text-2xl text-gray-800 max-w-4xl mx-auto font-light leading-relaxed">
          Soluciones creativas, tecnológicas y estratégicas que impulsan la identidad digital, la conexión con tu audiencia y el crecimiento real de tu negocio.
        </p>
      </div>

      <div className="-space-y-1 md:space-y-32">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""} items-center gap-12 lg:gap-20`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <a href="/contact" className="flex-1 w-full max-w-[800px] mx-auto lg:mx-0 -mb-20">
              <div className="w-full">
                <Lottie animationData={servicio.color} loop autoplay />
              </div>
            </a>

            <div className="flex-1 flex flex-col text-center lg:text-left w-full max-w-3xl mx-auto lg:mx-0">
              <a href="/contact">
                <h3 className="text-3xl sm:text-5xl font-bold mb-4 mt-20 lg:mt-0 hover:text-yellow-400 transition-colors">
                  {servicio.title === "Desarrollo Web" && (
                    <>
                      <span className="text-gray-900">Desarrollo </span>
                      <span className="text-blue-500">Web</span>
                    </>
                  )}
                  {servicio.title === "Consultoría de Negocio" && (
                    <>
                      <span className="text-gray-900">Consultoría de </span>
                      <span className="text-yellow-500">Negocio</span>
                    </>
                  )}
                  {servicio.title === "Branding & Identidad" && (
                    <>
                      <span className="text-blue-500">Branding </span>
                      <span className="text-yellow-500">& Identidad</span>
                    </>
                  )}
                </h3>
              </a>

              <p className="text-gray-700 text-base sm:text-3xl mb-6 italic">
                {servicio.descripcion}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-800 font-medium justify-center lg:justify-start">
                {servicio.items.map((item, idx) => (
                  <li key={idx} className="before:content-['✔'] before:text-yellow-400 before:mr-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
