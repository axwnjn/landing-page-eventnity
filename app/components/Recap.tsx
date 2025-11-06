import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

const Recap = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <h3 className="text-5xl font-semibold text-center">Recap Event 2022</h3>

        <div className="relative linear-bg bg-black/45 overflow-hidden flex flex-col justify-between py-20 w-[1220px] h-[600px] rounded-4xl">
          <Image
            src="/images/conertimgg.jpg"
            alt="content"
            fill
            className="object-cover -z-1"
            priority
          />
          <div className=" text-white space-y-1.5 text-shadow-lg px-12">
            <h1 className="font-bold tracking-tight text-4xl">Taylor Swift</h1>
            <p className="tracking-wide flex items-center gap-2">
              California, USA
              <FaMapLocationDot size={20} />
            </p>
          </div>

          <div className="flex items-center text-white justify-between px-12">
            <div className="flex items-center gap-3 p-3 w-fit  ">
              <FaPlayCircle size={50} />
              <p className="text-xl ">START VIDEO</p>
            </div>

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
