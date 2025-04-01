import { useState } from 'react';
import Aurora from '../components/Aurora';
import TextPressure from '../components/TextPressure';
import FlowingMenu from '../components/FlowingMenu';
import CarruselSection from '../components/CarruselSection';
import Lanyard from '../components/Lanyard';
import { motion } from "framer-motion";

const demoItems = [
  { link: '/', text: 'Home', image: 'https://picsum.photos/600/400?random=1' },
  { link: '/Beeagency', text: 'Beeagency', image: 'https://picsum.photos/600/400?random=2' },
  { link: '/services', text: 'Services', image: 'https://picsum.photos/600/400?random=3' },
  { link: '/blog', text: 'Blog', image: 'https://picsum.photos/600/400?random=4' },
  { link: '/contact', text: 'Contact', image: 'https://picsum.photos/600/400?random=5' }
];

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full">
      {/* HEADER */}
      <header className="relative w-full h-[120vh] overflow-hidden flex items-center justify-center">
        <Aurora
          colorStops={["#001f4d", "#3399ff", "#ffcc00"]}
          blend={0.6}
          amplitude={1.2}
          speed={0.5}
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />

        <button
          className="absolute top-6 right-6 z-20 text-white text-3xl sm:text-4xl"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>

        <div className="absolute z-10 w-full px-4 flex flex-col justify-center items-center text-center">
          <div className="w-full max-w-6xl h-[150px] sm:h-[200px] md:h-[200px] lg:h-[250px] xl:h-[300px] flex justify-center items-center">
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
              minFontSize={24}
            />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white max-w-4xl leading-relaxed">
            En un entorno cada vez mas cambiante, la diferencia es la meta.
          </p>
        </div>
      </header>

      {/* MENÚ FULLSCREEN */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 text-4xl sm:text-5xl z-50"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <div className="w-full h-full flex items-center justify-center px-4">
            <FlowingMenu items={demoItems} />
          </div>
        </div>
      )}

      {/******SECCION 2*********/}
      <section className="relative w-full h-[950px] bg-white dark:bg-black py-24 sm:py-32 lg:py-40 px-6 text-center overflow-hidden">
        <motion.div
          className="max-w-5xl mx-auto px-2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-neutral-900 dark:text-white leading-tight mt-10 sm:mt-14 lg:mt-20 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Agencia de marketing digital
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Impulsamos tu negocio con estrategias creativas, tecnología de vanguardia y una visión enfocada en resultados.
            Nos especializamos en conectar marcas con personas, optimizando cada punto de contacto.
          </motion.p>

          <motion.button
            className="mt-4 inline-block px-8 py-4 rounded-full bg-black text-white text-lg font-semibold hover:bg-neutral-800 transition-colors duration-300 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p>¡Únete al cambio!</p>
          </motion.button>
        </motion.div>
      </section>
      {/******SECCION 3***********/}
      <CarruselSection />

      {/******SECCION 4: LANYARD 3D******/}
      <section className="relative w-full h-[590px] bg-black flex items-center justify-center overflow-hidden">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </section>
    </div>
  );
}

export default Home;
