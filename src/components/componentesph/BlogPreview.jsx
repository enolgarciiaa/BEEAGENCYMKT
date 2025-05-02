import { Link } from "react-router-dom";
import blogPosts from '/src/data/blogData.js';

const BlogPreview = () => {
  return (
    <section className="relative w-full min-h-screen px-6 md:px-10 lg:px-16 2xl:px-32 py-24 flex flex-col items-center justify-center overflow-hidden text-white">
      
      {/* Título */}
      <div className="text-center space-y-6 max-w-4xl z-10">
        
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-slate-300 to-slate-400">
          Insights para  <span className="neon-blue ">hacer crecer tu marca</span>
        </h2>
        <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
          Conocimiento práctico, innovación y tendencias para marcas que quieren dejar huella en la era digital.
        </p>
        <div className="w-24 h-1 neon-button-cyan mx-auto rounded-full"></div>
      </div>

      {/* Artículos */}
      <div className="mt-16 w-full max-w-[1600px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10">
        {blogPosts.slice(0, 3).map((post) => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>

      {/* Botón */}
      <div className="text-center mt-14 z-10">
        <Link
          to="/blog"
          className="neon-button-cyan bg-black text-white px-8 py-4 rounded-full text-sm md:text-base tracking-widest uppercase font-semibold  duration-300 transition-all hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        >
          Explora nuestro blog
        </Link>
      </div>
    </section>
  );
};

const ArticleCard = ({ post }) => (
  <article className="bg-black/30 backdrop-blur-md border border-blue-400 rounded-xl overflow-hidden shadow-md hover:shadow-yellow-400/10 transition-all duration-300 group relative">
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold px-3 py-1 neon-button-cyan  text-white rounded-full">
          {post.category}
        </span>
        <span className="text-xs text-gray-400">{post.readingTime}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-blue-300 group-hover:text-blue-400 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-200 mb-4">{post.excerpt}</p>
      <Link
        to={`/blog/${post.slug}`}
        className="text-sm text-blue-400 hover:text-blue-400 font-semibold transition-colors"
      >
        Leer artículo
      </Link>
    </div>
  </article>
);

export default BlogPreview;
