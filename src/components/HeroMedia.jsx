import bgVideo from "../assets/images/BG-video.mp4";
import cardImage from "../assets/images/cardimage.png";

const HeroMedia = () => {
  return (
    <div className="px-6 md:px-20 mt-10">

      <div className="relative rounded-[20px] overflow-hidden">

        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[161px] md:h-[540px] object-cover"
        />

        <img
          src={cardImage}
          alt="Preview"
          className="absolute left-1/2 top-1/2
          w-[140px] h-[100px] sm:w-[180px] sm:h-[130px]
          md:w-[460px] md:h-[340px]
          -translate-x-1/2 -translate-y-1/2
          rounded-[13px] shadow-xl object-cover"
        />

      </div>

    </div>
  );
};

export default HeroMedia;