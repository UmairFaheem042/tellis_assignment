const Footer = () => {
  return (
    <footer className="border-t border-gray-200">
      <div className="py-20 px-4 max-w-[1300px] mx-auto w-full">
        <h2 className="text-3xl font-bold text-green-700">Better</h2>
        <div className="flex gap-20">
          <div className="flex flex-col gap-4 flex-1">
            <p className="mt-6">
              Better is a family of companies serving all your homeownership
              needs.
            </p>
            <div>
              <h3 className="mb-3 font-extrabold text-2xl text-green-700">
                Better <span className="opacity-45">Mortgage</span>
              </h3>
              <p>
                We can't wait to say “Welcome home.” Apply 100% online, with
                expert customer support.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-extrabold text-2xl text-green-700">
                Better <span className="opacity-45">Real Estate</span>
              </h3>
              <p>
                Connect with a local Better Real Estate Partner Agent to find
                out all the ways you can save.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-extrabold text-2xl text-green-700">
                Better <span className="opacity-45">Cover</span>
              </h3>
              <p>
                Shop, bundle, and save on insurance coverage for home, auto,
                life, and more.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-extrabold text-2xl text-green-700">
                Better <span className="opacity-45">Inspect</span>
              </h3>
              <p>
                Get free repair estimates, 24-hour turnarounds on reports, and
                rest easy with our 100-day inspection guarantee.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-extrabold text-2xl text-green-700">
                Better <span className="opacity-45">Settlement Services</span>
              </h3>
              <p>
                Get transparent rates when you shop for title insurance all in
                one convenient place.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h3 className="font-bold text-2xl text-gray-800">Resources</h3>
            <ul className="flex-1 flex flex-col gap-8 mt-4 font-semibold text-gray-700">
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

          <div className="flex flex-col gap-4 flex-1">
            <h3 className="font-bold text-2xl text-gray-800">Company</h3>
            <ul className="flex flex-col flex-1 gap-8 mt-4 font-semibold text-gray-700">
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
