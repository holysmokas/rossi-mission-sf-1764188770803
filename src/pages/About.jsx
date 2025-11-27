function About() {
  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Rossi Mission SF
          </h1>
          <p className="text-xl text-gray-600">
            One of the premier graffiti art galleries in North America, showcasing a diverse array of Bay Area street artists.
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Celebrated Artists</h2>
            <p className="text-gray-700 mb-4">
              The gallery represents legendary figures like <strong>MQ</strong>, <strong>JENKS</strong>, and <strong>Savvy</strong>—some of the most famous names in the history of graffiti art.
            </p>
            <p className="text-gray-700 mb-4">
              MQ, for example, began his journey in the late 1970s in New York City, painting alongside icons like Keith Haring.
            </p>
            <p className="text-gray-700">
              Rossi also highlights the new wave of street artists, including emerging talents such as <strong>Eclair Bandersnatch</strong>, <strong>Savie</strong> and <strong>GONER</strong>. 
              Eclair Bandersnatch, hailed by the media as "the new Banksy," is just one example of Rossi's dedication to modern graffiti art.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Art Meets Fashion</h2>
            <p className="text-gray-700 mb-4">
              At Rossi, the experience extends beyond traditional art. The gallery collaborates with its artists to create exclusive clothing lines, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>T-shirts</li>
              <li>Hoodies</li>
              <li>Sweats</li>
            </ul>
            <p className="text-gray-700">
              These include both printed designs and unique, hand-painted pieces.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Beyond Canvases</h2>
            <p className="text-gray-700 mb-4">
              The gallery also offers an eclectic range of hand-painted objects, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-1">
              <li>Spray cans (starting at $100)</li>
              <li>Figurines</li>
              <li>Vases</li>
              <li>Even a fire hydrant!</li>
            </ul>
            <p className="text-gray-700">
              Rossi Mission SF is more than a gallery—it's a wonderland where graffiti art and fashion collide in an immersive experience.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
            <div className="text-xl">
              <p className="mb-2">📍 Physical Location:</p>
              <p className="font-semibold">791 Valencia Street</p>
              <p className="text-blue-100 mt-4">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About