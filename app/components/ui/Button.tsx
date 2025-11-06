const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-[#070148] font-semibold tracking-tight text-white rounded-lg py-4 px-10">
      {text}
    </button>
  );
};

export default Button;
