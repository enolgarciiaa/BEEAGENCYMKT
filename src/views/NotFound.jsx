// src/views/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Fondo estilo IA animado */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-cyan-500/10 via-black to-black animate-bg-glow" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#00ffff33_1px,_transparent_1px)] [background-size:30px_30px] opacity-5" />

      {/* Contenido */}
      <div className="relative z-10 text-center space-y-8 max-w-3xl">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,255,0.4)]">
          404
        </h1>
        <p className="text-lg sm:text-xl text-gray-300">
          Esta pagina no existe. Parece que te has perdido en el universo de BeeAgency.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 neon-button-cyan bg-black text-white rounded-full uppercase font-semibold tracking-wider transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
