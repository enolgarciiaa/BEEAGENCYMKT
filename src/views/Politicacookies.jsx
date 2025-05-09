import React from "react";
import { motion } from "framer-motion";

export default function PoliticaCookies() {
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
          <span className="neon-blue">Cookies</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          En <span className="text-cyan-400 font-semibold">BeeAgency</span> utilizamos cookies propias y de terceros para mejorar tu experiencia de usuario, analizar el tráfico y personalizar el contenido. Al navegar aceptas esta política, salvo que configures lo contrario.
        </motion.p>

        <div className="space-y-12 text-gray-300 text-left text-base md:text-lg leading-relaxed mx-auto max-w-4xl">
          {[
            {
              title: "1. ¿Qué son las cookies?",
              content: (
                <>
                  Son pequeños archivos de texto que se almacenan en tu navegador al visitar un sitio web, permitiendo recordar tu actividad y preferencias.
                </>
              ),
            },
            {
              title: "2. Tipos de cookies utilizadas",
              content: (
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Cookies técnicas:</strong> necesarias para el funcionamiento básico y seguro del sitio.</li>
                  <li><strong>Cookies de personalización:</strong> recuerdan tus preferencias (idioma, configuración...).</li>
                  <li><strong>Cookies analíticas:</strong> recogen información anónima sobre el comportamiento del usuario. Usamos Google Analytics.</li>
                  <li><strong>Cookies de marketing:</strong> muestran anuncios personalizados. Pueden instalarse por terceros como Facebook Pixel, HubSpot, etc.</li>
                </ul>
              ),
            },
            {
              title: "3. Cookies de terceros",
              content: (
                <>
                  Usamos servicios externos que instalan cookies con fines analíticos o publicitarios:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li>Google Analytics</li>
                    <li>Facebook Pixel</li>
                    <li>HubSpot</li>
                    <li>Hotjar</li>
                    <li>Typeform</li>
                  </ul>
                </>
              ),
            },
            {
              title: "4. Gestión y eliminación de cookies",
              content: (
                <>
                  Puedes configurar tu navegador para aceptar, bloquear o eliminar cookies:
                  <ul className="list-disc list-inside mt-2 space-y-2">
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/es/kb/administrar-cookies-y-datos-del-sitio" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/es-es/HT201265" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Safari</a></li>
                    <li><a href="https://support.microsoft.com/es-es/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">Microsoft Edge / Explorer</a></li>
                  </ul>
                </>
              ),
            },
            {
              title: "5. Consentimiento del usuario",
              content: (
                <>
                  Al acceder por primera vez, se muestra un banner para aceptar o rechazar cookies. Puedes cambiar tu decisión desde la configuración en cualquier momento.
                </>
              ),
            },
            {
              title: "6. Cambios en esta política",
              content: (
                <>
                  BeeAgency se reserva el derecho a modificar esta Política de Cookies. Revisa esta sección periódicamente para estar al día.
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
