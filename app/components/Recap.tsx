import { FaMapLocationDot } from "react-icons/fa6";

const Recap = () => {
  return (
    <section className="min-h-screen flex justify-center items-center px-4">
      <div className="flex flex-col gap-10 w-full max-w-[1220px]">
        <h3 className="text-3xl sm:text-5xl font-semibold text-center">
          Recap Event 2022
        </h3>

        <div
          className="relative linear-bg bg-black/45 overflow-hidden 
          flex flex-col justify-between w-full h-[300px] sm:h-[400px] lg:h-[600px] 
          rounded-4xl"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/videos/6187887-uhd_3840_2160_25fps.mp4" />
          </video>

          <div className="text-white z-10 space-y-1.5 text-shadow-lg px-8 sm:px-12 pt-10">
            <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">
              Taylor Swift
            </h1>
            <p className="tracking-wide flex items-center gap-2 text-sm sm:text-base">
              California, USA
              <FaMapLocationDot size={20} />
            </p>
          </div>

          <div className="flex items-center z-10 text-white justify-end px-8 sm:px-12 pb-10">
            <p className="font-semibold text-shadow-lg tracking-wide text-lg sm:text-xl">
              February 29, 2023
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {[
            { num: "23", label: "DAYS" },
            { num: "09", label: "HOURS" },
            { num: "17", label: "MINUTES" },
            { num: "03", label: "SECONDS" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center 
              py-6 shadow-xl rounded-xl bg-white"
            >
              <h3 className="font-bold text-4xl sm:text-5xl">{item.num}</h3>
              <p className="text-base text-slate-500 tracking-wide">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recap;
