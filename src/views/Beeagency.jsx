import { Suspense, lazy } from 'react';
import { motion } from "framer-motion";
import NavBar from "/src/components/NavBar";
import { HeroParallax } from "/src/components/componentespb/HeroParallax";
import SectoresFondoDoble from '/src/components/componentespb/SectoresFondoDoble';
import Footer from "/src/components/Footer";
import ScrollToTopButton from "/src/components/ScrollToTopButton";
import CustomCursor from "/src/components/CustomCursor";


// Lazy-loaded componentes
const TextoCreativo = lazy(() => import('/src/components/componentespb/TextoCreativo'));
const Nuestrosvalores = lazy(() => import('/src/components/componentespb/Nuestrosvalores'));
const ContactoBee = lazy(() => import('/src/components/componentespb/ContactoBee'));

// Lista de productos para HeroParallax
const products = [
  {
    title: "Moonbeam",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
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
      <CustomCursor />
      <ScrollToTopButton />
    </div>
  );
}

export default Beeagency;
