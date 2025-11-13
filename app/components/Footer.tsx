import AndroidDownload from "./icons/AndroidDownload";
import AppleDownload from "./icons/AppleDownload";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 mx-auto max-w-400  p-15 px-20 text-white rounded-t-4xl">
      <div className=" grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr]">
        {/* grid 1st */}
        <div className="flex col-span-2 flex-col gap-[42]">
          <div>
            <h1 className="text-4xl font-bold">Eventnity</h1>
            <p className="text-xl font-semibold italic">
              Ease of being together
            </p>
          </div>
          <div className="space-y-4">
            <AppleDownload />
            <AndroidDownload />
          </div>
        </div>

        {/* grid 3rd */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Eventnity</h3>
          <ul className="space-y-2 tracking-wide">
            <li>Start For free</li>
            <li>Login</li>
            <li>Pricing</li>
          </ul>
        </div>
        {/* grid 4th */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Features</h3>
          <ul className="space-y-2 tracking-wide">
            <li>Payment Integration</li>
            <li>Newsletter</li>
            <li>Email Marketing</li>
            <li>QR Code Ticketing</li>
            <li>Event Hosting</li>
            <li>Promote</li>
            <li>Advertising</li>
          </ul>
        </div>
        {/* grid 5th */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Company</h3>
          <ul className="space-y-2 tracking-wide">
            <li>For Business</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Event</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mt-20">
        <div className="flex items-center gap-5">
          <div className="flex gap-5">
            <FaFacebook size={40} />
            <AiFillInstagram size={40} />
            <FaSquareXTwitter size={40} />
            <FaLinkedin size={40} />
            <FaYoutube size={40} />
          </div>
          <div className="flex gap-x-5 tracking-wide">
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Return and Refund</p>
          </div>
        </div>

        <span className="mr-20">Copyright © 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
