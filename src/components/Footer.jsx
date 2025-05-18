const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-20 px-4">
      <div className="max-w-[1400px] md:px-20 mx-auto w-full">
        <h2 className="text-3xl font-bold text-green-800 mb-10">Better</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* First Column: Company Info */}
          <div className="flex flex-col gap-4">
            <p className="text-gray-800">
              Better is a family of companies serving all your homeownership
              needs.
            </p>

            {/* Better Mortgage Section */}
            <div>
              <h3 className="text-2xl font-extrabold text-green-800">
                Better <span className="opacity-45">Mortgage</span>
              </h3>
              <p className="text-gray-600">
                We can't wait to say “Welcome home.” Apply 100% online, with
                expert customer support.
              </p>
            </div>

            {/* Better Real Estate Section */}
            <div>
              <h3 className="text-2xl font-extrabold text-green-800">
                Better <span className="opacity-45">Real Estate</span>
              </h3>
              <p className="text-gray-600">
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
            </div>

            {/* Better Cover Section */}
            <div>
              <h3 className="text-2xl font-extrabold text-green-800">
                Better <span className="opacity-45">Cover</span>
              </h3>
              <p className="text-gray-600">
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
            </div>

            {/* Better Inspect Section */}
            <div>
              <h3 className="text-2xl font-extrabold text-green-800">
                Better <span className="opacity-45">Inspect</span>
              </h3>
              <p className="text-gray-600">
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
            </div>

            {/* Better Settlement Services Section */}
            <div>
              <h3 className="text-2xl font-extrabold text-green-800">
                Better <span className="opacity-45">Settlement Services</span>
              </h3>
              <p className="text-gray-600">
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </div>
          </div>

          {/* Second Column: Resources Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-800">Resources</h3>
            <ul className="flex flex-col gap-6 text-gray-800 font-semibold">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>

          {/* Third Column: Company Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-gray-800">Company</h3>
            <ul className="flex flex-col gap-6 text-gray-800 font-semibold">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner with Us</li>
              <li>Learning center</li>
              <li>FAQs</li>
              <li>Investor relations</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
