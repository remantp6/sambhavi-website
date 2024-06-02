import Hero from '../components/Hero'
import JuiceCategory from '../components/JuiceCategory'
import Video from "../components/Video"

export default function Home() {
  return (
    <div className='w-full h-auto  right'>
      <Hero/>
      <JuiceCategory/>
      <Video/>
    </div>
  );
}
