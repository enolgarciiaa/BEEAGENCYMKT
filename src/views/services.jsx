import { useState } from "react";
import CabeceraServices from '/src/components/componentesps/CabeceraServices';
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import Lotties from "/src/components/componentesps/Lotties";
import ImpulsaMarcaservices from "/src/components/componentesps/ImpulsaMarcaservices";
import MetodologiaServices from "/src/components/componentesps/MetodologiaServices"; 
import ContactoServices from "/src/components/componentesps/ContactoServices";
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';
import CustomCursor from "/src/components/CustomCursor";


const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5', target: '_blank' }
];

function Services() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/*Cabecera*/}
      <CabeceraServices setMenuOpen={setMenuOpen} />
      
      
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

        {/*Seccion Lotties servicios*/}
        <Lotties />

        {/*Seccion ImpulsaMarca servicios*/}
        <ImpulsaMarcaservices />

        {/*Seccion metodologia servicios*/}
        <MetodologiaServices />

        {/*Seccion metodologia servicios*/}
        <ContactoServices />

        {/* FOOTER */}
        <Footer />


        <ScrollToTopButton />
        <CustomCursor />
    </>
  );
}

export default Services;
