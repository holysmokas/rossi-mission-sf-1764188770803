import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';
import { ProductProvider } from './ProductContext.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import Checkout from './Checkout.jsx';
import AdminDashboard from './AdminDashboard.jsx';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
