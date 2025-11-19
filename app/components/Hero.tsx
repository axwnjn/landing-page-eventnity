import ImageCard from "./ui/ImageCard";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl relative px-4 sm:px-6 py-10 mt-20 mb-28">
        <ImageCard
          image="/images/Slash-Myles-Kennedy-Living-The-Dream-DVD-01-Credit-Kevin-Nixon-1000.webp"
          desc1="Welcome to our ticketing website! "
          desc2="Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest."
          title="Where Your Event Dreams Come to Life!"
          orientation="horizontal"
          overlayClass="linear-bg bg-black/40"
        />

        <div className="flex justify-center mt-6 sm:mt-8">
          <button className="bg-[#070148] font-semibold tracking-tight text-white rounded-lg py-3 px-8 sm:py-4 sm:px-10">
            Explore Event
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
