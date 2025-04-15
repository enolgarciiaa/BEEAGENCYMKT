import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setShowBanner(true);
    if (consent === "accepted") loadGoogleAnalytics();
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    loadGoogleAnalytics();
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowBanner(false);
  };

  const loadGoogleAnalytics = () => {
    if (window.gtag) return; // evita duplicar
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"; // 🔁 tu ID aquí
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-74FLS5796Q', { anonymize_ip: true });
    `;
    document.head.appendChild(script2);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#0e0e10] text-white px-6 py-4 shadow-xl z-[1000]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm">
        <p>
          Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia.{" "}
          <a href="/Politicacookies" target="_blank" className="underline text-yellow-400">
            Saber más
          </a>
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleReject}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded transition"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="bg-yellow-400 text-black hover:bg-yellow-300 px-4 py-2 rounded font-semibold transition"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
