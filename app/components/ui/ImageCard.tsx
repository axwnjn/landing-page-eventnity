import Image from "next/image";

interface ImageCardProps {
  image: string;
  desc1?: string;
  desc2?: string;
  title?: string;
  orientation?: "horizontal" | "vertical";
}

const ImageCard = ({
  image,
  desc1,
  desc2,
  title,
  orientation,
}: ImageCardProps) => {
  const isVertical = orientation === "vertical";

  return (
    <div
      className={`
        relative overflow-hidden rounded-4xl  
        ${isVertical ? "h-[500px] w-[350px]" : "h-[520px] "}
      `}
    >
      <Image
        src={image}
        alt="image-content"
        fill
        className="object-cover"
        sizes="240px"
        priority
      />

      <div className="absolute inset-0 bg-black/40 flex flex-col  justify-center  text-white">
        <div className="max-w-2xl px-6 flex flex-col gap-4">
          <p className="text-base md:text-xl opacity-80">{desc1}</p>
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="text-lg md:text-lg opacity-70">{desc2}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
