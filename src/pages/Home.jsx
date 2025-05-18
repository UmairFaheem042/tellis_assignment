import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const Home = () => {
  return (
    <div className="flex-1">
      <Hero />
      <Testimonials />
      <FAQ />
    </div>
  );
};
export default Home;
