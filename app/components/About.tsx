import ImageCard from "./ui/ImageCard";

const About = () => {
  return (
    <>
      <section className="mx-auto max-w-6xl py-4 px-5">
        <div className="grid md:grid-cols-2">
          <div className="">
            <h1 className="text-4xl font-bold">About Eventnity</h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo saepe
              consequuntur possimus voluptates dolorum velit veniam neque
              reprehenderit vitae amet.
            </p>
            <button className="bg-amber-400 py-3 px-4 rounded-2xl">
              More About Us
            </button>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute">
              <ImageCard
                image="/images/background-card1.jfif"
                orientation="vertical"
              ></ImageCard>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-10 translate-y-10">
              <ImageCard
                image="/images/background-card1.jfif"
                orientation="vertical"
              ></ImageCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
