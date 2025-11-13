import Image from "next/image";

const Logo = () => {
  return (
    <>
      <div className="w-[230px] h-[143] flex items-center relative justify-center  rounded-2xl shadow-xl">
        <Image
          src="/images/Hulu_logo_(2018).svg.png"
          alt="/logo"
          fill
          className="object-scale-down p-6"
        />
      </div>
    </>
  );
};

export default Logo;
