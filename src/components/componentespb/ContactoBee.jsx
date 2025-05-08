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

        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block neon-button-cyan bg-black text-white border px-8 py-4 text-lg sm:text-xl rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
          Contáctanos
        </a>
      </div>
    </section>
  );
};

export default ContactoBee;


