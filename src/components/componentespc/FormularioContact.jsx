import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import earthTexture from "/src/assets/World.jpg";
import Particles from "/src/components/componentesps/Particles";

// Bola del mundo 3D
function Earth() {
  const meshRef = useRef();
  const texture = new THREE.TextureLoader().load(earthTexture);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

// Componente principal
export default function ContactFormWithGlobe() {
  const [acepta, setAcepta] = useState(false);

  return (
    <section className="relative w-full min-h-screen bg-black text-white px-4 py-24 overflow-hidden flex flex-col items-center justify-center">

      {/* Fondo de partículas */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className="w-full h-full"
        />
      </div>

      {/* Contenido completo con misma animación de flotación */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center gap-10"
      >
        {/* Título + Logo */}
        <div className="w-full flex justify-between items-center px-4">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text  text-transparent bg-gradient-to-br from-slate-300 to-slate-400 uppercase">
            Ponte en <span className="neon-blue">contacto</span>
          </h2>
          <img
            src="/src/assets/logoBAheader.png"
            alt="Logo BeeAgency"
            className="h-14 md:h-24"
          />
        </div>

        {/* Tarjeta de formulario con globo */}
        <div className="w-full bg-white/5 backdrop-blur-md border border-cyan-500 rounded-3xl shadow-[0_0_60px_#00ffff30] p-4 sm:p-6 md:p-10 lg:p-16 flex flex-col lg:flex-row gap-10 max-h-full overflow-visible">
          {/* Formulario */}
          <form className="w-full lg:w-1/2 grid grid-cols-1 gap-4">
            <input type="text" placeholder="Tu nombre" required className="bg-transparent border-b border-white py-2 outline-none placeholder-white text-sm sm:text-base" />
            <input type="text" placeholder="Tus apellidos" required className="bg-transparent border-b border-white py-2 outline-none placeholder-white text-sm sm:text-base" />
            <input type="text" placeholder="Empresa (opcional)" className="bg-transparent border-b border-white py-2 outline-none placeholder-white text-sm sm:text-base" />
            <input type="email" placeholder="Tu correo" required className="bg-transparent border-b border-white py-2 outline-none placeholder-white text-sm sm:text-base" />
            <select required className="bg-cyan-600/90 border border-white py-2 px-2 rounded-md text-white text-sm sm:text-base">
              <option value="">Servicio que necesitas</option>
              <option>Desarrollo Web</option>
              <option>Consultoría</option>
              <option>Branding</option>
              <option>Otros...</option>
            </select>
            <textarea rows="4" placeholder="Tu mensaje" className="bg-transparent border border-white p-4 outline-none text-white resize-none rounded-md text-sm sm:text-base" />
            
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" checked={acepta} onChange={() => setAcepta(!acepta)} required />
              <label>
                Acepto la{" "}
                <a href="/politica_privacidad" className="underline text-cyan-300 hover:text-white">política de privacidad</a>
              </label>
            </div>
            
            <button type="submit" className="px-6 py-3 bg-black text-white neon-button-cyan rounded-full uppercase font-semibold tracking-wider hover:scale-105 transition">
              Enviar
            </button>
          </form>

          {/* Bola del mundo */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] max-w-full lg:max-w-[500px]">
            <Canvas camera={{ position: [0, 0, 7] }}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Earth />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
