import React from 'react';
import { useNavigate } from "react-router-dom";

const ContactoBee = () => {
  
  const navigate = useNavigate();

  return (
    <section className=" min-h-screen flex items-center bg-black justify-center px-6 py-20">
      <div className="text-center space-y-12 max-w-9xl">
        <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
          ¿Listo para llevar tu marca<br />
          al <span className="neon-blue"> siguiente nivel</span>?
        </h2>

        
        <button
          onClick={() => navigate("/contact")} // 👈 Cambia la ruta a la que necesites
          className="neon-button-cyan bg-black text-white px-10 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default ContactoBee;


