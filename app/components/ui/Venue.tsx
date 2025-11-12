export const Venue = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col bg-white gap-1.5 py-4 px-5 justify-center max-w-50 rounded-2xl shadow-xl ${className}`}
    >
      <p className="text-gray-400 text-xl">VENUE : 2</p>
      <p className="font-semibold text-xl"> Kempinski Hotel Indonesia</p>
      <p className="text-gray-400 text-base">Jakarta, Indonesia</p>
    </div>
  );
};
