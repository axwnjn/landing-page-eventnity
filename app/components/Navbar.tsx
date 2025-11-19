import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <nav className="flex font-sans px-4 py-3 justify-between items-center md:justify-evenly ">
        <span className="font-bold">Eventnity</span>
        <ul className="hidden font-semibold md:flex gap-4 tracking-tight">
          <li>Home</li>
          <li>Pricing</li>
          <li>Event</li>
          <li>Resources</li>
          <li>Helpdesk</li>
        </ul>
        <div className="hidden lg:flex font-semibold gap-4 ">
          <button className="bg-transparent text-black rounded-lg py-2 px-5">
            Login
          </button>
          <button className="bg-[#070148] text-white rounded-lg py-2 px-5">
            Register
          </button>
        </div>
        <Menu className="md:hidden" />
      </nav>
    </>
  );
};

export default Navbar;
