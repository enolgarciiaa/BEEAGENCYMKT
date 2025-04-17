import { useState, Suspense, useEffect, lazy } from 'react';
import Cabecera from "/src/components/componentesph/Cabecera";
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import CustomCursor from "/src/components/CustomCursor";
import { motion } from "framer-motion";

const ImpulsaMarca = lazy(() => import('/src/components/componentesph/ImpulsaMarca'));
const Metodologia = lazy(() => import('/src/components/componentesph/Metodologia'));
const BlogPreview = lazy(() => import('/src/components/componentesph/BlogPreview'));
const Contacto = lazy(() => import('/src/components/componentesph/Contacto'));
const CarruselIconos = lazy(() => import('/src/components/componentesph/CarruselIconos'));

const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5', target: '_blank' }
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(null);
  const [LanyardComponent, setLanyardComponent] = useState(null);

  useEffect(() => {
    const isWideScreen = window.innerWidth >= 768;
    setIsDesktop(isWideScreen);
    if (isWideScreen) {
      import('/src/components/componentesph/Lanyard').then(mod => {
        setLanyardComponent(() => mod.default);
      });
    }
  }, []);

  if (isDesktop === null) return null;
  if (!isDesktop) return null; // Evita mostrarlo en móvil

  return (
    <div className="w-full overflow-x-hidden">
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
        <ImpulsaMarca />
      </Suspense>

      <section className="w-full overflow-visible flex flex-col items-center px-10 xl:pl-20 2xl:pl-32 py-12 sm:py-20 lg:py-28 2xl:py-32 mt-28 min-h-[800px]">
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 xl:gap-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left text-white">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl font-extrabold leading-snug max-w-2xl mx-auto lg:mx-0">
              No tenemos <span className="text-yellow-400">límites</span> a la hora de <span className="text-blue-400">innovar</span> 🚀
            </h2>
            <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              En BeeAgency creemos que la creatividad y la tecnología son nuestras mejores aliadas para ayudarte a destacar de forma única y memorable.
            </p>
          </div>

          <div className="w-full lg:w-3/5 h-[700px] xl:h-[750px] 2xl:h-[800px] mt-12 lg:mt-0 flex justify-center items-center">
            <Suspense fallback={null}>
              {LanyardComponent && <LanyardComponent position={[0, 1.5, 20]} gravity={[0, -40, 0]} />}
            </Suspense>
          </div>
        </motion.div>
      </section>

      <Suspense fallback={null}>
        <Metodologia />
      </Suspense>

      <Suspense fallback={null}>
        <CarruselIconos />
      </Suspense>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Suspense fallback={null}>
          <BlogPreview />
        </Suspense>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Suspense fallback={null}>
          <Contacto />
        </Suspense>
      </motion.section>

      <Footer />
      <CustomCursor />
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
