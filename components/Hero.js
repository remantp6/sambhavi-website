import React from "react";
import ImageCircle from "./ImageCircle";
import Button from './ui/button/PrimaryButton'
import Fade from './animation/Fade'

const Hero = () => {
  return (
    <div className="w-full h-screen  bg-gradient-to-br from-red-700 to-green-600 flex flex-col justify-center items-center">
      <div className="w-[1200px] flex flex-row justify-between items-center">
        <div className="w-[550px] text-white">
        <Fade direction="down" delay={0.2}>
          <h1 className="text-6xl font-bold mb-10">
            Freshly Squeezed Juice Just For You
          </h1>
          <h2 className="text-4xl font-semibold my-10">
            Filled with nutrients
          </h2>
          </Fade>
          <Fade direction="down" delay={0.2}>
          <Button name="All products"/>
          </Fade>
        </div>
        <ImageCircle />
        </div>
    </div>
  );
};

export default Hero;
