import { ArrowRight01Icon } from "@hugeicons/react-pro";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex lg:bg-n-8/90 px-5">
      <div className="flex flex-row items-center justify-between lg:px-7.5 xl:px-10 w-1/2">
        <div>
          <h1 className="text-5xl font-light mb-8">
            Unleash Digital <br />
            Potential with{" "}
            <span className="font-code text-6xl font-bold">DANGO.</span>
          </h1>

          <p className="font-light text-zinc-700 mb-8">
            Welcome to the intersection of innovation and imagination, where
            your digital aspirations come to life.
          </p>

          <button className="flex border rounded-full py-1 px-5 font-grotesk bg-yellow">
            Explore
            <img
              src="./src/assets/images/arrow-right.svg"
              alt="arrow"
              className="ml-2"
            />
          </button>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center py-10 lg:px-7.5 xl:px-10 w-1/2">
        <video autoPlay muted loop width={450} height={450} className="">
          <source src="./src/assets/images/camera_vid.mp4"></source>
        </video>
      </div>
    </section>
  );
};

export default Hero;
