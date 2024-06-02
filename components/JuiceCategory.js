import React from "react";
import Title from "./Title";
import Image from "next/image";
import Fade from "./animation/Fade";
import SecondaryButton from "./ui/button/SecondaryButton";

const juiceCategory = [
  {
    image: "/media/images/fruit1.png",
    juice_name: "Orange Drink",
    count: 8,
  },
  {
    image: "/media/images/fruit2.png",
    juice_name: "Litchi Drink",
    count: 10,
  },
  {
    image: "/media/images/fruit3.png",
    juice_name: "Kiwi Drink",
    count: 6,
  },
  {
    image: "/media/images/fruit4.png",
    juice_name: "Mango Drink",
    count: 4,
  },
  {
    image: "/media/images/fruit5.png",
    juice_name: "Strawberry Drink",
    count: 9,
  },
];

const JuiceCategory = () => {
  return (
    <div className="w-[1250px] mx-auto my-28">
      <Fade direction="down" delay={0.2}>
        <Title title="Juice Category" />
      </Fade>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-28">
        {juiceCategory.map((juiceItem, index) => (
          <Fade direction="right" delay={0.2} key={index}>
            <div className="bg-white rounded-lg flex flex-row items-center  h-[175px]">
              <Image
                src={juiceItem.image}
                alt={juiceItem.juice_name}
                width={200}
                height={200}
                className="h-[220px] mb-24 w-auto"
              />
              <div className="text-center">
                <h4 className="text-lg text-red-500">{juiceItem.juice_name}</h4>
                <h4 className="text-md text-red-500">{juiceItem.count}</h4>
                <SecondaryButton name="View"/>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default JuiceCategory;
