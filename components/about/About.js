import Fade from "../animation/Fade";
import Title from "../landingpage/Title";
import Breadcum from '../breadcum/Breadcum';
import Image from "next/image";
import { merriweather, raleway } from "../../lib/utils";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 lg:py-24 lg:text-justify">
      <Breadcum/>
      <Title title="About Jimmy's Juice Shop" />
      <Image
        src="/media/images/about.jpg"
        alt="image"
        width={500}
        height={500}
        className="w-[950px] max-h-[450px] mx-auto object-keep bg-white mb-6 md:mb-10 lg:mb-14 rounded-lg"
      />

      <Fade direction="right" delay={0.2}>
        <div className="animated-div mb-6 text-lg">
          <p className={`${merriweather.className}`}>
            Welcome to Jimmy's Juice Shop, where freshness meets flavor! Our
            mission is to provide you with the most delicious, nutritious, and
            refreshing juices made from the finest ingredients. Here at Jimmy's,
            we believe in the power of nature's bounty to revitalize your body and
            mind.
          </p>
        </div>
      </Fade>
      
        <div className="mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Our Story</h2>
          <p className={`${raleway.className}`}>
            Jimmy's Juice Shop was born out of a passion for healthy living and a
            love for vibrant, tasty beverages. What started as a small stand at the
            local farmers' market has grown into a beloved juice destination. Our
            founder, Jimmy, envisioned a place where people could enjoy the freshest
            juices, made with care and a commitment to quality.
          </p>
        </div>
      
        <div className="mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Our Ingredients</h2>
          <p className={`${raleway.className}`}>
            At Jimmy's, we are dedicated to sourcing only the best ingredients. We
            partner with local farmers to bring you organic, seasonal fruits and
            vegetables. Our juices are cold-pressed to retain the maximum nutrients
            and flavor, ensuring that every sip is packed with goodness.
          </p>
        </div>
      
        <div className="mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Our Juices</h2>
          <p className={`${raleway.className}`}>
            We offer a wide range of juices to suit every taste and dietary need.
            From classic fruit blends to innovative vegetable concoctions, there's
            something for everyone. Whether you're looking for a morning boost, a
            midday refreshment, or a post-workout recovery, our juices are crafted
            to energize and nourish you.
          </p>
        </div>
      
        <div className="mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Our Commitment</h2>
          <p className={`${raleway.className}`}>
            Sustainability is at the heart of what we do. We use eco-friendly
            packaging and strive to minimize waste in our production process. By
            choosing Jimmy's Juice Shop, you're not only taking care of your health
            but also supporting a business that cares about the planet.
          </p>
        </div>
      
        <div className="mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Visit Us</h2>
          <p className={`${raleway.className}`}>
            Come visit us at our cozy shop or find us at various local markets and
            events. We love meeting our customers and sharing our passion for great
            juice. Follow us on social media to stay updated on our latest flavors
            and special offers.
          </p>
        </div>
      
        <div className="animated-div mb-6 text-lg">
          <h2 className="text-2xl font-semibold mb-2 text-gray-500">Join the Juice Revolution</h2>
          <p className={`${raleway.className}`}>
            Experience the vibrant taste of Jimmy's Juices today. Join our community
            of juice lovers and discover how our fresh, nutritious drinks can make
            you feel your best. Cheers to health, happiness, and delicious juice!
          </p>
        </div>
    </div>
  );
};

export default About;
