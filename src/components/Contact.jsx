import React from "react";
import SideBarOne from "./SideBarOne";
import Logo from "../Logo-peach.png";
import MbLogo from "../Logo-mb.png"
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="Contact" className="Contact Component  mx-6 mt-20 md:mt-52 md:ml-64 ">
      <h1 className="hOne"> &#60; Contact /&gt; </h1>
      <SideBarOne height={'578px'}/>
      <div className="main md:flex  md:ml-10 md:mr-36 md:mt-20">
        <div className="left md:w-128  mr-52">
          <p className="text-iris leading-8 text-lg font-medium md:text-2xl md:leading-10  ">
            Let's
            <span className="text-tangerine"> &#123; Get In Touch &#125;</span>
          </p>
          <p className=" text-jasmine font-light leading-8  text-base md:text-2xl md:leading-10 mt-8">
            <span className="text-iris font-medium ">&#62; </span>
            I would love to hear from you and my inbox is always open. Whether you have a question or just want to say hi, I look forward to hearing from you! 
          </p>

          <button className="border-[3px] border-tangerine text-peach text-xl p-4 mt-10">
            <a href="mailto:taraneh.saleh@gmail.com?subject=Sayin Hi">Send me an email &gt;</a>

          </button>

          <div className="social  text-jasmine flex  justify-between w-24 h-10 mt-8">
            <div className="socOne w-10">
              <a href="https://github.com/T4r4n3h" target="_blank">
                <svg
                  style={{
                    width: "45",
                    height: "45",
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.5006104,9C7.5003662,9,7.5001831,9,7.5,9h-4C3.223999,8.9998169,3.0001831,9.2234497,3,9.4993896C3,9.4996338,3,9.4998169,3,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4993896,0.5C3.4996338,22,3.4998169,22,3.5,22h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507C8,21.5003662,8,21.5001831,8,21.5v-12C8.0001831,9.223999,7.7765503,9.0001831,7.5006104,9z M7,21H4V10h3V21z M18,9c-1.0848389,0.000061-2.1393433,0.3580933-3,1.0185547V9.5c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5C14.5003662,9,14.5001831,9,14.5,9h-4c-0.276001-0.0001831-0.4998169,0.2234497-0.5,0.4993896C10,9.4996338,10,9.4998169,10,9.5v12c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V16c0-0.8284302,0.6715698-1.5,1.5-1.5S18,15.1715698,18,16v5.5c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5c0.0001831,0,0.0003662,0,0.0005493,0h4c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507c0-0.0001831,0-0.0003662,0-0.0005493V14C22.9967651,11.2399292,20.7600708,9.0032349,18,9z M22,21h-3v-5c0-1.3807373-1.1192627-2.5-2.5-2.5S14,14.6192627,14,16v5h-3V10h3v1.203125c0,0.2124634,0.1343994,0.4016724,0.335022,0.4716797c0.2001343,0.0721436,0.4240112,0.0079956,0.5556641-0.1591797c1.3625488-1.7268066,3.8669434-2.0220337,5.59375-0.6594238C21.4462891,11.6152344,22.0053101,12.7747192,22,14V21z M5.867981,2.0018311C5.7503662,1.9935913,5.6323242,1.992981,5.5146484,2C4.0053711,1.8969116,2.6983032,3.0368652,2.5952148,4.5461426c-0.0041504,0.06073-0.0062256,0.121521-0.0063477,0.182373c-0.0130005,1.49646,1.1895752,2.7200928,2.6860352,2.7330933c0.0610962,0.0005493,0.1221313-0.0010376,0.1831055-0.0046387h0.0283203c1.5064087,0.1054077,2.8129883-1.0303345,2.918396-2.5367432S7.3743896,2.1072388,5.867981,2.0018311z M5.8334351,6.4598389C5.7179565,6.470459,5.6016235,6.4695435,5.4863281,6.4569702H5.4580078C4.5018921,6.5304565,3.6672974,5.8150024,3.593811,4.8588867C3.5203247,3.902832,4.2357788,3.0681763,5.1918945,2.9946899C5.2994385,2.9864502,5.4074707,2.9882202,5.5146484,3C6.4700317,2.9119873,7.315918,3.6151123,7.4039917,4.5704956C7.4920044,5.5259399,6.7888794,6.3718262,5.8334351,6.4598389z" />
                </svg>
              </a>
            </div>
            <div className="socTwo w-10  ">
              <a href="https://www.linkedin.com/in/tara-saleh/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex right md:h-32 md:w-[359px] md:my-24   items-center">
        <div className="svgs ">
          <motion.svg
          className="1 absolute mt-[-50px]"
        
          animate={{
            rotateX: [0,360,360, 0, 0],
            y:[22, 0, 0, 22,22]
            
          }}

          transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}

            width="127"
            height="68"
            viewBox="0 0 56 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0L56 15L45.5 20.625C43.1804 19.3823 39.4196 19.3823 37.1 20.625C34.7804 21.8676 34.7804 23.8823 37.1 25.125L28 30L18.2 24.75C15.8804 25.9926 12.1196 25.9926 9.79999 24.75C7.4804 23.5073 7.4804 21.4926 9.79999 20.25L0 15L28 0Z"
              fill="#DEC4F4"
            />
          </motion.svg>


          <motion.svg
            className="2 absolute -z-10  mt-[-30px]"
         
           animate={{
            rotateX: [0, 360,360, 0, 0],
             y:[12, 0, 0, 12,12]
             
           }}
           transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
           width="127"
           height="68"
            viewBox="0 0 56 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 30L3.56436e-05 15L10.5 9.37501C12.8196 10.6177 16.5804 10.6177 18.9 9.37501C21.2196 8.13237 21.2196 6.11766 18.9 4.87502L28 2.23477e-05L37.8 5.25002C40.1196 4.00738 43.8804 4.00738 46.2 5.25002C48.5196 6.49266 48.5196 8.50738 46.2 9.75002L56 15L28 30Z"
              fill="#FEC5B9"
            />
          </motion.svg>
          <motion.svg
            className="3  absolute  mt-[-10px] -z-20"
            animate={{
              rotateX: [0, 360,360, 0, 0],
               y:[2, 0, 0, 2,2]
               
             }}
             transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
             width="127"
            height="68"
            viewBox="0 0 56 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 0L3.43323e-05 15L10.5 20.625C12.8196 19.3823 16.5804 19.3823 18.9 20.625C21.2196 21.8676 21.2196 23.8823 18.9 25.125L28 30L37.8 24.75C40.1196 25.9926 43.8804 25.9926 46.2 24.75C48.5196 23.5073 48.5196 21.4926 46.2 20.25L56 15L28 0Z"
              fill="#8A70FF"
            />
          </motion.svg>
          <motion.svg
           className="4  absolute -z-30 mt-[10px]"
         
            animate={{
              rotateX: [0,360,360, 0, 0],
              y:[-10, 0, 0, -10,-10]
               
             }}
             transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
             
             
             width="127"
             height="68"
             viewBox="0 0 56 30"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             >
            <path
              d="M28 30L56 15L45.5 9.37503C43.1804 10.6177 39.4196 10.6177 37.1 9.37503C34.7804 8.13239 34.7804 6.11767 37.1 4.87503L28 3.35059e-05L18.2 5.25003C15.8804 4.00739 12.1196 4.00739 9.8 5.25002C7.4804 6.49266 7.4804 8.50738 9.8 9.75002L2.62268e-06 15L28 30Z"
              fill="#FE9881"
              />
          </motion.svg>
        </div>
        <motion.h1
          className="text-right text-peach ml-40 mt-10 "
          style={{
            fontFamily: "fira mono, monospace",
            fontSize: "36px",
            fontWeight: "bold"
          }}
          // animate={{
          //   color:['#FE9881','#8A70FF','#FEC5B9', '#FEC5B9','#FE9881'  ]
          // }}
          // transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}

          
        >
          taraSaleh
        </motion.h1>
      </div>
      </div>
      <div className="md:hidden mx-auto mt-10">
        <img className="mx-auto" src={MbLogo} alt="" />
      </div>



    </div>
  );
};

export default Contact;
