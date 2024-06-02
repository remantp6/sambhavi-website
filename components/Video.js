import React from "react";
import Title from "./Title";
import Fade from "./animation/Fade";

const Video = () => {
  return (
    <div>
      <Fade direction="down" delay={0.2}>
        <Title title="A moments of healthy juice" />
      </Fade>
      <video width="1100" height="100" controls className="mx-auto">
        <source src="/media/videos/gimi-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
