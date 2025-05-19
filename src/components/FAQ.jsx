import { faqs } from "../utils/data";
const FAQ = () => {
  return (
    <section className="flex flex-col my-10 gap-10 md:gap-20 max-w-[1200px] mx-auto w-full md:px-16 md:py-20 px-10 py-20">
      <header className="flex flex-col-reverse md:flex-row gap-10  items-center justify-between w-full">
        <h1 className="font-semibold text-gray-900 text-center text-5xl md:text-start">
          Got Questions?
          <br />
          We've got answers
        </h1>

        <div className="flex-1 flex flex-col justify-end md:flex-row gap-4 md:gap-5 w-full">
          <button className="cursor-pointer border-3 border-green-800 text-green-800 font-medium px-4 py-2 rounded-full ">
            Our Products
          </button>
          <button className="cursor-pointer border border-gray-300 px-4 py-2 rounded-full">
            Calculators
          </button>
          <button className="cursor-pointer border border-gray-300 px-4 py-2 rounded-full">
            Guides & FAQs
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {faqs.map((item) => (
          <div className="bg-white p-6 rounded-xl border border-gray-300 transition-all">
            <h2 className="text-xl font-semibold text-gray-900">
              {item.heading}
            </h2>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
