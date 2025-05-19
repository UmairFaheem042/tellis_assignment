import React, { useState } from "react";

const testimonials = {
  Arian: {
    img: "https://dy7glz37jgl0b.cloudfront.net/advice/images/8ff5e000604ec7076b277ced1c8a6ab4-man-smiles-while-talking-to-his-friend-outdoors_l.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolore earum repellat.",
    name: "Arian – Better Mortgage customer",
  },
  Amanda: {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "Doloremque, nostrum. Ratione dignissimos perferendis maxime, minus ad obcaecati quia officia.",
    name: "Amanda – Better Mortgage customer",
  },
  Paul: {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    text: "Molestias eaque quibusdam quae facere ullam eveniet, necessitatibus accusantium?",
    name: "Paul – Better Mortgage customer",
  },
};

const Testimonials = () => {
  const [current, setCurrent] = useState("Arian");

  const { img, text, name } = testimonials[current];

  return (
    <section className="flex my-10 flex-col-reverse md:flex-row gap-5 md:gap-40 mx-auto max-w-[1200px] w-full md:px-16 md:py-20 px-10 py-20">
      <div className="flex flex-col gap-4 h-[500px] md:h-auto">
        <div
          style={{
            backgroundImage: `url('${img}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "20px",
          }}
          className="flex-1 flex flex-col gap-2 justify-end h-[300px] md:w-[350px] rounded-xl transition-all duration-300"
        >
          <p className="font-semibold">
            {text}
            <span className="block font-thin text-xs mt-2">{name}</span>
          </p>
        </div>

        <div className="flex gap-2 items-center justify-between">
          {Object.keys(testimonials).map((person) => (
            <button
              key={person}
              onClick={() => setCurrent(person)}
              className={`p-2 rounded-full flex-1 cursor-pointer ${
                current === person
                  ? "border-3 border-green-800 text-green-800 font-semibold"
                  : "border border-gray-300"
              }`}
            >
              {person}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center p-5 md:min-h-[calc(100vh-40px)]">
        <div className="flex flex-col items-center md:items-start gap-4 w-full">
          <h1 className="text-4xl sm:text-6xl md:text-[5rem] text-center md:text-start  font-bold mb-4 text-gray-900">
            Find out why <br />
            we're better
          </h1>
          <div className="w-full flex justify-center md:justify-start">
            <button className="bg-green-800 px-6 py-3 font-semibold rounded-lg text-white text-sm sm:text-[1rem]  md:text-lg cursor-pointer hover:bg-green-900">
              See all our stories
            </button>
          </div>
          <p className="font-semibold  md:text-lg text-center ">
            ⭐ Trustpilot Excellent 4.4{" "}
            <span className="font-thin">out of 5</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
