import { timeline } from "../utils/data";

const Timeline = () => {
  return (
    <section className="max-w-[900px] mx-auto py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Company timeline
      </h2>

      <div className="relative">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
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
                <div
                  className={`md:w-[45%] bg-gray-200 p-8 rounded-lg text-[0.9rem] leading-relaxed text-center z-50 ${
                    isLeft ? "md:order-1 md:text-center" : "md:order-3"
                  }`}
                >
                  {text}
                </div>

                <div className="md:order-2 flex-shrink-0 z-10">
                  <span className="block bg-green-700 text-white font-medium px-8 py-4 rounded-full text-xl">
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
