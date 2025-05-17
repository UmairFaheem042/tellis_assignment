import React from "react";

const Testimonials = () => {
  return (
    <section className="flex max-w-[1400px] gap-40 mx-auto w-full p-10">
      <div className="flex flex-col gap-4">
        <div
          style={{
            backgroundImage:
              "url('https://dy7glz37jgl0b.cloudfront.net/advice/images/8ff5e000604ec7076b277ced1c8a6ab4-man-smiles-while-talking-to-his-friend-outdoors_l.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center", // Optional: centers the image
            // height: "", // Optional: set a height for the div
            color: "white",
            padding: "20px", // Optional: add some padding
          }}
          className="flex-1 flex flex-col gap-2 justify-end  w-[350px] rounded-xl"
        >
          <p className="font-semibold flex flex-col gap-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus dolore earum repellat.
            <span className="font-thin text-xs">
              Arian - Better Mortgage customer
            </span>
          </p>
        </div>
        <div className="flex gap-2 items-center justify-between">
          <button className="border-3 border-green-700 text-green-700 font-semibold p-2 rounded-full flex-1">
            Arian
          </button>
          <button className="border border-gray-300 p-2 rounded-full flex-1">
            Amanda
          </button>
          <button className="border border-gray-300 p-2 rounded-full flex-1">
            Paul
          </button>
        </div>
      </div>

      <div className="flex-1 flex items-center p-5 min-h-[calc(100vh-40px)] ">
        <div className="flex flex-col gap-4">
          <h1 className="text-8xl font-bold mb-4 text-gray-900">
            Find out why <br />
            we're better
          </h1>
          <div className="w-full ">
            <button className="bg-green-700 px-6 py-3 font-semibold rounded-lg text-white text-lg cursor-pointer hover:bg-green-900">
              See all our stories
            </button>
          </div>
          <p className="font-semibold text-lg">
            ⭐ Trustpilot Excellent 4.4{" "}
            <span className="font-thin">out of 5</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
