import { Link } from "react-router-dom";
import blogPosts from "/src/data/blogPosts.json";

const BlogPreview = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-yellow-600 bg-yellow-100 rounded-full mb-4">
            Blog BeeAgency
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-cinzel">
            Insights para hacer crecer tu marca
          </h2>
          <hr className="w-20 mx-auto mt-6 border-yellow-400 border-2" />
        </div>

        {/* Grid de artículos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>

        {/* Botón ver todo */}
        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
          >
            Explora nuestro blog
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Componente interno para cada artículo
const ArticleCard = ({ post }) => (
  <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
    <div className="h-48 overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    <div className="p-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-semibold px-2 py-1 bg-gray-100 text-gray-600 rounded">
          {post.category}
        </span>
        <span className="text-xs text-gray-500">
          {post.readingTime}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-2 font-cinzel">
        {post.title}
      </h3>
      
      <p className="text-gray-600 mb-4">
        {post.excerpt}
      </p>
      
      <Link
        to={`/blog/${post.slug}`}
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium transition-colors"
      >
        Leer artículo
        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
    </div>
  </article>
);

export default BlogPreview;