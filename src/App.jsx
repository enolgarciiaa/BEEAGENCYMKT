import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Beeagency from './views/Beeagency';
import Services from './views/services';
import Blog from './views/Blog';
import Contact from './views/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Beeagency" element={<Beeagency />} />
      <Route path="/services" element={<Services />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes>
  );
}

export default App;
