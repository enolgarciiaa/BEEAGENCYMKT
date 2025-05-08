import { useState, lazy, Suspense, useEffect } from "react";
import Particles from "/src/components/componentesps/Particles";
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';




const NavBar = lazy(() => import("/src/components/NavBar"));
const Lotties = lazy(() => import("/src/components/componentesps/Lotties"));
const ImpulsaMarcaservices = lazy(() => import("/src/components/componentesps/ImpulsaMarcaservices"));
const MetodologiaServices = lazy(() => import("/src/components/componentesps/MetodologiaServices"));
const ContactoServices = lazy(() => import("/src/components/componentesps/ContactoServices"));

const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5', target: '_blank' }
];

function Services() {
  

  return (
    <>
      <Suspense fallback={null}>
       <NavBar />
      </Suspense>

      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo de partículas */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className="w-full h-full"
          />
        </div>

        {/* Contenido encima del fondo */}
        <div className="relative z-10 text-center px-6 max-w-6xl">
           <h1 className="text-4xl md:text-6xl lg:text-7xl py-10 xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
            Servicios que transforman tu negocio
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Soluciones inteligentes que conectan innovación y estrategia.
          </p>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block neon-button-cyan bg-black text-white border px-8 py-4 text-lg sm:text-xl rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
            >
            DESCUBRE MÁS
          </a>
        </div>
      </section>


      
      <Suspense fallback={null}>
        <Lotties />
      </Suspense>

      <Suspense fallback={null}>
        <ImpulsaMarcaservices />
      </Suspense>

      <Suspense fallback={null}>
        <MetodologiaServices />
      </Suspense>

      <Suspense fallback={null}>
        <ContactoServices />
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default Services;