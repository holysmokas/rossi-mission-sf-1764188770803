function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Rossi Mission SF</h3>
            <p className="text-gray-400">Quality products and excellent service.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#/" className="hover:text-white">Home</a></li>
              <li><a href="#/shop" className="hover:text-white">Shop</a></li>
              <li><a href="#/cart" className="hover:text-white">Cart</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">Email: info@example.com</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
            <a href="./terms-of-service.html" target="_blank" className="text-gray-400 hover:text-white">Terms</a>
            <a href="./privacy-policy.html" target="_blank" className="text-gray-400 hover:text-white">Privacy</a>
            <a href="./cookies.html" target="_blank" className="text-gray-400 hover:text-white">Cookies</a>
          </div>
          <p className="text-gray-400">&copy; 2025 Rossi Mission SF. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
