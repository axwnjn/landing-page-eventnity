"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between md:justify-evenly px-4 py-4 font-sans relative">
        <span className="text-xl font-bold">Evenity</span>

        <ul className="hidden md:flex gap-6 font-semibold tracking-tight">
          <li className="cursor-pointer hover:text-[#070148] transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-[#070148] transition">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-[#070148] transition">
            Event
          </li>
          <li className="cursor-pointer hover:text-[#070148] transition">
            Resources
          </li>
          <li className="cursor-pointer hover:text-[#070148] transition">
            Helpdesk
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4 font-semibold">
          <button className="py-2 px-5 rounded-lg hover:bg-gray-100 transition">
            Login
          </button>
          <button className="bg-[#070148] text-white py-2 px-5 rounded-lg hover:opacity-90 transition">
            Register
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden cursor-pointer"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden flex flex-col gap-4 font-semibold px-6 py-4 text-lg bg-white shadow-md">
          <button className="text-left hover:text-[#070148]">Home</button>
          <button className="text-left hover:text-[#070148]">Pricing</button>
          <button className="text-left hover:text-[#070148]">Event</button>
          <button className="text-left hover:text-[#070148]">Resources</button>
          <button className="text-left hover:text-[#070148]">Helpdesk</button>

          <div className="flex flex-col gap-3 pt-4">
            <button className="w-full py-2 rounded-lg hover:bg-gray-100 transition">
              Login
            </button>
            <button className="bg-[#070148] text-white w-full py-2 rounded-lg hover:opacity-90 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
