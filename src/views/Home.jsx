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
import CustomCursor from "/src/components/CustomCursor";
import CookieBanner from "/src/components/CookieBanner";
import { motion } from "framer-motion";


const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5', target: '_blank' }
];


function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    
    <div className="w-full overflow-x-hidden">
      <CookieBanner />
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
      <section className="w-full overflow-visible flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 xl:pl-20 2xl:pl-32 py-12 sm:py-20 lg:py-28 2xl:py-32 mt-28 min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[900px] 2xl:min-h-[950px]">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Texto */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left text-white">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-extrabold leading-snug max-w-2xl mx-auto lg:mx-0">
              No tenemos <span className="text-yellow-400">límites</span> a la hora de <span className="text-blue-400">innovar</span> 🚀
            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              En BeeAgency creemos que la creatividad y la tecnología son nuestras mejores aliadas para ayudarte a destacar de forma única y memorable.
            </p>
          </div>

          {/* Lanyard */}
          <div className="w-full lg:w-3/5 h-[500px] sm:h-[600px] md:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px] mt-12 lg:mt-0 flex justify-center items-center">
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

      <CustomCursor />

    </div>
  );
}

export default Home;
