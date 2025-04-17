import { useState, Suspense, lazy } from 'react';
import CabeceraMobile from "/src/components/componentesphm/CabeceraMobile"; // nuevo
import FlowingMenu from '/src/components/componentesph/FlowingMenu';
import Footer from '/src/components/Footer';
import ScrollToTopButton from '/src/components/ScrollToTopButton';

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

function HomeMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
      <CabeceraMobile setMenuOpen={setMenuOpen} />

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-4xl z-50"
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

      

      <Suspense fallback={null}>
        <Metodologia />
      </Suspense>

      <Suspense fallback={null}>
        <CarruselIconos />
      </Suspense>

      <Suspense fallback={null}>
        <BlogPreview />
      </Suspense>

      <Suspense fallback={null}>
        <Contacto />
      </Suspense>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default HomeMobile;
