import Image from "next/image";

interface ImageCardProps {
  image: string;
  desc1?: string;
  desc2?: string;
  title?: string;
  orientation?: "horizontal" | "vertical";
  overlayClass?: string;
}

const ImageCard = ({
  image,
  desc1,
  desc2,
  title,
  orientation,
  overlayClass,
}: ImageCardProps) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={` 
        relative overflow-hidden rounded-4xl  
        ${isVertical ? "h-[421] w-[329]" : "h-[520px] "}
      `}
    >
      <Image
        src={image}
        alt="image-content"
        fill
        className="object-cover"
        priority
      />

      <div
        className={`absolute inset-0 ${overlayClass} flex flex-col  justify-center  text-white`}
      >
        <div className="max-w-160 px-12 flex flex-col gap-4">
          <p className="text-base md:text-xl opacity-80">{desc1}</p>
          <h2 className="text-4xl  md:text-5xl font-extrabold">{title}</h2>
          <p className="text-lg md:text-lg opacity-70">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
