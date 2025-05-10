"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="min-h-[300vh] md:min-h-[200vh] xl:min-h-[500vh] 2xl:min-h-[300vh] py-40 overflow-visible antialiased relative flex flex-col [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{ rotateX, rotateZ, translateY, opacity }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:mt-40 xl:mt-0 px-4 w-full left-0 top-0">
      <h1 className="text-4xl md:text-6xl md:ml-20 2xl:ml-6 lg:text-7xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-200">
        Estrategia hecha <br /> de mente y emoción.
      </h1>
      <p className="max-w-2xl md:ml-20 2xl:ml-6 text-base md:text-xl mt-8 text-neutral-200">
        Combinamos innovación, análisis y sensibilidad para crear marcas que no solo destacan, sino que se adaptan y evolucionan en un entorno cada vez más inteligente.
      </p>
      <div className="mt-10 md:ml-20 2xl:ml-6">
        <a
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 neon-button-cyan bg-black text-white px-10 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Descubre más
        </a>
      </div>
    </div>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{ x: translate }}
      className="h-[400px] w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block">
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full bg-black opacity-50 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 text-white">{product.title}</h2>
    </motion.div>
  );
};
