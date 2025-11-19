import Image from "next/image";
interface CardProps {
  image: string;
  title: string;
  desc: string;
  date: string;
  hour: string;
}
export const Card = ({ image, title, desc, date, hour }: CardProps) => {
  return (
    <a href="#" className="group w-full max-w-sm mx-auto">
      <div className="relative w-full aspect-370/240 overflow-hidden rounded-3xl">
        <Image
          src={image}
          alt="image-content"
          fill
          className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-500"
          priority
        />
      </div>
      <div className="flex justify-between text-[14px] mt-3">
        <p className="text-gray-500">{date}</p>
        <p className="text-gray-500">{hour}</p>
      </div>
      {}
      <div className="mt-3 space-y-1">
        <h3 className="text-gray-700 text-lg font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </a>
  );
};
