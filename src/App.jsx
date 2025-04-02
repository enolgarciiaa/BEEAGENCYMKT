import { Routes, Route } from 'react-router-dom';
import Home from '/src/views/Home';
import Beeagency from '/src/views/Beeagency';
import Services from '/src/views/services';
import Blog from '/src/views/Blog';
import Contact from '/src/views/Contact';

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
