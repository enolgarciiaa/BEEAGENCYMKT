import { useEffect, useState } from "react";
import logo from "/src/assets/logoBAheader.png";

export default function SplashScreen() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("hasSeenSplash");

    if (!seen) {
      setShow(true);
      sessionStorage.setItem("hasSeenSplash", "true");

      const timer = setTimeout(() => {
        setShow(false);
      }, 3000); // duración

      return () => clearTimeout(timer);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00ffff22,_transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_#00ffff11_1px,_transparent_1px)] [background-size:30px_30px] opacity-5" />
      </div>
      <div className="relative z-10 flex items-center justify-center w-[90vw] max-w-md h-[90vw] max-h-md sm:w-[24rem] sm:h-[24rem] rounded-full border-4 border-cyan-400 animate-pulse shadow-[0_0_120px_#00ffff40]">
        <img
          src={logo}
          alt="Logo BA"
          className="w-[70%] sm:w-80 h-auto object-contain animate-fade-in-logo"
        />
      </div>
    </div>
  );
}
