import React from "react";
import Timeline from "../components/Timeline";
import Mission from "../components/Mission";
import Story from "../components/Story";
import GreenBlock from "../components/GreenBlock";

const About = () => {
  return (
    <div className="flex-1 flex flex-col bg-white py-20">
      <Mission />
      <Story />
      <GreenBlock />
      <Timeline />
    </div>
  );
};

export default About;
