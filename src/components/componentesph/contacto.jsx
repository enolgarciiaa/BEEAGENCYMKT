import React from 'react';
import { useNavigate } from "react-router-dom";

const Contacto = () => {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full  flex items-center justify-center px-6 py-24 overflow-hidden">
      <div className="text-center space-y-12 max-w-5xl z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
          ¿Quieres saber más?<br />
          <span className='neon-blue'>Te solucionamos </span>tus dudas.
        </h2>

        

        <button
          onClick={() => navigate("/contact")}
          className="neon-button-cyan bg-black text-white border  px-8 py-4 text-lg sm:text-xl rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Contacto;
