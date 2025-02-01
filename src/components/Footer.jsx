import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Logo from "../assets/whiteLogo.png";

const Footer = () => {
  return (
    <div>
      <div className="items-center content-center w-full gap-5 p-4 space-y-4 text-white lg:flex lg:flex-row md:space-y-10 justify-stretch">
        <div className="lg:flex-row justify-left align-middle lg:w-[100%]">
          <a href="/">
            <img src={Logo} alt="" className="lg:w-[250px] lg:h-[100px]" />
          </a>
          <p className="text-wrap">
            At NextDrive Car Rentals, we are dedicated to providing a
            hassle-free, reliable, and enjoyable car rental experience. Whether
            you're traveling for business, leisure, or need a temporary vehicle,
            NextDrive is your trusted partner on the road.
          </p>
        </div>
        <div className="grid justify-between w-full grid-cols-2 gap-8 md:flex ">
          <div className="space-y-3 ">
            <h1 className="text-xl font-bold text-color4">Quick Links</h1>
            <div className="grid space-y-2">
              <a href="/" className=" hover:text-color1">
                Home
              </a>
              <a href="/about" className=" hover:text-color1">
                About
              </a>
              <a href="/products" className=" hover:text-color1">
                Products
              </a>
              <a href="/gallery" className=" hover:text-color1">
                Collection
              </a>
              <a href="/contact" className=" hover:text-color1">
                Contact
              </a>
              <a href="/faq" className=" hover:text-color1">
                FAQ
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-xl font-bold text-color4">Parters</h1>
            <div className="grid space-y-2">
              <a href="#" className=" hover:text-color1">
                Toyota
              </a>
              <a href="#" className=" hover:text-color1">
                BMW
              </a>
              <a href="#" className=" hover:text-color1">
                Benz
              </a>
              <a href="#" className=" hover:text-color1">
                Porche
              </a>
              <a href="#" className=" hover:text-color1">
                Ferrari
              </a>
            </div>
          </div>
          <div className="space-y-3 ">
            <h1 className="text-xl font-bold text-color4">Social Media</h1>
            <div className="grid space-y-2 ">
              <a
                href="https://www.facebook.com/share/1DAD4D68z1/?mibextid=LQQJ4d"
                target="_blank"
                className=" hover:text-color1"
              >
                Facebook
              </a>
              <a
                href="https://x.com/degeorge_?s=21"
                target="_blank"
                className=" hover:text-color1"
              >
                Twitter {"(X)"}
              </a>
              <a
                href="https://www.instagram.com/geoxinho?igsh=amV1Z2w2YmVxMTR0&utm_source=qr"
                target="_blank"
                className=" hover:text-color1"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/georgetimmy"
                target="_blank"
                className=" hover:text-color1"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line */}
      <div className="mt-10 border-b-2 border-slate-300"></div>
      <div className="flex-row items-center content-center justify-center w-full p-4 py-4 text-white align-middle md:flex">
        <div className="items-center content-center justify-center text-center align-middle md:flex md:w-1/3">
          <p className="text-sm"> &#64; 2024 George. All Copyright Reserved</p>
        </div>
        <div className="flex flex-row md:w-1/3 justify-center items-center align-middle content-center text-center text-[16px space-x-5  text-[16px] text-bold py-3">
          <a
            href="https://www.facebook.com/share/1DAD4D68z1/?mibextid=LQQJ4d"
            target="_blank"
            className="text-color4 hover:text-color1"
          >
            {" "}
            <span>
              <FaFacebookF />
            </span>
          </a>
          <a
            href="https://www.instagram.com/geoxinho?igsh=amV1Z2w2YmVxMTR0&utm_source=qr"
            target="_blank"
            className="text-color4 hover:text-color1"
          >
            {" "}
            <span>
              <FaInstagram />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/georgetimmy"
            target="_blank"
            className="text-color4 hover:text-color1"
          >
            <span>
              <FaLinkedinIn />
            </span>
          </a>
          <a
            href="https://x.com/degeorge_?s=21"
            target="_blank"
            className="text-color4 hover:text-color1"
          >
            <span>
              <FaXTwitter />
            </span>
          </a>
        </div>

        <div className="items-center content-center justify-center space-x-2 text-sm text-center align-middle md:flex md:w-1/3 ">
          <a href="#" className="text-zinc-300 hover:text-color4">
            Terms & Condition
          </a>
          <a href="#" className="text-zinc-300 hover:text-color4">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
