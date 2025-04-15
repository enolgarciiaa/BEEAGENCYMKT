import React from 'react';
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navigate = useNavigate(); // 👉 Hook para redirección

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-12 max-w-9xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-blue-400 leading-snug uppercase tracking-wide drop-shadow-lg">
          ¿Quieres <span className="text-yellow-400">saber más</span>?<br />
          Te solucionamos tus <span className="text-yellow-400">dudas</span>.
        </h2>

        <p
          className="text-4xl sm:text-5xl md:text-8xl text-white font-medium drop-shadow-md"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Contáctanos
        </p>

        <button
          onClick={() => navigate("/contact")} // 👈 Cambia la ruta a la que necesites
          className="bg-blue-500 hover:bg-yellow-400 text-white hover:text-blue-900 font-bold py-4 px-8 text-xl sm:text-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Contacto;
