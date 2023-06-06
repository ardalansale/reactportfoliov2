import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const NavMbl = (props) => {
  return (
    <motion.div
      // initial={{ x: '-100vw' }}
      // animate={{ x: 0 }}

      // transition={{ type: 'spring', stiffness: 120 }}

      className={props.showMenu}
      style={{ boxShadow: " -5px 5px #8A70FF", zIndex: "1" }}
    >
      <ul className=" mt-6 pt-3">
        <li className="my-7">
          <Link to="/">Home &#60; </Link>
        </li>
        <li className="my-7">
          <Link to="About">About &#60;</Link>
        </li>
        <li className="my-7">
          <Link to="Projects">Projects &#60;</Link>
        </li>
        <li className="my-7">
          <Link to="Contact">Contact Me &#60;</Link>
        </li>
        {/* <li className="my-7">
          <Link to="/">Blog &#60;</Link>
        </li> */}
      </ul>

      <button
        onClick={props.hideMenu}
        className="w-full text-lavender text-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 ml-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5l7 7-7 7M5 5l7 7-7 7"
          />
        </svg>
      </button>
    </motion.div>
  );
};

export default NavMbl;
