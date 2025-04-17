import { useState, lazy, Suspense, useEffect } from "react";
import CabeceraServices from '/src/components/componentesps/CabeceraServices';
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import CustomCursor from "/src/components/CustomCursor";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile === null) return null;

  return (
    <>
      <CabeceraServices setMenuOpen={setMenuOpen} />

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
      {!isMobile && <CustomCursor />}
      <ScrollToTopButton />
    </>
  );
}

export default Services;