import React from "react";

const FAQ = () => {
  return (
    <section className="flex max-w-[1400px] gap-40  mx-auto w-full p-10">
      <header className="flex items-center justify-between w-full">
        <h1 className="flex-1 text-5xl font-semibold text-gray-900">
          Got Questions?
          <br />
          We've got answers
        </h1>

        <div className="flex-1 flex gap-2 items-center justify-between">
          <button className="border-3 border-green-700 text-green-700 font-semibold p-2 rounded-full flex-1">
            Our Products
          </button>
          <button className="border border-gray-300 p-2 rounded-full flex-1">
            Calculators
          </button>
          <button className="border border-gray-300 p-2 rounded-full flex-1">
            Guides & FAQs
          </button>
        </div>
      </header>

      {/* grid */}
      <div></div>
    </section>
  );
};

export default FAQ;
