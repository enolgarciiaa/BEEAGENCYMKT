import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { to: "/", text: "Home" },
    { to: "/Beeagency", text: "Beeagency" },
    { to: "/services", text: "Servicios" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contacto", external: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav
        className={`w-full transition-all duration-300 rounded-2xl px-6 flex items-center justify-between ${
          scrolled ? "py-2" : "py-4"
        } bg-white/10 backdrop-blur-md shadow-md border border-white/10`}
      >
        {/* Logo y nombre con enlace a la Home */}
        {!scrolled && (
          <div className="flex items-center gap-2">
            <img
              src="/src/assets/logoBAheader.png"
              alt="Logo BeeAgency"
              className="h-8 sm:h-10"
            />
            <Link
              to="/"
              className="text-white font-semibold text-base sm:text-lg tracking-widest hover:text-cyan-300 transition-colors"
            >
              BEEAGENCY
            </Link>
          </div>
        )}

        {/* Enlaces centrados en pantallas grandes */}
        <div className="hidden lg:flex flex-1 justify-center gap-6">
          {links.map((link, idx) =>
            link.external ? (
              <a
                key={idx}
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-white text-sm font-medium tracking-wide uppercase transition
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                          after:w-0 after:bg-cyan-300 after:transition-all after:duration-500 hover:after:w-full hover:text-cyan-300"
              >
                {link.text}
              </a>
            ) : (
              <Link
                key={idx}
                to={link.to}
                className="relative text-white text-sm font-medium tracking-wide uppercase transition
                          after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px]
                          after:w-0 after:bg-cyan-300 after:transition-all after:duration-500 hover:after:w-full hover:text-cyan-300"
              >
                {link.text}
              </Link>
            )
          )}
        </div>

        {/* Botón derecho solo visible sin scroll y en pantallas grandes */}
        {!scrolled && (
          <div className="hidden lg:flex items-center">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-black text-white rounded-full shadow-[0_0_10px_rgba(0,255,255,0.3)] hover:scale-105 transition"
            >
              Impulsa hoy
            </a>
          </div>
        )}

        {/* Botón hamburguesa para móviles */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="mt-2 lg:hidden bg-white/10 backdrop-blur-md rounded-xl border border-white/10 px-6 py-4 shadow-md">
          <div className="flex flex-col gap-4">
            {links.map((link, idx) =>
              link.external ? (
                <a
                  key={idx}
                  href={link.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-white text-sm font-medium tracking-wide hover:text-cyan-300 transition"
                >
                  {link.text}
                </a>
              ) : (
                <Link
                  key={idx}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-sm font-medium tracking-wide hover:text-cyan-300 transition"
                >
                  {link.text}
                </Link>
              )
            )}
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 px-5 py-2 bg-black text-white rounded-full text-center shadow hover:scale-105 transition"
            >
              Impulsa hoy
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
