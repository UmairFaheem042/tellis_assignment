import React from "react";

const Timeline = () => {
  const timeline = [
    {
      year: 2014,
      text: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: 2015,
      text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: 2016,
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: 2017,
      text: "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: 2018,
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: 2019,
      text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: 2021,
      text: "Better acquires Trussle — The UK's most innovative online mortgage broker.",
    },
    {
      year: 2022,
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: 2023,
      text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      year: 2024,
      text: "Better Mortgage launches the fully digital 3-day HELOC².",
    },
    {
      year: "Today",
      text: "Better Mortgage launches One Day Verified Approval Letter.",
    },
  ];
  return (
    <section className="max-w-[900px] mx-auto py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Company timeline
      </h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

        {/* Items */}
        <ul className="space-y-24 mx-16 md:m-0 z-50">
          {timeline.map(({ year, text }, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <li
                key={year}
                className={` flex flex-col md:flex-row gap-16 z-50 ${
                  isLeft ? "md:justify-start" : "md:justify-end"
                } items-center w-full`}
              >
                {/* Content bubble */}
                <div
                  className={`md:w-[45%] bg-gray-200 p-8 rounded-lg text-[0.9rem] leading-relaxed text-center z-50 ${
                    isLeft ? "md:order-1 md:text-center" : "md:order-3"
                  }`}
                >
                  {text}
                </div>

                {/* Year pill */}
                <div className="md:order-2 flex-shrink-0 z-10">
                  <span className="block bg-green-700 text-white font-semibold px-8 py-4 rounded-full text-xl">
                    {year}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;
