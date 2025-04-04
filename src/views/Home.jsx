import { useState } from 'react';
import Cabecera from "/src/components/Cabecera";
import FlowingMenu from '/src/components/FlowingMenu';
import ImpulsaMarca from '../components/ImpulsaMarca';
import Lanyard from '/src/components/Lanyard';
import Metodologia from '/src/components/Metodologia';
import BlogPreview from '/src/components/BlogPreview';
import ContactForm from '/src/components/ContactForm'; 
import CarruselIconos from "/src/components/CarruselIconos";
import Footer from '/src/components/Footer';
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
      <section className="bg-black flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 2xl:px-40 py-10 2xl:py-20 min-h-[700px] sm:min-h-[750px] md:min-h-[800px] lg:min-h-[850px] xl:min-h-[900px] 2xl:min-h-[950px]">
        <motion.div
          className="w-full lg:w-2/5 flex flex-col justify-center text-white text-center lg:text-left pt-10 lg:pt-0 pr-0 lg:pr-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-extrabold leading-normal max-w-2xl">
            No tenemos <span className="text-yellow-400">límites</span> a la hora de <span className="text-blue-400">innovar</span> 🚀
          </h2>
          <p className="mt-8 text-lg sm:text-xl 2xl:text-2xl text-neutral-300 max-w-2xl leading-normal">
            En BeeAgency creemos que la creatividad y la tecnología son nuestras mejores aliadas para ayudarte a destacar de forma única y memorable.
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-3/5 h-[600px] sm:h-[650px] lg:h-[700px] xl:h-[750px] 2xl:h-[800px] flex justify-center items-start mt-16 lg:mt-0"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Lanyard position={[0, 1.5, 20]} gravity={[0, -40, 0]} />
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
        <ContactForm />
      </motion.section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;
