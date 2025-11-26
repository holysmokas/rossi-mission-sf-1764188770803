import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link to="/shop" className="text-blue-600 hover:text-blue-800">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-4 py-4 border-b last:border-0">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-blue-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 bg-gray-200 rounded">-</button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 bg-gray-200 rounded">+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700">Remove</button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-2xl font-bold text-blue-600">${getTotal().toFixed(2)}</span>
          </div>
          <Link to="/checkout" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg hover:bg-blue-700">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
