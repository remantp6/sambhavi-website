import Fade from "../animation/Fade";
import ImageCircle from "./ImageCircle";
import Button from "../ui/button/PrimaryButton";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[520px] md:h-[900px] lg:h-screen  bg-gradient-to-br from-red-600 to-green-400 flex flex-col justify-center items-center">
      <div className="max-w-[1250px] md:space-x-2 lg:space-x-4 xl:space-x-20 lg:px-4 xl:px-0 flex flex-row justify-between items-center">
        <div className="max-w-[550px] px-1 md:px-0 text-center lg:text-start text-white">
          <Fade direction="down" delay={0.2}>
            <div className="z-20">
              <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold mb-4 md:lg-8 lg:mb-10">
                Freshly Squeezed Juice Just For You
              </h1>
              <h2 className="text-2xl md:text-4xl font-semibold my-6 md:my-8 lg:my-10">
                Filled with nutrients
              </h2>
            </div>
          </Fade>
          <div className="w-fit mx-auto lg:mx-0">
            <Fade direction="down" delay={0.2}>
            <Link href="/contact">
              <Button name="Contact Us" />
              </Link>
            </Fade>
          </div>
        </div>
        <div className="hidden lg:block z-10">
          <ImageCircle />
        </div>
      </div>
      <Fade direction="right" delay={0.2}>
        <Image
          width={500}
          height={500}
          src="/media/images/sticker.png"
          alt="sticker"
          priority={50}
          className="absolute top-[35%] lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
        />
      </Fade>
    </div>
  );
};

export default Hero;
