import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext.jsx';
import { ProductProvider } from './contexts/ProductContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Contact from './pages/Contact.jsx';
import Cart from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import Admin from './pages/Admin.jsx';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;