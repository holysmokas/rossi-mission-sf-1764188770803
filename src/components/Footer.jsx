function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Rossi Mission SF</h3>
            <p className="text-gray-400">
              Premium clothing for the modern lifestyle. Quality, style, and comfort in every piece.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#/" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="#/shop" className="text-gray-400 hover:text-white transition">Shop</a></li>
              <li><a href="#/contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">T-Shirts</span></li>
              <li><span className="text-gray-400">Jeans</span></li>
              <li><span className="text-gray-400">Hoodies</span></li>
              <li><span className="text-gray-400">Dresses</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p>791 Valencia Street</p>
              <p>San Francisco, CA 94110</p>
              <p>sahar@rossimissionsf.com</p>
              <p>(415) 691-7085</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a href="./terms-of-service.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="./privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="./cookies.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Cookie Policy
            </a>
            <a href="./disclaimer.html" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Disclaimer
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2025 Rossi Mission SF. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer