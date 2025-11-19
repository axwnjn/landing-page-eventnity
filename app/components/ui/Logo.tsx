import Image from "next/image";

interface LogoProps {
  imageSrc: string;
  className?: string;
}

const Logo = ({ imageSrc, className }: LogoProps) => {
  return (
    <div
      className="
        relative 
        w-full 
        max-w-[200px] 
        aspect-230/143 
        flex 
        items-center 
        justify-center 
        rounded-2xl 
        shadow-xl 
        bg-white 
        mx-auto
      "
    >
      <Image
        src={imageSrc}
        alt="partner-logo"
        fill
        className={`object-contain p-6 sm:p-8 ${className}`}
      />
    </div>
  );
};

export default Logo;
