const Button = ({ text, className }: { text: string; className?: string }) => {
  return (
    <button
      className={`bg-[#070148] font-semibold tracking-tight text-white rounded-lg py-4 px-10 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
