import ImageCard from "./ui/ImageCard";
import { Venue } from "./ui/Venue";

const Explore = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mx-auto max-w-6xl px-4 md:px-2 mb-20 gap-12 md:gap-0">
      <div className="relative flex flex-col gap-6 md:block">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug max-w-[20rem] mx-auto md:mx-0 text-center md:text-left">
          Explore Beautiful Venues
        </h2>

        <div className="mx-auto md:mx-0 w-full flex justify-center md:justify-start max-w-sm">
          <ImageCard
            image="/images/dj-khaled-tour.jpg"
            orientation="vertical"
            overlayClass="linear-bg"
          />
        </div>

        <Venue
          className="
          hidden md:block
          absolute
          bottom-10 md:bottom-16
          right-1/2 md:right-1/5
          translate-x-1/2 md:translate-x-0
        "
        />
      </div>

      <div className="relative flex flex-col md:left-1/3 justify-center items-center md:items-start gap-6 md:pl-12">
        <div className="w-full flex justify-center md:justify-start max-w-sm">
          <ImageCard
            image="/images/news-concert-1.jpg"
            orientation="vertical"
            overlayClass="linear-bg"
          />
        </div>

        <Venue
          className="
          hidden md:block
          absolute
          top-10 md:top-32
          left-1/2 md:-left-20
          -translate-x-1/2 md:translate-x-0
        "
        />

        <p className="max-w-xs text-lg sm:text-xl leading-relaxed text-center md:text-left">
          Explore new ideas at astoundingly beautiful venues. Attend Tech
          Startup Conferences and meet new brilliant minds from all over the
          world.
        </p>
      </div>
    </section>
  );
};

export default Explore;
