import { useEffect } from "react";
import Timeline from "../components/Timeline";
import Mission from "../components/Mission";
import Story from "../components/Story";
import GreenBlock from "../components/GreenBlock";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1 flex flex-col bg-white ">
      <Mission />
      <Story />
      <GreenBlock />
      <Timeline />
    </div>
  );
};

export default About;
