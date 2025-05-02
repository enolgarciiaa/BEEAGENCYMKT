// GlobeSimple.jsx
import React from "react";
import earthImg from "/src/assets/fotospc/earth_daymap.png"; // asegúrate de que esta ruta es correcta

export default function GlobeSimple() {
  return (
    <section className="w-full bg-black text-white py-20 px-6 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Texto */}
      <div className="max-w-xl text-center md:text-left space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Conectamos el mundo digital
        </h2>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
          En BeeAgency impulsamos tu marca con soluciones digitales que cruzan fronteras.
          Creamos experiencias que conectan, inspiran y transforman.
        </p>
      </div>

      {/* Imagen de la Tierra */}
      <div className="w-full max-w-md">
        <img
          src={earthImg}
          alt="Globo terráqueo futurista"
          className="w-full h-auto rounded-xl shadow-[0_0_40px_#00ffff50] object-contain"
        />
      </div>
    </section>
  );
}
