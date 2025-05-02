import { useState, Suspense, useEffect, lazy } from 'react';
import { motion } from "framer-motion";
import NavBar from "/src/components/componentesph/NavBar";
import LampDemo from "/src/components/componentesph/Lamp";
import InfiniteLogosCarousel from "/src/components/componentesph/InfiniteLogosCarousel";
import { ContainerScroll } from "/src/components/componentesph/Container-scroll-animation";
import GlobeReal from "/src/components/componentesph/GlobeReal";
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import CustomCursor from "/src/components/CustomCursor";



const ImpulsaMarca = lazy(() => import('/src/components/componentesph/ImpulsaMarca'));
const Metodologia = lazy(() => import('/src/components/componentesph/Metodologia'));
const BlogPreview = lazy(() => import('/src/components/componentesph/BlogPreview'));
const Contacto = lazy(() => import('/src/components/componentesph/Contacto'));




function Home() {
 

  return (
    <div className="w-full overflow-x-hidden">
      {/* CABECERA nueva */}
      <NavBar />
      <LampDemo />
      <InfiniteLogosCarousel/>
      <ContainerScroll
        titleComponent={
          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-10 font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
            Conoce nuestra marca
          </h2>
        }
        >
        {/* Contenido dentro de la tarjeta */}
          <div className="flex items-center justify-center h-full text-white text-xl">
            <img 
            src="/src/assets/fotosph/logo-marcaBA.jpg" 
            alt="logo beeagency" 
             className="w-full h-full object-cover rounded-[24px]" 
            />
          </div>
      </ContainerScroll>
  
      <Suspense fallback={null}>
        <ImpulsaMarca />
      </Suspense>

      <GlobeReal />

      <Suspense fallback={null}>
        <Metodologia />
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
