import { useState } from "react";

export default function ContactoServices() {
  const [acepta, setAcepta] = useState(false);

  return (
    <section className="relative w-full min-h-screen px-6 sm:px-10 py-24 flex items-center justify-center text-white bg-gradient-to-b from-black via-black/80 to-black">
      <div className="w-full max-w-6xl">
        {/* Título */}
        <div className="mb-12 ">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight bg-clip-text  text-transparent bg-gradient-to-br from-slate-300 to-slate-400 uppercase">
            Ponte en <span className="neon-blue">contacto</span> 
          </h2>
          <p className="mt-4 text-gray-300 font-light">
            No creemos en las casualidades. Si estás aquí, es porque algo grande nos espera juntos.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto neon-button-cyan rounded-full" />
        </div>

        {/* Formulario */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Columna 1 */}
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-cyan-300">Nombre *</label>
              <input
                type="text"
                id="nombre"
                required
                className="w-full border-b border-white bg-transparent py-2 outline-none placeholder-white text-white"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-cyan-300">Email *</label>
              <input
                type="email"
                id="email"
                required
                className="w-full border-b border-white bg-transparent py-2 outline-none placeholder-white text-white"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="servicio" className="block text-sm font-semibold text-cyan-300">Servicio que necesitas *</label>
              <select
                id="servicio"
                required
                className="w-full bg-cyan-600/90 text-white border border-white py-2 px-2 rounded-md outline-none"
              >
                <option value="">Selecciona una opción</option>
                <option value="desarrollo-web">Desarrollo Web</option>
                <option value="negocio">Desarrollo de Negocio</option>
                <option value="branding">Branding</option>
                <option value="otros">Otros...</option>
              </select>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="flex flex-col justify-between space-y-6">
            <div>
              <label htmlFor="mensaje" className="block text-sm font-semibold text-cyan-300">Mensaje *</label>
              <textarea
                id="mensaje"
                required
                rows="8"
                className="w-full border border-white bg-transparent p-4 outline-none placeholder-white text-white resize-none rounded-lg"
                placeholder="Tu mensaje"
              ></textarea>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-2 text-sm text-white">
                <input
                  type="checkbox"
                  id="privacidad"
                  checked={acepta}
                  onChange={() => setAcepta(!acepta)}
                  required
                />
                <label htmlFor="privacidad" className="leading-snug">
                  Acepto la{" "}
                  <a href="/politica_privacidad" className="underline text-cyan-300 hover:text-cyan-100">
                    política de privacidad
                  </a>
                </label>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-black text-white rounded-full neon-button-cyan text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
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
