import ImageCard from "./ui/ImageCard";
import { Venue } from "./ui/Venue";

const Explore = () => {
  return (
    <section className="grid grid-cols-2 mx-auto max-w-6xl px-2 mb-50">
      {/* kiri */}
      <div className="relative">
        <h2 className="text-5xl font-semibold leading-relaxed max-w-[20rem]">
          Explore Beautiful Venues
        </h2>
        <ImageCard
          image="/images/dj-khaled-tour.jpg"
          orientation="vertical"
          overlayClass="linear-bg"
        />
        <Venue className="absolute bottom-15 right-1/5" />
      </div>

      {/* kanan */}
      <div className="relative ml-18 flex flex-col justify-center gap-6 items-center">
        <ImageCard
          image="/images/news-concert-1.jpg"
          orientation="vertical"
          overlayClass="linear-bg"
        />
        <Venue className="absolute top-30 -left-20 " />
        <p className="max-w-xs text-xl tracking-tight leading-relaxed">
          Explore new ideas at astoundingly beautiful venues. Attend Tech
          Startup Conferences and meet new brilliant minds from all over the
          world.
        </p>
      </div>
    </section>
  );
};

export default Explore;
