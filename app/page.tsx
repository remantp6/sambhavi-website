//import Carousel from 'react-multi-carousel';
import Hero from "../components/landingpage/Hero";
import JuiceCategory from "../components/landingpage/JuiceCategory";
import Video from "../components/landingpage/Video";
import PromoBanner from '../components/landingpage/PromoBanner'
import Testimonial from '../components/testimonial/Testimonial'

export default function Home() {
  return (
    <main>
      <Hero />
      <JuiceCategory />
      <Video />
      <PromoBanner/>
      <Testimonial/>
    </main>
  );
}
