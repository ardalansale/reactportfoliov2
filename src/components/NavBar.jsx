import React, { useState } from "react";
import { Link } from "react-scroll";

import Logo from "../Logo-jasmine.png";
import NavMbl from "./NavMbl";

const NavBar = () => {
  const [menuClass, setMenuClass] = useState("hide");
  const [burger, setBurger] = useState("show");
  const [drop, setDrop] = useState("hide");

  const hideMenu = () => {
    console.log("you are clicking on back button");
    setMenuClass("hide");
    setBurger("show");
    setDrop("hide");
  };

  const showMenu = () => {
    console.log("this is to show");
    setMenuClass("showMenu");
    setBurger("hide");
    setDrop("");
  };

  return (
    <div className="flex justify-between  items-center w-full mx-6 md:mx-16">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="NavLink hidden md:block font-medium ">
        <ul className="flex cursor-pointer">
          <li className="mx-3">
            <Link to="/"> &gt; Home</Link>
          </li>
          <li className="mx-3">
            <Link to= "About" smooth="true" duration={1000}> &gt; About</Link>
          </li>
          <li className="mx-3">
            <Link to="Projects" smooth="true" duration={1000}> &gt; Projects</Link>
          </li>
          <li className="mx-3">
            <Link to="Contact" smooth="true" duration={1000}> &gt; Contact Me</Link>
          </li>
          {/* <li className="ml-3">
            <Link to="/blog"> &gt; Blog</Link>
          </li> */}
        </ul>
      </div>
      <div className="md:hidden">
        <button className="" onClick={showMenu}>
          <svg
            className={burger}
            width="24"
            height="24"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask id="path-1-inside-1_925_3410" fill="white">
              <rect width="24" height="5" rx="1" />
            </mask>
            <rect
              width="24"
              height="5"
              rx="1"
              stroke="#FEC5B9"
              strokeWidth="3"
              mask="url(#path-1-inside-1_925_3410)"
            />
            <mask id="path-2-inside-2_925_3410" fill="white">
              <rect y="9" width="24" height="5" rx="1" />
            </mask>
            <rect
              y="9"
              width="24"
              height="5"
              rx="1"
              stroke="#FEC5B9"
              strokeWidth="3"
              mask="url(#path-2-inside-2_925_3410)"
            />
            <mask id="path-3-inside-3_925_3410" fill="white">
              <rect y="18" width="24" height="5" rx="1" />
            </mask>
            <rect
              y="18"
              width="24"
              height="5"
              rx="1"
              stroke="#FEC5B9"
              strokeWidth="3"
              mask="url(#path-3-inside-3_925_3410)"
            />
          </svg>
          <svg
            className={drop}
            width="24"
            height="38"
            viewBox="0 0 24 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.25 0.999999C23.25 0.861929 23.1381 0.75 23 0.75H12H1C0.861929 0.75 0.75 0.861928 0.75 1V5.90658C0.75 6.01888 0.824884 6.1174 0.933088 6.14746L11.9331 9.20302C11.9769 9.21518 12.0231 9.21518 12.0669 9.20302L23.0669 6.14746C23.1751 6.1174 23.25 6.01888 23.25 5.90658V0.999999Z"
              fill="#FE9881"
              stroke="#FE9881"
              strokeWidth="1.5"
            />
            <path
              d="M23.25 13C23.25 12.8619 23.1381 12.75 23 12.75H11.3333H0.999998C0.861929 12.75 0.75 12.8619 0.75 13V17.1358C0.75 17.2424 0.817549 17.3372 0.918253 17.372L11.9183 21.1781C11.9712 21.1964 12.0288 21.1964 12.0817 21.1781L23.0817 17.372C23.1825 17.3372 23.25 17.2424 23.25 17.1358V13Z"
              fill="#FE9881"
              stroke="#FE9881"
              strokeWidth="1.5"
            />
            <path
              d="M23.25 25C23.25 24.8619 23.1381 24.75 23 24.75H12H1C0.861929 24.75 0.75 24.8619 0.75 25V28.5C0.75 28.5787 0.787048 28.6528 0.85 28.7L11.85 36.95C11.9389 37.0167 12.0611 37.0167 12.15 36.95L23.15 28.7L23.6 29.3L23.15 28.7C23.213 28.6528 23.25 28.5787 23.25 28.5V25Z"
              fill="#FE9881"
              stroke="#FE9881"
              strokeWidth="1.5"
            />
          </svg>
        </button>

        <NavMbl showMenu={menuClass} hideMenu={hideMenu} />
      </div>
    </div>
  );
};

export default NavBar;
