import React from "react";

const Button = ({ label }) => {
  return (
    <button className="bg-green-400 text-black px-6 py-2 font-semibold rounded-full">
      {label}
    </button>
  );
};

export default Button;
