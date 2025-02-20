"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { raleway, merriweather } from "../../lib/utils";

const card = [
  {
    message:
      "Turpis porttitor mi justo non proin eros. Habitant augue consequat ac hac viverra primis aliquam taciti vehicula feugiat tincidunt. Sodales porttitor vestibulum nisi sapien mus luctus.",
    img: "/media/images/fruit1.png",
    name: "Ram Bahadur",
    address: "Kathmandu",
  },
  {
    message:
      "Turpis porttitor mi justo non proin eros. Habitant augue consequat ac hac viverra primis aliquam taciti vehicula feugiat tincidunt. Sodales porttitor vestibulum nisi sapien mus luctus.",
    img: "/media/images/fruit2.png",
    name: "Hari Prasad",
    address: "Dang",
  },
  {
    message:
      "Turpis porttitor mi justo non proin eros. Habitant augue consequat ac hac viverra primis aliquam taciti vehicula feugiat tincidunt. Sodales porttitor vestibulum nisi sapien mus luctus.",
    img: "/media/images/fruit3.png",
    name: "Shyam Sundar",
    address: "Butwal",
  },
  {
    message:
      "Turpis porttitor mi justo non proin eros. Habitant augue consequat ac hac viverra primis aliquam taciti vehicula feugiat tincidunt. Sodales porttitor vestibulum nisi sapien mus luctus.",
    img: "/media/images/fruit4.png",
    name: "Sita Mahatto",
    address: "Tulsipur",
  },
];

const CarouselBox = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1536 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1536, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="transform 300ms ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {card.map((item, index) => (
        <div
          key={index}
          className="carousel-item h-[248px] bg-[#03487433] p-4 m-2 rounded-lg "
        >
          <p className={`${raleway.className} mb-4`}>{item.message}</p>
          <div className="flex justify-around items-center">
            <Image
              src={item.img}
              alt="image"
              width={200}
              height={200}
              className="object-cover z-10 h-20 w-20 rounded-full bg-white"
            />
            <div>
              <h3 className={`${merriweather.className} text-gray-700`}>
                {item.name}
              </h3>
              <h4 className="text-gray-600  text-center">{item.address}</h4>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselBox;
