import Title from "./Title";

const Video = () => {
  return (
    <div className="py-16 md:py-20 lg:py-28">
      <Title title="A moments of healthy juice" />
      <video width="1100" height="100" controls preload="metadata" className="mx-auto">
        <source src="/media/videos/gimi-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
