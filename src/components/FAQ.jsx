import React from "react";

const FAQ = () => {
  return (
    <section className="flex flex-col gap-10 md:gap-20 max-w-[1200px] mx-auto w-full p-10">
      {/* Header Section */}
      <header className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between w-full">
        <h1 className="text-5xl font-semibold text-gray-900 md:w-[60%]">
          Got Questions?
          <br />
          We've got answers
        </h1>

        {/* Button Section */}
        <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-5 w-full">
          <button className="cursor-pointer border-3 border-green-800 text-green-800 font-semibold p-2 rounded-full flex-1">
            Our Products
          </button>
          <button className="cursor-pointer border border-gray-300 p-2 rounded-full flex-1">
            Calculators
          </button>
          <button className="cursor-pointer border border-gray-300 p-2 rounded-full flex-1">
            Guides & FAQs
          </button>
        </div>
      </header>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* FAQ 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-300 transition-all">
          <h2 className="text-xl font-semibold text-gray-900">
            What is a mortgage?
          </h2>
          <p className="text-gray-600 mt-2">
            A mortgage is a loan used to purchase a property, where the property
            itself serves as collateral for the loan.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-300 transition-all">
          <h2 className="text-xl font-semibold text-gray-900">
            How do I apply for a mortgage?
          </h2>
          <p className="text-gray-600 mt-2">
            To apply for a mortgage, you need to provide your personal and
            financial details, including income, credit history, and more.
          </p>
        </div>

        {/* FAQ 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-300 transition-all">
          <h2 className="text-xl font-semibold text-gray-900">
            What are the interest rates for mortgages?
          </h2>
          <p className="text-gray-600 mt-2">
            Interest rates depend on various factors, including your credit
            score, the type of loan, and current market conditions.
          </p>
        </div>

        {/* FAQ 4 */}
        <div className="bg-white p-6 rounded-xl border border-gray-300 transition-all">
          <h2 className="text-xl font-semibold text-gray-900">
            Can I refinance my mortgage?
          </h2>
          <p className="text-gray-600 mt-2">
            Yes, refinancing allows you to adjust the terms of your existing
            mortgage, such as the interest rate or loan length.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
