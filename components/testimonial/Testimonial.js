import Image from "next/image";
import Title from "../landingpage/Title";
import CarouselBox from "./CarouselBox";

const Testimonial = () => {
  return (
    <div className="mb-28">
      <Title title="Vibrant Voices for Jimmy Juices" />
      <div className="relative">
      <Image
        src="/media/images/testimonial-image.jpg"
        alt="image"
        width={100}
        height={100}
        className="w-full h-[310px] md:h-[340px] lg:h-[370px] object-keep"
      />
      <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <CarouselBox />
      </div>
      </div>
    </div>
  );
};

export default Testimonial;
