import { Routes, Route } from 'react-router-dom';
import Home from '/src/views/Home';
import Beeagency from '/src/views/Beeagency';
import Services from '/src/views/services';
import Blog from '/src/views/Blog';
import Contact from '/src/views/Contact';
import PoliticaPrivacidad from "/src/views/Politica_privacidad";
import TerminosCondiciones from '/src/views/TerminosCondiciones';
import Politicacookies from '/src/views/Politicacookies';
import { div } from 'framer-motion/client';

function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Beeagency" element={<Beeagency />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/politica_privacidad"  element={<PoliticaPrivacidad />}  />
      <Route path="/TerminosCondiciones"  element={<TerminosCondiciones />}  />
      <Route path="/Politicacookies"  element={<Politicacookies />}  />
    </Routes>
  );
}

export default App;
