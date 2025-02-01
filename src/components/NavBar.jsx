import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BiMenuAltRight } from "react-icons/bi";
import logo from "../assets/whiteLogo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="z-50 ">
      {/* Desktop Navbar */}

      <div className=" hidden lg:flex flex-row bg-[#141313] px-6 justify-between items-center text-white font-serif font-bold">
        <div>
          <a href="/">
            <img src={logo} alt="Logo" className="h-[90px] w-[170px]" />
          </a>
        </div>
        <div>
          <ul className="flex flex-row items-center justify-between space-x-4 text-base ">
            <li>
              <Link
                to="/"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                Collection
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                Faq
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="py-1 hover:border-b-2 hover:border-y-color4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row space-x-3">
          <a
            href="#"
            className="py-3 border rounded-full px-7 hover:bg-color4 hover:border-0 hover:scale-10"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="py-3 border-transparent rounded-full bg-color4 px-7 hover:bg-transparent hover:border-color4 hover:border-2"
          >
            Register
          </a>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden bg-[#141313] w-full py-2 px-6 flex justify-between items-center z-50 ">
        <a href="/">
          <img src={logo} alt="Logo" className="h-[60px] w-auto" />
        </a>
        <button onClick={toggleMenu} className="text-white text-[40px]">
          {isMenuOpen ? <FaTimes /> : <BiMenuAltRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed z-50 flex flex-col items-end w-full px-6 py-3 font-extrabold bg-black lg:hidden top-16 justify-items-end active:underline">
          <a href="/" className="py-2 text-lg text-white hover:text-gray-400">
            Home
          </a>
          <a
            href="/products"
            className="py-2 text-lg text-white hover:text-gray-400"
          >
            Products
          </a>

          <a
            href="/about"
            className="py-2 text-lg text-white hover:text-gray-400"
          >
            About Us
          </a>
          <a
            href="/gallery"
            className="py-2 text-lg text-white hover:text-gray-400"
          >
            Collection
          </a>
          <a
            href="/contact"
            className="py-2 text-lg text-white hover:text-gray-400"
          >
            Contact
          </a>
          <a
            href="/faq"
            className="py-2 text-lg text-white hover:text-gray-400"
          >
            FAQ
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
