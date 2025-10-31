import ImageCard from "./ui/ImageCard";

const Hero = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl relative py-6 px-6 mb-20">
        <ImageCard
          image="/images/background-card1.jfif"
          desc1="Welcome to our ticketing website! "
          desc2="Not only can you purchase tickets to the hottest events in town, but you can also create your own custom tickets with our easy-to-use platform. Say goodbye to generic tickets and hello to personalized and professional-looking ones that will make your event stand out from the rest."
          title="Where Your Event Dreams Come to Life!"
          orientation="horizontal"
        ></ImageCard>
        <button className="bg-blue-700 absolute text-white bottom-0 left-1/2 -translate-x-1/2 rounded-2xl py-3 px-8">
          Explore Event
        </button>
      </div>
    </>
  );
};

export default Hero;

// bg-[url(https://assets-au-01.kc-usercontent.com/1c344202-e9c0-02e1-35fd-d94199aa6f2b/bf1b1574-9f14-4d38-906c-082f368618eb/Accor_Stadium_Concert_Generic_1920x1080_2.jpg)]
