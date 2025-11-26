import { Link } from 'react-router-dom';
import { useProducts } from './ProductContext.jsx';
import ProductCard from './ProductCard.jsx';

function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Rossi Mission SF</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Welcome to our store. Discover quality products at great prices.</p>
          <Link to="/shop" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/shop" className="text-blue-600 hover:text-blue-800 font-semibold">
              View All Products →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
