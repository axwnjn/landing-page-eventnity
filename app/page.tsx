import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recap from "./components/Recap";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Recap />
    </>
  );
};

export default Home;
