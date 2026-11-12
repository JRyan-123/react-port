import { SiIndeed } from "react-icons/si";
import logo from "../assets/imgs/logo1.png";
import { BiLogoGmail, BiMenu, BiX } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 
    px-16 py-6 text-white backdrop-blur-md md:justify-evenly"
    >
      <a
        href="#home"
        className="bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-60
      text-3xl font-semibold transition-all duration-300 hover:opacity-100 flex gap-4"
      >
        <img src={logo} className="w-10" />
      </a>

      {/* navlinks */}
      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>

        <a
          href="#tech"
          className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>

        <a
          href="#projects"
          className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>

        <a
          href="#contact"
          className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      {/* icons */}
      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-blue-500">
          <SiIndeed />
        </li>

        <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-red-500">
          <BiLogoGmail />
        </li>

        <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-black hover:bg-white rounded-full">
          <FaGithub />
        </li>
      </ul>

      
      {/* mobile nav */}
      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
      )}

      {isOpen && (
        <div
          className={`fixed w-1/2 min-h-screen right-0 top-22 flex flex-col items-start justify-start gap-10 border border-gray-800 bg-black/70 p-12 ${isOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-5">
            <a
              href="#home"
              className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>

            <a
              href="#tech"
              className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>

            <a
              href="#projects"
              className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>

            <a
              href="#contact"
              className="cursor-pointer opacity-60 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>

          <ul className="flex flex-wrap gap-3">
            <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-blue-500">
              <SiIndeed />
            </li>

            <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-red-500">
              <BiLogoGmail />
            </li>

            <li className="cursor-pointer text-xl opacity-60 duration-300 transition-all hover:text-black hover:bg-white rounded-full">
              <FaGithub />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
