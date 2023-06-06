import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";
import SideBarOne from "./SideBarOne";
import myPic from "../Ardalan.png";
import pdf from '../ArdalanCV.pdf';



const About = () => {
  return (
    <div id="About" className="  Hero mx-6 md:mx-16 mt-6 lg:mt-32 md:flex justify-between ">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: "0" }}
        transition={{ duration: 1 }}
        className="msg  md:w-7/12 md:pr-8"
      >
        <h1 className="hOne"> &#60; About Me /&gt; </h1>

        <SideBarOne height={'3700px'}/>
        <p className="bodyTwo  mt-6  md:mt-10 lg:ml-24 mb-3">
          Hi, I'm
          <span className="text-tangerine"> &#123;</span>
          <span className="text-tangerine font-bold text-2xl md:text-4xl md:font-semibold">
            {" "}
            Ardalan!{" "}
          </span>
          <span className="text-tangerine"> &#125;</span>
        </p>
        <p className="bodyTwo xl:ml-44">
          <span className="text-iris"> &#62; </span>
          UX/UI Designer
        </p>
        <p className="bodyTwo xl:ml-44">
          <span className="text-iris"> &#62; </span> Product Designer
        </p>
      
        <p className="bodyOne xl:ml-44 mt-5">
          <span className="text-iris font-medium text-justify">&#62; </span>
          
          As a problem solver, my primary objective is to develop solutions that are user-friendly, practical, and centered around the user. My design approach and skill set is continuously evolving as I leverage my interest in web design, human behavior and understanding of how things work.I hold a 2-year degree in Experience Design from Changemaker Educations. Currently, I'm learning front-end development at Chas Academy, which will enable me to effectively convey my ideas to developers and actively participate in the development process.
        </p>

        <div className="ResumeComponent lg:ml-44 btnbck bg-lavender hover:bg-bgdrk text-jasmine text-center  w-28 h-11 rotate-[-17deg] mt-16 mb-2">
          <div className="btnframe border-4 border-peach w-32 h-11 flex rotate-[17deg] hover:bg-lavender origin-top-left">
            <button className=" place-items-center mx-auto">
             
              <a href={pdf} target="_blank" rel="noreferrer" className="">
              Resume
            </a>

            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "0" }}
        transition={{ duration: 1 }}
        className="myPic flex justify-center mt-16 lg:mt-8 relative"
      >
        <div
          className={styles.myPic}
          style={{
            backgroundImage: `url(${myPic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="md:hidden w-48 h-60 mt-[-25px] bg-eggplant absolute -z-10 rotate-[25deg] origin-bottom-left"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
