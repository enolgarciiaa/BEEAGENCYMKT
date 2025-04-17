import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000); // 👈 Aparece tras 1s
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted) => {
    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'denied');
    setVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}
        bg-black text-yellow-400 px-6 py-14 shadow-xl backdrop-blur-md border-t border-yellow-400`}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        <p className="text-center sm:text-left">
          Usamos cookies para mejorar tu experiencia. Consulta nuestra{' '}
          <Link
            to="/Politicacookies"
            className="underline text-yellow-300 hover:text-yellow-200 transition-colors"
          >
            política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-3 justify-center sm:justify-end">
          <button
            onClick={() => handleConsent(false)}
            className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-4 py-1 rounded transition"
          >
            Denegar
          </button>
          <button
            onClick={() => handleConsent(true)}
            className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-1 rounded transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
