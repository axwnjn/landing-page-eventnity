import Button from "./ui/Button";
import ImageCard from "./ui/ImageCard";

const About = () => {
  return (
    <>
      <section className="grid grid-cols-2 mx-auto max-w-6xl mt-50">
        {/* left */}
        <div className="flex flex-col max-w-sm gap-4 mt-40">
          <h3 className="font-bold text-[40px]">About Eventnity</h3>
          <p className=" text-xl font-medium">
            Evenity is event management expertise that helps and facilitates
            Event Planners in achieving the goal of carrying out an event.
          </p>
          <div className="mt-12">
            <Button text="More About Us" />
          </div>
        </div>

        {/* right */}
        <div className="relative">
          <div className="relative">
            <ImageCard
              image="/images/Coldplay2020242001.webp"
              orientation="vertical"
              overlayClass="linear-bg"
            />
          </div>
          <div className="absolute top-35 left-62 ">
            <ImageCard
              image="/images/concertold.jpeg"
              orientation="vertical"
              overlayClass="linear-bg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
