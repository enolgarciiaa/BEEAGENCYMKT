import React from 'react';

const ContactoBee = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black min-h-screen flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-12 max-w-9xl">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-blue-400 leading-snug uppercase tracking-wide drop-shadow-lg">
          ¿Listo para llevar tu <span className="text-yellow-400">marca</span><br />
          al siguiente <span className="text-yellow-400">nivel</span>?
        </h2>

        <p
          className="text-4xl sm:text-5xl md:text-8xl text-white font-semibold drop-shadow-md"
          style={{ fontFamily: "'Alex Brush', cursive" }}
        >
          Contáctanos
        </p>

        <button className="bg-blue-500 hover:bg-yellow-400 text-white hover:text-blue-900 font-bold py-4 px-8 text-xl sm:text-2xl shadow-lg transition-all duration-300 ease-in-out hover:scale-105">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default ContactoBee;


