import React from "react";
import { motion } from "framer-motion";

export default function TerminosCondiciones() {
  return (
    <section className="w-full min-h-screen bg-[#0e0e10] text-white px-6 sm:px-10 md:px-20 lg:px-32 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#111] via-[#0e0e10] to-[#1c1c1e] opacity-70 pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 uppercase border-b border-yellow-400 pb-4"
        >
          Términos y Condiciones
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          Estos Términos y Condiciones regulan el acceso y uso del sitio web de{" "}
          <span className="text-blue-400 font-semibold">BeeAgency</span>. Al navegar en nuestra web, aceptas cumplir con estas disposiciones. Si no estás de acuerdo, te recomendamos no utilizar nuestros servicios.
        </motion.p>

        <div className="space-y-10 text-gray-300 text-base leading-loose">
          {[
            {
              title: "1. Identidad del titular",
              content: (
                <>
                  BeeAgency · Email:{" "}
                  <a href="mailto:contacto@beeagency.com" className="text-yellow-400 underline">
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
                  El usuario se compromete a utilizar el sitio de forma responsable, sin causar daños, introducir virus, o llevar a cabo actividades ilícitas. BeeAgency podrá bloquear el acceso a usuarios que incumplan estas condiciones.
                </>
              ),
            },
            {
              title: "4. Propiedad intelectual e industrial",
              content: (
                <>
                  Todos los contenidos del sitio web (diseño, textos, imágenes, logotipos, marcas, etc.) son propiedad de BeeAgency o sus licenciantes, y están protegidos por la normativa vigente. Queda prohibida su reproducción sin autorización expresa.
                </>
              ),
            },
            {
              title: "5. Exclusión de responsabilidad",
              content: (
                <>
                  BeeAgency no garantiza la ausencia de errores en los contenidos ni la disponibilidad permanente del sitio. No se hace responsable por daños derivados del uso del sitio o servicios ofrecidos.
                </>
              ),
            },
            {
              title: "6. Enlaces a terceros",
              content: (
                <>
                  Este sitio puede incluir enlaces a sitios web de terceros. BeeAgency no se responsabiliza del contenido ni de las políticas de privacidad de dichos sitios.
                </>
              ),
            },
            {
              title: "7. Modificaciones",
              content: (
                <>
                  Nos reservamos el derecho de modificar en cualquier momento estos Términos y Condiciones, así como cualquier información del sitio web, sin previo aviso. Las modificaciones serán aplicables desde su publicación.
                </>
              ),
            },
            {
              title: "8. Legislación aplicable y jurisdicción",
              content: (
                <>
                  Estos términos se rigen por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales de Ciudad Real, salvo que la normativa disponga otra cosa.
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
              <h2 className="text-2xl font-bold text-blue-400 mb-2">{title}</h2>
              <div>{content}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-gray-500 text-sm italic text-center"
        >
          Última actualización: abril 2025 · BeeAgency
        </motion.div>
      </div>
    </section>
  );
}
