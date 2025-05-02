import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Puedes instalar lucide-react o usar cualquier otro icono

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", text: "Home" },
    { to: "/Beeagency", text: "Beeagency" },
    { to: "/services", text: "Servicios" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contacto" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
      <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Izquierda: Logo y nombre */}
        <div className="flex items-center gap-2">
          <img src="/logoBA.png" alt="Logo BeeAgency" className="h-8 sm:h-10" />
          <span className="text-white text-lg sm:text-xl font-semibold tracking-widest">
            BEEAGENCY
          </span>
        </div>

        {/* Centro: Enlaces grandes pantallas */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          {links.map((link, idx) => (
            <Link
              key={idx}
              to={link.to}
              className="text-white text-sm sm:text-base hover:underline hover:text-cyan-300 transition-all"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Derecha: Botón + Hamburguesa */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-block px-6 py-2 text-sm sm:text-base font-semibold text-black bg-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
          >
            Impulsa hoy
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 pb-6">
          <div className="flex flex-col gap-4 mt-4">
            {links.map((link, idx) => (
              <Link
                key={idx}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-white text-sm hover:underline hover:text-cyan-300 transition-all"
              >
                {link.text}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 px-6 py-2 text-sm font-semibold text-black bg-white rounded-full text-center transition hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Impulsa hoy
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
