import { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

const defaultProducts = [
  { id: '1', name: 'MQ Graffiti T-Shirt', description: 'Hand-painted design by legendary artist MQ', price: 45.99, image: 'https://via.placeholder.com/300', category: 'T-Shirts', inStock: true },
  { id: '2', name: 'JENKS Street Art Hoodie', description: 'Exclusive hoodie featuring JENKS original artwork', price: 89.99, image: 'https://via.placeholder.com/300', category: 'Hoodies', inStock: true },
  { id: '3', name: 'Savvy Graffiti Sweatshirt', description: 'Premium sweatshirt with Savvy signature style', price: 69.99, image: 'https://via.placeholder.com/300', category: 'Sweats', inStock: true },
  { id: '4', name: 'Eclair Bandersnatch Limited Tee', description: 'Limited edition from "the new Banksy"', price: 55.99, image: 'https://via.placeholder.com/300', category: 'T-Shirts', inStock: true },
  { id: '5', name: 'Hand-Painted Spray Can', description: 'Unique art piece by gallery artists', price: 100.00, image: 'https://via.placeholder.com/300', category: 'Art Objects', inStock: true },
  { id: '6', name: 'GONER Street Art Figurine', description: 'Collectible figurine by emerging artist GONER', price: 75.00, image: 'https://via.placeholder.com/300', category: 'Art Objects', inStock: true },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('products');
    if (saved) {
      setProducts(JSON.parse(saved));
    } else {
      setProducts(defaultProducts);
    }
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }, [products]);

  const addProduct = (product) => {
    setProducts(prev => [...prev, { ...product, id: Date.now().toString() }]);
  };

  const updateProduct = (id, updates) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}