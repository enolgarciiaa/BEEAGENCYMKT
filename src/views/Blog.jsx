function Blog() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-[#0e0e10] px-6 py-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 mb-6 tracking-tight uppercase">
        Blog en mantenimiento
      </h1>
      <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
        Estamos trabajando para traerte los mejores artículos, noticias y casos de estudio.
        <br className="hidden sm:inline" /> ¡Muy pronto disponible!
      </p>

      <div className="mt-12 text-gray-500 italic text-sm sm:text-base">
        Última actualización: abril 2025
      </div>
    </div>
  );
}

export default Blog;
