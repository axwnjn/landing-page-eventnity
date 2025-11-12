import Image from "next/image";

export const Card = ({}) => {
  return (
    <>
      <div className="w-fit">
        <div className="w-[370] h-[240] bg-amber-200 relative overflow-hidden rounded-3xl">
          <Image
            src="/images/concertold.jpeg"
            alt="image-content"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="flex justify-between text-[15px] mt-3">
          <p className="text-gray-500">February 6th 2023</p>
          <p className="text-gray-500">10 PM to 12 PM</p>
        </div>
        <div className="mt-3 space-y-0.5">
          <h3 className="text-gray-700 text-xl font-semibold">
            Meet up Freelancer
          </h3>
          <p className="text-gray-500  text-sm">
            Become a potential and professional freelancer
          </p>
        </div>
      </div>
    </>
  );
};
