import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import earthTexture from "/src/assets/World.jpg";


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

export default function GlobeReal() {
  return (
    <section className="w-full bg-black flex flex-col-reverse lg:flex-col-reverse xl:flex-row items-center justify-center px-4 pb-52  lg:py-16 gap-14 overflow-hidden min-h-[40vh] xl:min-h-screen">


      {/* Texto */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center xl:text-left w-full max-w-xl text-white space-y-6"
      >
         <h2 className="text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
          Conectamos el mundo
        </h2>
        <p className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-neutral-300 tracking-wide">
          Visualiza el impacto global de tu marca. La inteligencia artificial y el diseño se unen para llevar tu mensaje a cualquier rincón del planeta.
        </p>
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 neon-button-cyan bg-black text-white px-8 py-3 sm:px-10 sm:py-4 rounded-full text-sm sm:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Explorar
        </a>
      </motion.div>

      {/* Bola del mundo */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[250px] sm:h-[350px] md:h-[480px] xl:h-[450px] 2xl:h-[600px] max-w-xs sm:max-w-sm md:max-w-md 2xl:max-w-xl"
      >
        <Canvas camera={{ position: [0, 0, 7] }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Earth />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </motion.div>
    </section>
  );
}
