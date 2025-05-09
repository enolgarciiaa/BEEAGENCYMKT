import React from "react";
import { motion } from "framer-motion";

export default function TerminosCondiciones() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-24 overflow-hidden bg-black relative">
      <div className="text-center space-y-16 max-w-5xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400"
        >
          Términos y<br />
          <span className="neon-blue">Condiciones Legales</span>
        </motion.h1>

        <div className="space-y-12 text-gray-300 text-left text-base md:text-lg leading-relaxed mx-auto max-w-4xl">
          {[
            {
              title: "1. Identidad del titular",
              content: (
                <>
                  BeeAgency · Email:{" "}
                  <a href="mailto:contacto@beeagency.com" className="text-cyan-400 underline">
                    contacto@beeagency.com
                  </a>
                </>
              ),
            },
            {
              title: "2. Objeto del sitio web",
              content: (
                <>
                  Ofrecer información sobre nuestros servicios de marketing digital, desarrollo web, branding y consultoría. Además, facilitar el contacto y la contratación de dichos servicios.
                </>
              ),
            },
            {
              title: "3. Condiciones de uso",
              content: (
                <>
                  El usuario se compromete a utilizar el sitio de forma responsable, sin causar daños, introducir virus, o llevar a cabo actividades ilícitas.
                </>
              ),
            },
            {
              title: "4. Propiedad intelectual e industrial",
              content: (
                <>
                  Todos los contenidos del sitio web son propiedad de BeeAgency o sus licenciantes, y están protegidos por la normativa vigente.
                </>
              ),
            },
            {
              title: "5. Exclusión de responsabilidad",
              content: (
                <>
                  BeeAgency no garantiza la ausencia de errores ni la disponibilidad continua del sitio.
                </>
              ),
            },
            {
              title: "6. Enlaces a terceros",
              content: (
                <>
                  Este sitio puede incluir enlaces a sitios de terceros. BeeAgency no se responsabiliza del contenido ni de sus políticas.
                </>
              ),
            },
            {
              title: "7. Modificaciones",
              content: (
                <>
                  Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento.
                </>
              ),
            },
            {
              title: "8. Legislación aplicable",
              content: (
                <>
                  Estos términos se rigen por la legislación española. Las partes se someten a los juzgados de Ciudad Real.
                </>
              ),
            },
          ].map(({ title, content }, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-2">{title}</h2>
              <p>{content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm italic"
        >
          Última actualización: abril 2025 · BeeAgency
        </motion.div>
      </div>
    </section>
  );
}
