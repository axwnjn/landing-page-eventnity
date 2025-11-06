import Button from "./ui/Button";
import ImageCard from "./ui/ImageCard";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl relative py-6 px-6 mt-20 mb-20">
        <ImageCard
          image="/images/Slash-Myles-Kennedy-Living-The-Dream-DVD-01-Credit-Kevin-Nixon-1000.webp"
          desc1="Welcome to our ticketing website! "
          desc2="Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest."
          title="Where Your Event Dreams Come to Life!"
          orientation="horizontal"
          overlayClass="linear-bg bg-black/40"
        ></ImageCard>
        <button className="bg-[#070148] absolute font-semibold tracking-tight text-white bottom-0 left-1/2 -translate-x-1/2 rounded-lg py-4 px-10">
          Explore Event
        </button>
      </div>
    </>
  );
};

export default Hero;

// bg-[url(https://assets-au-01.kc-usercontent.com/1c344202-e9c0-02e1-35fd-d94199aa6f2b/bf1b1574-9f14-4d38-906c-082f368618eb/Accor_Stadium_Concert_Generic_1920x1080_2.jpg)]
