function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Rossi Mission SF
          </h1>
          <p className="text-xl text-gray-600">
            Crafting premium clothing with passion and purpose since our founding
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in the heart of San Francisco, Rossi Mission SF began with a simple mission: 
              to create high-quality, stylish clothing that reflects the vibrant spirit of our city. 
              We believe that great clothing should not only look good but also feel good and last long.
            </p>
            <p className="text-gray-700">
              Our team of designers and craftspeople work tirelessly to bring you pieces that combine 
              timeless style with modern functionality. Every item in our collection is carefully 
              selected and designed to meet our high standards of quality and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To provide premium clothing that empowers individuals to express their unique style 
                while maintaining the highest standards of quality and sustainability.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Quality craftsmanship</li>
                <li>• Sustainable practices</li>
                <li>• Customer satisfaction</li>
                <li>• Community support</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold mb-2">Premium Materials</h4>
                <p className="text-gray-600 text-sm">
                  We source only the finest fabrics and materials for our products.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">✨</div>
                <h4 className="font-semibold mb-2">Unique Designs</h4>
                <p className="text-gray-600 text-sm">
                  Our in-house designers create original, trend-setting pieces.
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-semibold mb-2">Customer First</h4>
                <p className="text-gray-600 text-sm">
                  Your satisfaction is our top priority, always.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About