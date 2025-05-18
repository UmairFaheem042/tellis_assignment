import React from "react";

const GreenBlock = () => {
  return (
    <section className="bg-green-800  my-5 md:my-24 ">
      <div className="mx-auto max-w-[1100px] px-10 py-20  text-white flex flex-col gap-8 ">
        <h2 className="text-2xl md:text-5xl font-medium">
          How we're changing things
        </h2>
        <p className="text-[0.9rem]">
          Homeownership is a huge part of our economy. Housing overall is a $33
          trillion business, and mortgages account for $15 trillion. Yet home
          finance operates in the same way it has for decades — through opaque
          systems and expensive intermediaries whose interests are misaligned
          with consumers'.
        </p>
        <p className="text-[0.9rem]">
          That's why Better.com is redefining the homeownership process from the
          ground up. We're using technology to make it faster and more
          efficient, and humans to help make it friendly and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default GreenBlock;
