import About from "./components/About";
import EventSchedule from "./components/EventSchedule";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partner from "./components/Partner";
import Recap from "./components/Recap";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Recap />
      <EventSchedule />
      <Partner />
    </>
  );
};

export default Home;
