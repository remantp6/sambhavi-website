import Image from "next/image";
import { merriweather } from "../../lib/utils";
import Title from "./Title";
import { raleway } from "../../lib/utils";
import Fade from "../animation/Fade";

const considerations = [
  {
    id: 1,
    title: "Chemical Free",
    description: "Enjoy a pure, natural taste with no artificial additives.",
    imageSrc: "/media/images/chemical-free.png",
    alt: "Chemical Free",
  },
  {
    id: 2,
    title: "Healthy Fats",
    description:
      "Packed with healthy fats to keep you energized throughout the day.",
    imageSrc: "/media/images/healthy-fats.png",
    alt: "Healthy Fats",
  },
  {
    id: 3,
    title: "Eco-Besties",
    description: "Produced with eco-friendly practices to protect our planet.",
    imageSrc: "/media/images/eco-besties.png",
    alt: "Eco-Besties",
  },
];
const PromoBanner = () => {
  return (
    <div className="bg-[#feffe3] mb-16 md:mb-20 lg:mb-28 py-14 md:py-16 lg:py-24">
      <div className=" pb-14">
        <Title title="Get the facts!" />
        <Fade direction="right" delay={0.2}>
          <p className={`${raleway.className} px-2 md:px-0 text-center text-lg md:text-xl font-medium`}>
            We have the following considerations to ensure you get the best:
          </p>
        </Fade>
      </div>
      <div className="container md:px-4 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {considerations.map((consideration) => (
            <Fade direction="up" delay={0.2} key={consideration.id}>
            <div
              className="w-[340px] md:w-auto lg:max-w-[405px] md:max-h-[425px] mx-auto bg-white p-4 rounded-lg shadow-lg transform transition duration-500 hover:shadow-2xl hover:scale-105"
            >
              <Image
                src={consideration.imageSrc}
                width={100}
                height={100}
                alt={consideration.alt}
                className="mx-auto w-[80px] h-[80px] lg:w-[100px] lg:h-[100px]"
              />
              <h3
                className={`${merriweather.className} text-2xl font-semibold mt-4 text-center`}
              >
                {consideration.title}
              </h3>
              <p className="text-center mt-2">{consideration.description}</p>
            </div>
            </Fade>
          ))}
      </div>
      <div className="container lg:px-4 mx-auto relative mt-16 md:mt-20 lg:mt-24">
        <div className="w-[260px] md:w-[420px] lg:w-[480px] absolute left-[44%] top-1/2 md:left-[35%] lg:left-[30%] xl:left-[24%] md:top-[45%] transform -translate-x-1/2 -translate-y-1/2 ">
          <Fade direction="down" delay={0.2}>
            <h2
              className={`${merriweather.className} w-full text-md md:text-3xl lg:text-5xl font-semibold mb-4`}
            >
              Have you drunk a glass of{" "}
              <span className="text-[#ffdf51]">Jimmy juice!</span> today?
            </h2>
          </Fade>
          <Fade direction="right" delay={0.2}>
            <p className="text-sm font-medium md:text-md md:font-semibold">
              {" "}
              Start your day right with a refreshing glass of Jimmy juice.
              Packed with essential vitamins and minerals, it's the perfect way
              to stay healthy and hydrated.
            </p>
          </Fade>
        </div>
        <Fade direction="up" delay={0.2}>
          <Image
            src="/media/images/promoImage.png"
            width={500}
            height={500}
            alt="promo_image"
            className="w-[340px] h-[300px] md:w-[730px] lg:w-full md:h-[510px] object-center lg:object-cover mx-auto rounded-3xl shadow-2xl"
          />
        </Fade>
      </div>
    </div>
  );
};

export default PromoBanner;
