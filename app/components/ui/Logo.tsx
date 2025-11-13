import Image from "next/image";

interface logoProps {
  imageSrc: string;
  className?: string;
}

const Logo = ({ imageSrc, className }: logoProps) => {
  return (
    <>
      <div className="w-[230px] h-[143] flex items-center relative justify-center  rounded-2xl shadow-xl">
        <Image
          src={imageSrc}
          alt="/logo"
          fill
          className={`p-10 ${className}`}
        />
      </div>
    </>
  );
};

export default Logo;
