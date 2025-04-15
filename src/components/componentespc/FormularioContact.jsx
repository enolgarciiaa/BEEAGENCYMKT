import { useState, useRef } from "react";
import logoContact from "/src/assets/logoBAheader.png";
import videoFondo from "/src/assets/fotospc/cabeceracontact.mp4";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import earthTextureUrl from "/src/assets/fotospc/earth_daymap.png";

function RotatingEarth() {
  const earthRef = useRef();
  const texture = new THREE.TextureLoader().load(earthTextureUrl);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003;
    }
  });

  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function ContactoCompleto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
    acepta: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={videoFondo}
      />

      

      {/* Estilo flotante */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) scale(1); }
            50% { transform: translateY(-30px) scale(1.02); }
          }
        `}
      </style>

      {/* Contenido principal */}
      <div className="relative z-20 flex flex-col items-center px-6  pb-20 min-h-screen">
        {/* Cabecera + tarjeta con animación compartida */}
        <div className="animate-[float_10s_ease-in-out_infinite] w-full max-w-7xl">
          {/* Cabecera */}
          <div className="flex flex-col lg:flex-row items-center justify-between w-full mb-10">
            <div className="text-left space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                PONGÁMONOS EN <br />
                <span className="text-yellow-400">CONTACTO</span>
              </h1>
            </div>
            <div className="hidden lg:block">
              <img
                src={logoContact}
                alt="Logo Bee Agency"
                className="max-w-xs sm:max-w-sm lg:max-w-md drop-shadow-xl"
              />
            </div>
          </div>

          {/* Contenedor tarjeta */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 p-10 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl shadow-2xl">
            {/* Información izquierda */}
            <div className="relative">
              <h3 className="italic text-gray-300 text-lg mb-2">CONTACTO</h3>
              <h2 className="text-3xl font-semibold mb-6">
                <span className="text-yellow-400">Bee</span>
                <span className="text-blue-400">Agency</span>
              </h2>
              <p className="mb-4 text-sm text-gray-300">
                En BeeAgency, nuestro objetivo es ayudarte a construir una marca fuerte,
                diferencial y preparada para crecer. Combinamos diseño, estrategia y
                tecnología para dotar a tu negocio de una identidad propia, con personalidad,
                coherencia y visión digital.
              </p>
              <p className="text-sm text-gray-400 mb-1">Madrid, 28004 (España)</p>
              <p className="text-sm text-yellow-400 mb-1">
                672 40 74 00 <br /> 635 14 79 92
              </p>
              <p className="text-sm text-gray-300 mb-6">beeagency@gmail.com</p>

              {/* Bola del mundo */}
              <div className="w-full h-64">
                <Canvas camera={{ position: [0, 0, 3.5] }}>
                  <ambientLight intensity={0.4} />
                  <directionalLight position={[5, 5, 5]} intensity={1} />
                  <RotatingEarth />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                </Canvas>
              </div>
            </div>

            {/* Formulario */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="italic text-gray-300 text-lg mb-2">Contacta con nosotros</h3>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Rellena este formulario</h2>

              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Tu correo electrónico"
                required
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows="5"
                placeholder="Tu mensaje"
                className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />

              <div className="flex items-center text-sm">
                <input
                  type="checkbox"
                  id="acepta"
                  name="acepta"
                  checked={formData.acepta}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label htmlFor="acepta">
                  Acepto la <a href="/politica-privacidad" className="text-yellow-400 underline">política de privacidad</a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
