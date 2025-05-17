import { Link } from "react-router-dom";
import Button from "./Button";
import heroImg from "../assets/hero-variant.png";
import googleImg from "../assets/google.svg";

const Hero = () => {
  return (
    <section className="flex-1 bg-green-700 py-20 text-center">
      <div className="max-w-[800px] w-full min-h-[calc(100vh-250px)] mt-10 container mx-auto flex flex-col gap-20 relative ">
        <h2 className="z-[100] text-9xl font-bold text-lime-400 mb-4">
          Mortgages <br />
          made simple
        </h2>
        <img
          src={heroImg}
          alt=""
          style={{ backgroundColor: "transparent" }}
          className="absolute left-[50%] bottom-[-17%] translate-x-[-50%]  w-[400px]"
        />
        <div className="z-[100] flex justify-between items-center">
          <div className="flex flex-col gap-2">
            {/* <Button label={"Start my approval"}/> */}
            <button className="bg-green-400 text-black px-8 py-4 font-bold rounded-full">
              Start my approval
            </button>
            <p className="text-sm text-white font-thin">
              🕛 3 min | No credit impact
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl flex items-center gap-2">
                <img src={googleImg} className="w-[30px]" alt="" /> ⭐⭐⭐⭐⭐
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
