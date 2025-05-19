import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`${
        isMenuOpen ? "min-h-screen pt-6" : "h-[80px]"
      } flex flex-col justify-center gap-10 z-[999] sticky top-0 left-0 w-full ${
        pathname === "/" ? "bg-green-800 text-white" : "bg-white text-black"
      }  p-4 ${pathname === "/start" && "hidden"}`}
    >
      <nav className="max-w-[1400px] mx-auto w-full flex items-center justify-between px-6 sm:px-10">
        {/* Logo and Continue Button visible on all screen sizes */}
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center justify-center gap-10">
            <NavLink to="/" className="text-2xl font-bold">
              Better
            </NavLink>

            {/* Desktop Menu Items */}
            <ul className="hidden md:flex gap-5 text-md">
              <li>
                <NavLink
                  to="/about"
                  className={`${
                    pathname === "/"
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-gray-100 hover:text-black"
                  } transition-all  px-0 lg:px-6 py-3 rounded-full`}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/calculator"
                  className={`${
                    pathname === "/"
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-gray-100 hover:text-black"
                  } transition-all  px-0 lg:px-6 py-3 rounded-full`}
                >
                  Mortgage Calculator
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/start"
                  className={`${
                    pathname === "/"
                      ? "hover:bg-white hover:text-black"
                      : "hover:bg-gray-100 hover:text-black"
                  } transition-all  px-0 lg:px-6 py-3 rounded-full`}
                >
                  Start Page
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile Contact and Auth Links */}
          <ul className="hidden md:flex items-center gap-5 space-x-4">
            <li
              className={`cursor-pointer transition-all ${
                pathname === "/"
                  ? "hover:bg-white hover:text-black"
                  : "hover:bg-gray-100 hover:text-black"
              } rounded-full border-2 p-2 hidden lg:block border-[rgba(255,255,255,0.4)]`}
            >
              📞
            </li>
            <li>
              <NavLink
                to="/"
                className={`${
                  pathname === "/"
                    ? "hover:bg-white hover:text-black"
                    : "hover:bg-gray-100 hover:text-black"
                } transition-all  px-6 py-3 hidden lg:block  rounded-full`}
              >
                Sign In
              </NavLink>
            </li>
            <li
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-transparent hover:text-white bg-green-400"
                  : "bg-green-600 hover:bg-green-900 text-white"
              } transition-all  px-6 py-3 rounded-full font-medium`}
            >
              <NavLink to={"/"}>Continue</NavLink>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center ">
            <button
              onClick={toggleMenu}
              className={`${
                pathname === "/" ? "text-white" : "text-black"
              } text-3xl cursor-pointer`}
            >
              {isMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Links (only visible when isMenuOpen is true) */}
      <div
        className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} ${
          pathname === "/" ? "bg-green-800" : "bg-white"
        } flex-1 items-center justify-center w-full px-6 py-4 `}
      >
        <ul className="flex flex-1 flex-col items-center gap-10 text-md">
          <li>
            <NavLink
              to="/about"
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-green-400 hover:text-black text-white"
                  : "hover:bg-green-600 hover:text-white"
              } transition-all  px-6 py-3 rounded-full`}
              onClick={() => setIsMenuOpen(false)} // Close the menu when clicking a link
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calculator"
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-green-400 hover:text-black text-white"
                  : "hover:bg-green-600 hover:text-white"
              } transition-all  px-6 py-3 rounded-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Mortgage Calculator
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/start"
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-green-400 hover:text-black text-white"
                  : "hover:bg-green-600 hover:text-white"
              } transition-all  px-6 py-3 rounded-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Start Page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-green-400 hover:text-black text-white"
                  : "hover:bg-green-600 hover:text-white"
              } transition-all  px-6 py-3 rounded-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/"}
              className={` text-black ${
                pathname === "/"
                  ? "hover:bg-green-400 hover:text-black text-white"
                  : "hover:bg-green-600 hover:text-white"
              } transition-all  px-6 py-3 rounded-full`}
              onClick={() => setIsMenuOpen(false)}
            >
              Continue
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
