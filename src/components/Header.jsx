import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext.jsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartCount } = useCart()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 md:h-12 mr-3" 
              onError={(e) => e.target.style.display='none'} 
            />
            <Link to="/" className="text-2xl font-bold text-gray-900">
              Rossi Mission SF
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-blue-600 transition">
              Shop
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-blue-600 transition relative">
              Cart
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <Link to="/admin" className="text-sm text-gray-400 hover:text-gray-600 ml-4">
              Admin
            </Link>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                About
              </Link>
              <Link to="/shop" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Shop
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Contact
              </Link>
              <Link to="/cart" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Cart ({getCartCount()})
              </Link>
              <Link to="/admin" className="block px-3 py-2 text-sm text-gray-400 hover:text-gray-600">
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header