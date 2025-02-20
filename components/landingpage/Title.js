import { dancingScript } from "../../lib/utils";
import Fade from "../animation/Fade";

//md:text-4xl 
const Title = ({ title }) => {
  return (
    <Fade direction="down" delay={0.2}>
      <h1
      style={{fontFamily:"cursive"}}
        className="text-2xl lg:text-3xl font-bold text-gray-500 text-center pb-6 md:pb-10 lg:pb-14"
      >
        {title}
      </h1>
    </Fade>
  );
};

export default Title;
