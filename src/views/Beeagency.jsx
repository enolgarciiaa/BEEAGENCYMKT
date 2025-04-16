import { useState, useEffect, lazy, Suspense } from 'react';
import Cabecera from '/src/components/componentespb/Cabecerapb';
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import CustomCursor from "/src/components/CustomCursor";
import { motion } from "framer-motion"; 

const TextoCreativo = lazy(() => import('/src/components/componentespb/TextoCreativo'));
const SectoresFondoDoble = lazy(() => import('/src/components/componentespb/SectoresFondoDoble'));
const Ribbons = lazy(() => import('/src/components/componentespb/Ribbons'));
const Nuestrosvalores = lazy(() => import('/src/components/componentespb/Nuestrosvalores'));
const ContactoBee = lazy(() => import('/src/components/componentespb/ContactoBee'));

const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5', target: '_blank' }
];

function Beeagency() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section-cita");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setIsInView(rect.top <= window.innerHeight && rect.bottom >= 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full m-0 p-0 text-center overflow-x-hidden">
      <Cabecera setMenuOpen={setMenuOpen} />

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

      <Suspense fallback={null}>
        <TextoCreativo />
        <SectoresFondoDoble />
        <section className="relative w-full min-h-screen md:min-h-[120vh] xl:min-h-[140vh] overflow-hidden bg-black">
          <Ribbons
            baseThickness={30}
            colors={['#FFD100']}
            speedMultiplier={0.5}
            maxAge={500}
            enableFade={false}
            enableShaderEffect={true}
          />

          <motion.div
            id="section-cita"
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 py-8 z-10"
            initial={{ opacity: 0, y: 100 }}
            animate={{
              opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 100,
            }}
            transition={{ duration: 1.5 }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-500 italic drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]">
              "El marketing digital es la clave para conectar marcas con personas en la era moderna."
            </p>
            <p className="text-xl sm:text-2xl mt-4 font-light text-gray-400">
              - Expertos en Marketing Digital
            </p>
          </motion.div>
        </section>
        <Nuestrosvalores />
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <ContactoBee />
        </motion.section>
      </Suspense>

      <Footer />
      <ScrollToTopButton />
      <CustomCursor />
    </div>
  );
}

export default Beeagency;