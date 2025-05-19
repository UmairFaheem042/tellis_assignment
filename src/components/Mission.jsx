import React from "react";

const Mission = () => {
  return (
    <section className="px-10 py-20 md:h-screen mx-auto max-w-[1200px] flex flex-col items-center justify-center text-center gap-6">
      <h2 className="text-2xl md:text-3xl font-bold text-green-800">
        Our mission
      </h2>

      <p className="leading-[1.2] text-3xl md:text-6xl font-semibold text-gray-800 md:w-[90%]">
        We're making homeownership simpler, faster&nbsp;— and most importantly,
        more accessible for all Americans.
      </p>
    </section>
  );
};

export default Mission;
