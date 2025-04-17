import Aurora from '/src/components/componentesphm/Aurora';
import TextPressure from '/src/components/componentesphm/TextPressure';
import logo from "/src/assets/logoBAheader.webp";

export default function CabeceraMobile({ setMenuOpen }) {
  return (
    <header className="relative w-full h-[100vh] flex flex-col justify-between items-center overflow-hidden text-white px-4 py-6">
      {/* Fondo Aurora */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3595e9", "#FFDC00", "#3595e9"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Barra superior: logo izquierda, menú derecha */}
      <div className="relative z-10 w-full flex justify-between items-center">
        <img src={logo} alt="Logo BeeAgency" className="w-24 sm:w-28" />
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Contenido inferior centrado */}
      <div className="relative z-10 w-full flex justify-center items-end flex-1 pb-10">
        <div style={{ position: 'relative', height: '300px', width: '100%' }}>
          <TextPressure
            text="BEEAGENCY"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
      </div>
    </header>
  );
}
