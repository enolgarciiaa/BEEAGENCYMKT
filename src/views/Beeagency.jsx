import { Suspense, lazy } from 'react';
import { motion } from "framer-motion";
import NavBar from "/src/components/NavBar";
import { HeroParallax } from "/src/components/componentespb/HeroParallax";
import SectoresFondoDoble from '/src/components/componentespb/SectoresFondoDoble';
import Footer from "/src/components/Footer";
import ScrollToTopButton from "/src/components/ScrollToTopButton";



// Lazy-loaded componentes
const TextoCreativo = lazy(() => import('/src/components/componentespb/TextoCreativo'));
const Nuestrosvalores = lazy(() => import('/src/components/componentespb/Nuestrosvalores'));
const ContactoBee = lazy(() => import('/src/components/componentespb/ContactoBee'));

// Lista de productos para HeroParallax
const products = [
  {
    title: "Poner imagen 1",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 2",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 3",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 4",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 5",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 6",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 7",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 8",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 9",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 10",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 11",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 12",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 13",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
  {
    title: "Poner imagen 14",
    thumbnail: "/src/assets/fotospb/BA_Version_Black.png",
  },
  {
    title: "Poner imagen 15",
    thumbnail: "/src/assets/fotospb/BA_Version_White.png",
  },
];

function Beeagency() {
  return (
    <div className="w-full overflow-x-hidden relative">
      <NavBar />
      
      <HeroParallax products={products} />
      
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
