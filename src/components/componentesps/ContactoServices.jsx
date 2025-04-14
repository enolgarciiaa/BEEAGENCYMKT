import { useState } from "react";

export default function ContactoServices() {
  const [acepta, setAcepta] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-6 sm:px-10 md:px-20 lg:px-32">
      <div className="max-w-7xl mx-auto">
        {/* Título principal */}
        <div className="text-left mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight uppercase tracking-tight text-blue-500">
            PONTE <span className="block">EN CONTACTO</span>{" "}
            <span className="block text-yellow-400">CON NOSOTROS.</span>
          </h2>
        </div>

        <hr className="border-white mb-10" />

        <p className="mb-10 font-bold">
          No creemos en las casualidades. Si estás aquí, es porque algo grande nos espera juntos.
        </p>

        {/* Formulario */}
        <form className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block font-bold">
                Nombre *
              </label>
              <input
                type="text"
                id="nombre"
                required
                className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-bold">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full bg-transparent border-b border-white py-2 outline-none placeholder-white"
                placeholder="tu@email.com"
              />
            </div>
        

            {/* Campo nuevo: selección de servicio */}
            <div>
              <label htmlFor="servicio" className="block font-bold">
                Servicio que necesitas *
              </label>
              <select
                id="servicio"
                required
                className="w-full bg-white text-black border-b border-white py-2 outline-none"
                >
                <option value="">Selecciona una opción</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="negocio">Desarrollo de Negocio</option>
                <option value="branding">Branding</option>
                <option value="otros">Otros</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col justify-between h-full">
            <div>
              <label htmlFor="mensaje" className="block font-bold mb-2">
                Escribe tu mensaje aquí.
              </label>
              <textarea
                id="mensaje"
                required
                rows="8"
                className="w-full bg-transparent border border-white p-4 outline-none placeholder-white resize-none"
                placeholder="Tu mensaje"
              ></textarea>
            </div>

            {/* Privacidad + botón */}
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  id="privacidad"
                  checked={acepta}
                  onChange={() => setAcepta(!acepta)}
                  required
                />
                <label htmlFor="privacidad">
                  Acepto la{" "}
                  <a href="/politica-privacidad" className="underline hover:text-blue-300">
                    política de privacidad
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-yellow-400 hover:text-blue-400 transition-all text-white font-bold py-3 px-8 text-lg uppercase w-full sm:w-auto"
              >
                Enviar
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
