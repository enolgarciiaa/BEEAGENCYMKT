import React from "react";
import { motion } from "framer-motion";

export default function PoliticaPrivacidad() {
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
          Política de Privacidad
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          En <span className="text-blue-400 font-semibold">BeeAgency</span>, la privacidad de nuestros usuarios es una prioridad. A través de esta política explicamos cómo recopilamos, usamos y protegemos tus datos personales.
        </motion.p>

        <div className="space-y-10 text-gray-300 text-base leading-loose">
          {[
            {
              title: "1. Responsable del tratamiento",
              content: (
                <>
                  BeeAgency – CIF: 12345678X – Email:{" "}
                  <a href="mailto:contacto@beeagency.com" className="text-yellow-400 underline">
                    contacto@beeagency.com
                  </a>
                </>
              ),
            },
            {
              title: "2. Finalidad del tratamiento",
              content: (
                <>
                  Utilizamos los datos personales para responder a tus solicitudes, prestarte nuestros servicios y enviarte comunicaciones relacionadas con nuestros productos, eventos o novedades.
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
                    <li>Derecho a acceder a tus datos personales.</li>
                    <li>Derecho a solicitar su rectificación o supresión.</li>
                    <li>Derecho a limitar u oponerte a su tratamiento.</li>
                    <li>Derecho a la portabilidad de los datos.</li>
                  </ul>
                  <p className="mt-2">
                    Puedes ejercer tus derechos enviando un email a:{" "}
                    <a href="mailto:contacto@beeagency.com" className="text-yellow-400 underline">
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
                  No se prevén transferencias internacionales de datos. Si en algún momento se realizaran, se garantizará el cumplimiento de los estándares adecuados de protección.
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
                  BeeAgency se reserva el derecho a modificar esta política para adaptarla a novedades legislativas o cambios internos. Te recomendamos revisarla periódicamente.
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
