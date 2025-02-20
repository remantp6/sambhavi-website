import Title from "../landingpage/Title";
import Fade from "../animation/Fade";
import { merriweather } from "../../lib/utils";
import Gallery from "./Gallery";
import Breadcrumb from "../breadcum/Breadcum";

const Collection = () => {
  return (
    <div className="px-4 py-14 md:py-20 lg:py-24">
    <Breadcrumb/>
      <Title title="Explore Our Vibrant Gallery" />
      <Fade direction="right" delay={0.2}>
        <p
          className={`${merriweather.className} lg:text-justify text-gray-500 mb-10 md:mb-12 lg:max-w-4xl mx-auto`}
        >
          "Discover the beauty and freshness of our juice creations through our
          vibrant image gallery. Each photo captures the essence of our
          delicious juices, made from the finest ingredients to revitalize your
          body and tantalize your taste buds. Scroll through and get inspired to
          sip and savor the goodness of Jimmy's Juice Shop."
        </p>
      </Fade>
      <div className="lg:max-w-4xl mx-auto">
        <Gallery />
      </div>
    </div>
  );
};

export default Collection;
