import { useState } from 'react';
import Cabecera from "/src/components/componentesph/Cabecera";
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import ImpulsaMarca from '/src/components/componentesph/ImpulsaMarca';
import Lanyard from '/src/components/componentesph/Lanyard';
import Metodologia from '/src/components/componentesph/Metodologia';
import BlogPreview from '/src/components/componentesph/BlogPreview';
import Contacto from '/src/components/componentesph/Contacto'
import CarruselIconos from "/src/components/componentesph/CarruselIconos";
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import { motion } from "framer-motion";


const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5' }
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      {/* CABECERA NUEVA */}
      <Cabecera setMenuOpen={setMenuOpen} />

      {/* MENÚ FULLSCREEN */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-4xl sm:text-5xl z-50"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="w-full h-full flex items-center justify-center px-4">
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      )}

      
      {/* SECCIÓN 3: CARRUSEL */}
      <ImpulsaMarca />

      {/* SECCIÓN 4: LANYARD */}
      <section className="bg-[#060606] overflow-visible flex flex-col lg:flex-row items-center justify-between  px-3 pr-0 md:pl-10 md:pr-0 lg:pl-20 lg:pr-0 2xl:pl-30 2xl:pr-0 py-10 2xl:py-20 mt-28 min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[900px] 2xl:min-h-[950px]">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-2/5 flex flex-col px-3 justify-center text-white text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-extrabold leading-normal max-w-2xl">
              No tenemos <span className="text-yellow-400">límites</span> a la hora de <span className="text-blue-400">innovar</span> 🚀
            </h2>
            <p className="mt-8 text-lg sm:text-xl 2xl:text-2xl text-neutral-300 max-w-2xl leading-normal">
              En BeeAgency creemos que la creatividad y la tecnología son nuestras mejores aliadas para ayudarte a destacar de forma única y memorable.
            </p>
          </div>

          <div className="w-full lg:w-3/5 h-[600px] sm:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px] mt-10 flex justify-center items-center overflow-visible">
            <Lanyard position={[0, 1.5, 20]} gravity={[0, -40, 0]} />
          </div>
        </motion.div>
      </section>


      {/* SECCIÓN 5: METODOLOGÍA */}
      <Metodologia />

      {/* SECCIÓN 6: CARRUSEL ICONOS */}
      <CarruselIconos />

      {/* SECCIÓN 7: BLOG PREVIEW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <BlogPreview />
      </motion.section>

      {/* SECCIÓN 8: CONTACTO */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Contacto />
      </motion.section>

      {/* FOOTER */}
      <Footer />

      <ScrollToTopButton />
    </div>
  );
}

export default Home;
