import React from "react";
import CustomCursor from "/src/components/CustomCursor";
import { motion } from "framer-motion";

export default function PoliticaCookies() {
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
          Política de Cookies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed"
        >
          En <span className="text-blue-400 font-semibold">BeeAgency</span> utilizamos cookies propias y de terceros para mejorar tu experiencia de usuario, analizar el tráfico del sitio y personalizar el contenido. Al continuar navegando, aceptas el uso de cookies según esta política, salvo que configures lo contrario.
        </motion.p>

        <div className="space-y-10 text-gray-300 text-base leading-loose">
          {[
            {
              title: "1. ¿Qué son las cookies?",
              content: (
                <>
                  Las cookies son pequeños archivos de texto que se almacenan en tu navegador cuando visitas un sitio web. Sirven para recordar tu actividad y preferencias durante un periodo de tiempo.
                </>
              ),
            },
            {
              title: "2. Tipos de cookies utilizadas",
              content: (
                <ul className="list-disc list-inside space-y-2">
                  <li>
                    <strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico del sitio y para garantizar su seguridad.
                  </li>
                  <li>
                    <strong>Cookies de personalización:</strong> permiten recordar tus preferencias (idioma, configuración...).
                  </li>
                  <li>
                    <strong>Cookies analíticas:</strong> recogen información anónima sobre el comportamiento de los usuarios para mejorar la navegación. Utilizamos Google Analytics.
                  </li>
                  <li>
                    <strong>Cookies de marketing:</strong> permiten mostrarte anuncios personalizados. Pueden ser instaladas por terceros como Facebook Pixel, HubSpot, etc.
                  </li>
                </ul>
              ),
            },
            {
              title: "3. Cookies de terceros",
              content: (
                <>
                  Este sitio web puede utilizar servicios de terceros que instalan cookies con fines estadísticos, de análisis o publicitarios. Algunos ejemplos:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Google Analytics</li>
                    <li>Facebook Pixel</li>
                    <li>HubSpot</li>
                    <li>Hotjar</li>
                    <li>Typeform</li>
                  </ul>
                  Estos servicios tienen sus propias políticas de privacidad y cookies que puedes consultar en sus respectivas plataformas.
                </>
              ),
            },
            {
              title: "4. Gestión y eliminación de cookies",
              content: (
                <>
                  Puedes configurar tu navegador para aceptar, bloquear o eliminar las cookies instaladas en tu dispositivo. Aquí tienes los enlaces a los navegadores más utilizados:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>
                      <a
                        href="https://support.google.com/chrome/answer/95647"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 underline"
                      >
                        Google Chrome
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.mozilla.org/es/kb/administrar-cookies-y-datos-del-sitio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 underline"
                      >
                        Mozilla Firefox
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.apple.com/es-es/HT201265"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 underline"
                      >
                        Safari
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-400 underline"
                      >
                        Microsoft Edge / Explorer
                      </a>
                    </li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Consentimiento del usuario",
              content: (
                <>
                  Al acceder a este sitio por primera vez, se te mostrará un banner donde puedes aceptar o rechazar las cookies no esenciales. Tu consentimiento se almacena para futuras visitas. Puedes cambiar tu decisión en cualquier momento desde la configuración.
                </>
              ),
            },
            {
              title: "6. Cambios en esta política",
              content: (
                <>
                  BeeAgency se reserva el derecho a modificar esta Política de Cookies en cualquier momento, por lo que se recomienda revisarla periódicamente.
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

      <CustomCursor />
    </section>
  );
}
