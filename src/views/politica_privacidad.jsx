import React from "react";
import { motion } from "framer-motion";

export default function PoliticaPrivacidad() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-6 py-24 overflow-hidden bg-black relative">
      <div className="text-center space-y-16 max-w-5xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400"
        >
          Política de<br />
          <span className="neon-blue">Privacidad</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          En <span className="text-cyan-400 font-semibold">BeeAgency</span>, la privacidad de nuestros usuarios es una prioridad. A través de esta política explicamos cómo recopilamos, usamos y protegemos tus datos personales.
        </motion.p>

        <div className="space-y-12 text-gray-300 text-left text-base md:text-lg leading-relaxed mx-auto max-w-4xl">
          {[
            {
              title: "1. Responsable del tratamiento",
              content: (
                <>
                  BeeAgency – CIF: 12345678X – Email:{" "}
                  <a href="mailto:contacto@beeagency.com" className="text-cyan-400 underline">
                    contacto@beeagency.com
                  </a>
                </>
              ),
            },
            {
              title: "2. Finalidad del tratamiento",
              content: (
                <>
                  Utilizamos los datos personales para responder a tus solicitudes, prestarte nuestros servicios y enviarte comunicaciones relacionadas con nuestros productos o novedades.
                </>
              ),
            },
            {
              title: "3. Legitimación",
              content: (
                <>
                  El tratamiento de tus datos se basa en tu consentimiento, en la ejecución de un contrato o en el cumplimiento de obligaciones legales.
                </>
              ),
            },
            {
              title: "4. Conservación de los datos",
              content: (
                <>
                  Conservaremos tus datos durante el tiempo estrictamente necesario para cumplir con las finalidades indicadas o según las exigencias legales.
                </>
              ),
            },
            {
              title: "5. Derechos de los usuarios",
              content: (
                <>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Acceder a tus datos personales</li>
                    <li>Solicitar su rectificación o supresión</li>
                    <li>Limitar u oponerte a su tratamiento</li>
                    <li>Solicitar la portabilidad de los datos</li>
                  </ul>
                  <p className="mt-2">
                    Puedes ejercer tus derechos enviando un email a:{" "}
                    <a href="mailto:contacto@beeagency.com" className="text-cyan-400 underline">
                      contacto@beeagency.com
                    </a>
                  </p>
                </>
              ),
            },
            {
              title: "6. Destinatarios",
              content: (
                <>
                  No compartiremos tus datos personales con terceros salvo obligación legal o en caso necesario para la prestación del servicio contratado.
                </>
              ),
            },
            {
              title: "7. Transferencias internacionales",
              content: (
                <>
                  No se prevén transferencias internacionales de datos. En caso de realizarse, se garantizará el cumplimiento de estándares adecuados de protección.
                </>
              ),
            },
            {
              title: "8. Seguridad de los datos",
              content: (
                <>
                  Aplicamos medidas técnicas y organizativas apropiadas para proteger tus datos personales frente a accesos no autorizados, pérdida o destrucción.
                </>
              ),
            },
            {
              title: "9. Cambios en la política de privacidad",
              content: (
                <>
                  BeeAgency se reserva el derecho a modificar esta política para adaptarla a novedades legislativas o cambios internos. Revisa esta sección periódicamente.
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
              <div>{content}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-gray-500 text-sm italic text-center"
        >
          Última actualización: abril 2025 · BeeAgency
        </motion.div>
      </div>
    </section>
  );
}
