import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import SplashScreen from '/src/components/SplashScreen'; 
import CookieConsent from '/src/components/CookieConsent'; 
import ScrollToTop from '/src/components/ScrollToTop';
import CustomCursor from "/src/components/CustomCursor";

// Lazy-loaded views
const Home = lazy(() => import('/src/views/Home'));
const Beeagency = lazy(() => import('/src/views/Beeagency'));
const Services = lazy(() => import('/src/views/Services'));
const Blog = lazy(() => import('/src/views/Blog'));
const Contact = lazy(() => import('/src/views/Contact'));
const PoliticaPrivacidad = lazy(() => import('/src/views/Politica_privacidad'));
const TerminosCondiciones = lazy(() => import('/src/views/TerminosCondiciones'));
const Politicacookies = lazy(() => import('/src/views/Politicacookies'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Oculta el splash tras 3 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <CookieConsent />
          <ScrollToTop />
          <CustomCursor />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/Beeagency" element={<Beeagency />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/politica_privacidad" element={<PoliticaPrivacidad />} />
              <Route path="/TerminosCondiciones" element={<TerminosCondiciones />} />
              <Route path="/Politicacookies" element={<Politicacookies />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
