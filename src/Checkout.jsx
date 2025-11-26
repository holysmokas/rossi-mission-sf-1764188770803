import { useState } from 'react';
import { useCart } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cartItems, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '', email: '', address: '', city: '', zip: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully! Thank you for your purchase.');
    clearCart();
    navigate('/');
  };

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6">
          <div className="space-y-4 mb-6">
            <input type="text" placeholder="Full Name" required value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg" />
            <input type="email" placeholder="Email" required value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg" />
            <input type="text" placeholder="Address" required value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
              className="w-full px-4 py-2 border rounded-lg" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" required value={formData.city}
                onChange={(e) => setFormData({...formData, city: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg" />
              <input type="text" placeholder="ZIP Code" required value={formData.zip}
                onChange={(e) => setFormData({...formData, zip: e.target.value})}
                className="w-full px-4 py-2 border rounded-lg" />
            </div>
          </div>

          <div className="border-t pt-4 mb-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>${getTotal().toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
