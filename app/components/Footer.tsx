import AndroidDownload from "./icons/AndroidDownload";
import AppleDownload from "./icons/AppleDownload";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full p-10 md:p-16 text-white rounded-t-4xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        <div className="flex flex-col gap-10 col-span-1 sm:col-span-2 lg:col-span-2">
          <div>
            <h1 className="text-4xl font-bold">Evenity</h1>
            <p className="text-xl font-semibold italic">
              Ease of being together
            </p>
          </div>

          <div className="space-y-4">
            <AppleDownload />
            <AndroidDownload />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Evenity</h3>
          <ul className="space-y-2 tracking-wide">
            <li>Start For Free</li>
            <li>Login</li>
            <li>Pricing</li>
          </ul>
        </div>

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

      <div className="flex flex-wrap justify-between items-center mt-14 gap-6">
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex gap-5 text-white">
            <FaFacebook size={32} />
            <AiFillInstagram size={32} />
            <FaSquareXTwitter size={32} />
            <FaLinkedin size={32} />
            <FaYoutube size={32} />
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 tracking-wide text-sm">
            <p>Terms of Service</p>
            <p>Privacy</p>
            <p>Return and Refund</p>
          </div>
        </div>

        <span className="text-sm opacity-80">Copyright © 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
