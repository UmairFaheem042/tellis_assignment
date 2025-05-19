const Story = () => {
  return (
    <section className="mx-auto max-w-[1200px] my-5 md:my-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:px-16 md:py-20 px-10 py-20">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
          The status quo is broken
        </h3>

        <p className="text-[0.9rem] md:text-md leading-relaxed mb-10 text-gray-800">
          The traditional processes around homeownership are opaque and
          stressful. Fees aren't transparent and some are simply outrageous in
          size. Traditional mortgage lending is rife with unnecessary fees and
          slow, painful processes. It's a system set up to benefit insiders — 
          not you. Better.com CEO, Vishal Garg, set out to change that.
        </p>

        <button className="bg-green-800 hover:bg-green-900 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors duration-200">
          Read Vishal's story
        </button>
      </div>

      <div className="relative w-full aspect-[16/9]">
        <img
          src="https://i.imgur.com/JxBrx4o.jpg"
          alt="Vishal Garg speaking in an office"
          className="w-full h-full object-cover rounded-lg"
        />
        <button
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-10 h-10 ml-1"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Story;
