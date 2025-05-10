import { useState, useEffect, Suspense, lazy } from 'react';
import { motion } from "framer-motion";
import NavBar from "/src/components/NavBar";
import { HeroParallax } from "/src/components/componentespb/HeroParallax";
import HeroParallaxMobile from "/src/components/componentespb/HeroParallaxMobile";
import SectoresFondoDoble from '/src/components/componentespb/SectoresFondoDoble';
import Footer from "/src/components/Footer";
import ScrollToTopButton from "/src/components/ScrollToTopButton";

// ✅ Importa las imágenes correctamente para producción
import white1 from '/src/assets/fotospb/BA_Version_White.png';
import black1 from '/src/assets/fotospb/BA_Version_Black.png';

// Lazy-loaded componentes
const TextoCreativo = lazy(() => import('/src/components/componentespb/TextoCreativo'));
const Nuestrosvalores = lazy(() => import('/src/components/componentespb/Nuestrosvalores'));
const ContactoBee = lazy(() => import('/src/components/componentespb/ContactoBee'));

// Lista de productos para HeroParallax
const products = [
  { title: "Poner Imagen 1", thumbnail: white1 },
  { title: "Poner Imagen 2", thumbnail: black1 },
  { title: "Poner Imagen 3", thumbnail: white1 },
  { title: "Poner Imagen 4", thumbnail: black1 },
  { title: "Poner Imagen 5", thumbnail: white1 },
  { title: "Poner Imagen 6", thumbnail: black1 },
  { title: "Poner Imagen 7", thumbnail: white1 },
  { title: "Poner Imagen 8", thumbnail: black1 },
  { title: "Poner Imagen 9", thumbnail: white1 },
  { title: "Poner Imagen 10", thumbnail: black1 },
  { title: "Poner Imagen 11", thumbnail: white1 },
  { title: "Poner Imagen 12", thumbnail: black1 },
  { title: "Poner Imagen 13", thumbnail: white1 },
  { title: "Poner Imagen 14", thumbnail: black1 },
  { title: "Poner Imagen 15", thumbnail: white1 },
];

function Beeagency() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full overflow-x-hidden relative">
      <NavBar />
      {isMobile ? <HeroParallaxMobile /> : <HeroParallax products={products} />}

      <Suspense fallback={null}>
        <TextoCreativo />
      </Suspense>

      <SectoresFondoDoble />

      <Suspense fallback={null}>
        <Nuestrosvalores />
      </Suspense>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Suspense fallback={null}>
          <ContactoBee />
        </Suspense>
      </motion.section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
export default Beeagency;
