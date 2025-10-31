import ImageCard from "./ui/ImageCard";

const About = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:justify-between">
          <div className="flex flex-col gap-3 max-w-md">
            <h2 className="font-bold text-5xl">About Eventnity</h2>
            <p className="text-lg ">
              Evenity is event management expertise that helps and facilitates
              Event Planners in achieving the goal of carrying out an event.
            </p>
            <button className="bg-fuchsia-400 px-3 py-3 self-start rounded-2xl">
              More About Us
            </button>
          </div>

          <div>
            <ImageCard
              image="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
              orientation="vertical"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
