import { Link } from "react-router-dom";
import blogPosts from '/src/data/blogData.js';
import fondoVideo from "/src/assets/fondoblanco.mp4";

const BlogPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 text-white relative overflow-hidden">

      {/* Fondo de video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={fondoVideo} type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      

      {/* Título y subtítulo */}
      <div className="max-w-7xl mx-auto text-center mb-16 z-10 relative">
        <span className="inline-block px-4 py-1 text-sm font-bold text-black bg-yellow-400 rounded-full tracking-wide shadow-lg">
          Blog BeeAgency
        </span>
        <h2 className="text-4xl sm:text-6xl font-extrabold mt-6 tracking-tight">
          <span className="text-slate-900">Insights para hacer crecer</span> <span className="text-blue-400"> tu marca</span>
        </h2>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Conocimiento práctico, innovación y tendencias para marcas que quieren dejar huella en la era digital.
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full"></div>
      </div>

      {/* Artículos */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative">
        {blogPosts.slice(0, 3).map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>

      {/* Botón de acción */}
      <div className="text-center mt-14 z-10 relative">
        <Link
          to="/blog"
          className="px-8 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
        >
          Explora nuestro blog
        </Link>
      </div>

    </section>
  );
};

const ArticleCard = ({ post }) => (
  <article className="bg-gray-500 rounded-xl border border-white/10 backdrop-blur-sm shadow-md hover:shadow-yellow-400/10 transition-all duration-300 overflow-hidden group relative">
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold px-3 py-1 bg-yellow-400 text-black rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">
          {post.readingTime}
        </span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-yellow-400 font-cinzel group-hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-200 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-sm text-yellow-400 hover:text-blue-400 font-semibold transition-colors"
      >
        Leer artículo 
      </Link>
    </div>
  </article>
);

export default BlogPreview;
