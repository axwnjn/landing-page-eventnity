import Button from "./ui/Button";
import ImageCard from "./ui/ImageCard";

const About = () => {
  return (
    <>
      <section className="grid  md:grid-cols-2 justify-center gap-12 mx-auto max-w-6xl px-12 mt-50 mb-50">
        {/* left */}
        <div className="flex flex-col px-6  max-w-sm gap-4 mt-40">
          <h3 className="font-bold text-[40px]">About Eventnity</h3>
          <p className=" text-xl ">
            Evenity is event management expertise that helps and facilitates
            Event Planners in achieving the goal of carrying out an event.
          </p>
          <div className="mt-12">
            <Button text="More About Us" />
          </div>
        </div>

        {/* right */}
        <div className="relative justify-self-center md:justify-self-start">
          <div className="">
            <ImageCard
              image="/images/Coldplay2020242001.webp"
              orientation="vertical"
              overlayClass="linear-bg"
            />
          </div>
          <div className="hidden lg:block md:absolute top-35 left-62 ">
            <ImageCard
              image="/images/concertold.jpeg"
              orientation="vertical"
              overlayClass="linear-bg"
            />
          </div>

          <div className=" absolute right-1/2 translate-x-1/2 top-90 lg:left-20 lg:top-100 bg-white w-48 space-y-3 text-center shadow-xl py-4 px-5 rounded-2xl">
            <h3 className="font-bold text-5xl">46+</h3>
            <p className="text-gray-400 text-sm font-semibold">
              Events in The Last Year
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
