
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // !false = true
  };

  return (
    <nav className="bg-[#f3f8ff]  min-w-full absolute z-30">
      <div className="px-4 py-4 container mx-auto flex justify-between md:py-8 items-center">
        <a href="#">
          <img
            className="w-4/12 md:w-6/12"
            src="https://www.certosoftware.com/images/logo.svg"
            alt=""
          />
        </a>

        {/* hamberger menu hidden md */}
        <div className="md:hidden">
          <button id="menu-toggle" className="text-black" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* menu hidden mobile */}
        <div className="hidden  md:flex space-x-10 font-bold ">
          <ul className="flex space-x-10 px-5 py-3 text-xl ">
            <li>
              <a className="hover:text-indigo-700" href="#">
                iPhone
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-700" href="#">
                Android
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-700" href="#">
                Help
              </a>
            </li>
            <li>
              <a className="flex hover:text-indigo-700 space-x-5" href="#">
                Company{" "}
                <img
                  className="pl-2 w-5 h-8 hover:text-indigo-700"
                  src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                  alt=""
                />
              </a>
            </li>
          </ul>

          <a
            className="text-center self-center px-5 py-2 bg-indigo-600 rounded-3xl text-white hover:bg-indigo-700"
            href="#"
          >
            Sign in
          </a>
        </div>
      </div>

      {/* mobile nav menu */}
      {isMenuOpen ? (

          <ul className="flex-col md:hidden text-center ">
            <li>
              <a className="hover:text-indigo-700" href="#">
                iPhone
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-700" href="#">
                Android
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-700" href="#">
                Help
              </a>
            </li>
            <li>
              <a className="hover:text-indigo-700 space-x-5" href="#">
                Company
              </a>
            </li>
          </ul>
      ) : null}
    </nav>
  );
}

export default Navbar;
