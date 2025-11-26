import { useState, useEffect } from 'react';
import { useProducts } from './ProductContext.jsx';

function AdminDashboard() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ name: '', description: '', price: '', image: '', category: '', inStock: true });

  useEffect(() => {
    if (localStorage.getItem('adminAuth') === 'true') setIsAuth(true);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAuth(true);
      localStorage.setItem('adminAuth', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.removeItem('adminAuth');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { ...form, price: parseFloat(form.price) };
    if (editing) {
      updateProduct(editing, productData);
    } else {
      addProduct(productData);
    }
    setForm({ name: '', description: '', price: '', image: '', category: '', inStock: true });
    setEditing(null);
  };

  const startEdit = (product) => {
    setEditing(product.id);
    setForm(product);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg mb-4" />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">Login</button>
          <p className="text-sm text-gray-500 mt-4 text-center">Default password: admin123</p>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="text-red-600 hover:text-red-800">Logout</button>
        </div>

        {/* Add/Edit Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">{editing ? 'Edit Product' : 'Add Product'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} className="p-2 border rounded" />
            <input type="number" placeholder="Price" required step="0.01" value={form.price} onChange={(e) => setForm({...form, price: e.target.value})} className="p-2 border rounded" />
            <input type="text" placeholder="Image URL" value={form.image} onChange={(e) => setForm({...form, image: e.target.value})} className="p-2 border rounded" />
            <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({...form, category: e.target.value})} className="p-2 border rounded" />
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} className="p-2 border rounded md:col-span-2" />
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={form.inStock} onChange={(e) => setForm({...form, inStock: e.target.checked})} />
              In Stock
            </label>
          </div>
          <div className="mt-4 flex gap-2">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              {editing ? 'Update' : 'Add'} Product
            </button>
            {editing && (
              <button type="button" onClick={() => { setEditing(null); setForm({ name: '', description: '', price: '', image: '', category: '', inStock: true }); }} 
                className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400">Cancel</button>
            )}
          </div>
        </form>

        {/* Products List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left">Image</th>
                <th className="px-4 py-3 text-left">Name</th>
                <th className="px-4 py-3 text-left">Price</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-t">
                  <td className="px-4 py-3">
                    <img src={product.image || 'https://via.placeholder.com/50'} alt="" className="w-12 h-12 object-cover rounded" />
                  </td>
                  <td className="px-4 py-3 font-medium">{product.name}</td>
                  <td className="px-4 py-3">${product.price?.toFixed(2)}</td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded text-xs ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {product.inStock ? 'In Stock' : 'Out'}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button onClick={() => startEdit(product)} className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                    <button onClick={() => deleteProduct(product.id)} className="text-red-600 hover:text-red-800">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
