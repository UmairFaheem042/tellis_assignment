import heroImg from "../assets/hero-variant.png";
import googleImg from "../assets/google.svg";

const Hero = () => {
  return (
    <section className="py-20 bg-green-800  text-center relative">
      <div className="max-w-[800px] w-full mt-10 container mx-auto flex flex-col gap-20 px-6 md:px-2 relative ">
        <h2 className="z-[100] text-6xl md:text-9xl font-bold text-lime-400 mb-4">
          Mortgages <br />
          made simple
        </h2>

        <img
          src={heroImg}
          alt="Hero image"
          className="absolute left-1/2 top-[-17.6%] md:top-[-1.5%]  transform -translate-x-1/2 w-[400px]"
        />

        <div className="z-[100] flex md:flex-row flex-col md:gap-0 gap-4 justify-between items-center ">
          <div className="flex flex-col gap-2">
            <button className="bg-green-400 text-black px-8 py-4 font-medium rounded-full">
              Start my approval
            </button>
            <p className="text-sm text-white font-thin">
              🕛 3 min | No credit impact
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl flex items-center gap-2">
                <img src={googleImg} className="w-[30px]" alt="Google" />{" "}
                ⭐⭐⭐⭐⭐
              </p>
              <p className="text-sm text-white font-thin">
                4.6 stars | 3177 Google reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
