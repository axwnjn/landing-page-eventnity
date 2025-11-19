import Logo from "./ui/Logo";

const images = [
  {
    id: "1",
    title: "Spotify",
    src: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg",
  },
  {
    id: "2",
    title: "Netflix",
    src: "https://cdn.worldvectorlogo.com/logos/netflix-3.svg",
  },
  {
    id: "3",
    title: "Disney+",
    src: "https://cdn.worldvectorlogo.com/logos/disney-2.svg",
  },
  {
    id: "4",
    title: "Amazon Prime Video",
    src: "https://cdn.worldvectorlogo.com/logos/amazon-prime-video-1.svg",
  },
  {
    id: "5",
    title: "HBO Max",
    src: "https://cdn.worldvectorlogo.com/logos/hbo-1.svg",
  },
  {
    id: "6",
    title: "Apple TV+",
    src: "https://cdn.worldvectorlogo.com/logos/apple-tv-plus-logo.svg",
  },
  {
    id: "7",
    title: "YouTube",
    src: "https://cdn.worldvectorlogo.com/logos/youtube-6.svg",
  },
  {
    id: "8",
    title: "Peacock",
    src: "https://cdn.worldvectorlogo.com/logos/iqiyi-logo-new.svg",
  },
];

const Partner = () => {
  return (
    <section className="flex flex-col items-center mb-40 px-4">
      <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 text-center">
        Client Partner
      </h3>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-x-10 
          gap-y-12 
          max-w-5xl 
          w-full
        "
      >
        {images.map((image) => (
          <Logo key={image.id} imageSrc={image.src} />
        ))}
      </div>
    </section>
  );
};

export default Partner;
