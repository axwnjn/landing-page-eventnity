import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Recap = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-semibold text-center">Recap Event 2022</h3>

        <div className="relative linear-bg bg-black/45 overflow-hidden flex flex-col justify-between py-20 w-[1220px] h-[600px] rounded-4xl">
          <video className="absolute top-0 " autoPlay muted loop>
            <source src="/videos/6187887-uhd_3840_2160_25fps.mp4" />
          </video>
          <div className=" text-white z-10 space-y-1.5 text-shadow-lg px-12">
            <h1 className="font-bold tracking-tight text-4xl">Taylor Swift</h1>
            <p className="tracking-wide flex items-center gap-2">
              California, USA
              <FaMapLocationDot size={20} />
            </p>
          </div>

          <div className="flex items-center z-10 text-white justify-end px-12">
            <div>
              <p className="font-semibold text-shadow-lg tracking-wide text-xl">
                February 29, 2023
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="flex flex-col justify-center items-center w-30 h-30 shadow-xl rounded-xl">
            <h3 className="font-bold text-5xl">23</h3>
            <p className="text-lg text-slate-400">DAYS</p>
          </div>
          <div className="flex flex-col justify-center items-center w-30 h-30 shadow-xl rounded-xl">
            <h3 className="font-bold text-5xl">09</h3>
            <p className="text-lg text-slate-400">HOURS</p>
          </div>
          <div className="flex flex-col justify-center items-center w-30 h-30 shadow-xl rounded-xl">
            <h3 className="font-bold text-5xl">17</h3>
            <p className="text-lg text-slate-400">MINUTES</p>
          </div>
          <div className="flex flex-col justify-center items-center w-30 h-30 shadow-xl rounded-xl">
            <h3 className="font-bold text-5xl">03</h3>
            <p className="text-lg text-slate-400">SECONDS</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recap;
