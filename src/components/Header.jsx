import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[80px] flex bg-green-700 text-white p-4">
      <nav className="max-w-[1200px] mx-auto w-full flex items-center justify-between ">
        <div className="flex gap-10 items-center">
          <NavLink to={"/"} className="text-2xl font-bold">
            Better
          </NavLink>
          <ul className="flex gap-5 space-x-4 text-md">
            <li>
              <NavLink
                to="/about"
                className="hover:bg-white hover:text-black  px-6 py-3 rounded-full"
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calculator"
                className="hover:bg-white hover:text-black px-6 py-3 rounded-full"
              >
                Mortgage Calculator
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/start"
                className="hover:bg-white hover:text-black px-6 py-3 rounded-full"
              >
                Start Page
              </NavLink>
            </li>
          </ul>
        </div>

        <ul className="flex items-center gap-5 space-x-4">
          <li className="rounded-full border-2 p-2 border-[rgba(255,255,255,0.4)]">
            📞
          </li>
          <li>
            <NavLink
              to={"/"}
              className="hover:bg-white hover:text-black px-6 py-3 rounded-full"
            >
              Sign In
            </NavLink>
          </li>
          <li className="hover:bg-transparent hover:text-white bg-green-400 text-black px-6 py-2 font-semibold rounded-full">
            <NavLink to={"/"}>Continue</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
