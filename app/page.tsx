import About from "./components/About";
import Explore from "./components/Explore";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recap from "./components/Recap";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Explore />
      <Recap />
    </>
  );
};

export default Home;
