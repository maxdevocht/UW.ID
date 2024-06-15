import { ArrowRight01Icon } from "@hugeicons/react-pro";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full flex lg:bg-n-8/90 px-5 py-20">
      <div className="flex flex-row items-center justify-between lg:px-7.5 xl:px-10 w-1/2">
        <div>
          <h1 className="text-4xl font-light mb-2">
            Unleash Digital <br />
            Potential with{" "}
            <span className="font-code text-4xl font-bold">UW.ID</span>
          </h1>

          <p className="font-light text-zinc-700 mb-4">
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

      <div className="border flex flex-row items-center lg:px-7.5 xl:px-10 w-1/2">
        <img src="" alt="" />
      </div>
    </section>
  );
};

export default Hero;
