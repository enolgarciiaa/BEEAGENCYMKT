import React from 'react';

const Contacto = () => {
  return (
    <section className="bg-black min-h-screen flex items-center justify-center px-6 py-16">
      <div className="text-center space-y-10">
        <h2 className="text-3xl sm:text-4xl md:text-7xl font-extrabold text-blue-400 leading-snug uppercase">
          ¿Quieres <span className="text-yellow-400">saber más</span>?<br />
          Te solucionamos tus <span className="text-yellow-400"><br />dudas</span>.
        </h2>
        <p
          className="text-4xl sm:text-5xl md:text-8xl text-white font-[500] "
          style={{ fontFamily: "'Alex Brush', cursive" }}
          >
          Contáctanos
        </p>
        <button className="bg-blue-400 hover:bg-yellow-400 text-white hover:text-blue-900 font-bold py-4 px-6  text-2xl transition duration-300 uppercase">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Contacto;
