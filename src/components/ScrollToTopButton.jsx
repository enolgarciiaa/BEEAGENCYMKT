import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // npm install react-icons si aún no lo tienes

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar la flecha cuando se hace scroll hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Acción al hacer clic
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-yellow-400 hover:bg-yellow-500 text-black p-3 rounded-full shadow-lg transition-all text-xl"
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
