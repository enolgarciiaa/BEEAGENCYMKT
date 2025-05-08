import { useEffect, useState } from "react";
import logo from "/src/assets/logoBAheader.png"; // Asegúrate que esta ruta es correcta

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 15000); // puedes subir el tiempo si quieres más duración
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      {/* Fondo IA sin divisiones */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ffff22,_transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,_#00ffff11,_transparent_90%)] animate-spin-slow opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#00ffff11_1px,_transparent_1px)] [background-size:30px_30px] opacity-5" />
      </div>

      {/* Círculo animado con logo */}
      <div className="relative z-10 flex items-center justify-center w-[28rem] h-[28rem] rounded-full border-4 border-cyan-400 animate-pulse shadow-[0_0_120px_#00ffff40]">
        <img
          src={logo}
          alt="Logo BA"
          className="w-96 h-96 object-contain animate-fade-in-logo"
        />
      </div>
    </div>
  );
}
