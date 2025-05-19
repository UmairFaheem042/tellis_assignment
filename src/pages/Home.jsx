import { useEffect } from "react";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex-1">
      <Hero />
      <Testimonials />
      <FAQ />
    </div>
  );
};
export default Home;
