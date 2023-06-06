import React from 'react';
import {motion} from 'framer-motion'





const DownButton = () => {
  return (
      <>
         <div className="arrow  mx-auto md:mt-36  w-20 ">
      <div className="dots w-2.5 h-13   justify-between   mx-auto">
        <motion.div
          className="bg-peach w-2.5 h-2.5 mb-2.5 rounded-full -z[1]"
          initial={{
            y:[20],
            opacity:0
          }}
          animate={{
            y:[0, 20, 20, 0, 0],
            opacity:[1, 0, 0, 1, 1]
          }}
          transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
        ></motion.div>
        <motion.div
          className="w-2.5 h-2.5 mb-2.5 border border-bgdrk rounded-full -z[2] "
          initial={{ 
            width:'12px',
            height:'12px',
            backgroundColor:['#E8D9F4']
          }}
          
          animate={{
              width:["10px", "12px", "12px", "10px","10px"],
              height:["10px", "12px", "12px", "10px","10px"],
              backgroundColor:["#FEC5B9", "#E8D9F4","#E8D9F4", "#FEC5B9" ,"#FEC5B9"]

          }}
          transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
        ></motion.div>
        <motion.div
          className="bg-peach w-2.5 h-2.5 rounded-full -z[3]"
         initial={{
           y:[20],
           opacity:0
         }}
         animate={{
           y:[0, 20, 20, 0, 0],
           opacity:[1, 0, 0, 1, 1]
         }}
         
         transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
       
        ></motion.div>
      </div>

      <motion.div
        className=" chevron text-tangerine mt-[-15px] mx-auto "
        initial={{
          y:-20,
          color:"#8A70FF"
        }}

        animate={{
            y:[0, -20, -20, 0, 0],
            color:["#FE9881", "#8A70FF","#8A70FF", "#FE9881","#FE9881"]
        }}
        transition={{repeat:Infinity, duration:3, ease:'easeInOut'}}
      >
       <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 13l-7 7-7-7m14-8l-7 7-7-7"
                />
        </svg>
      </motion.div>

      <div className="text w-18 h-18 mt-[-14px] mx-auto">
        <motion.h1
          className="text-lg md:text-2xl font-bold text-center text-iris"
           

          animate={{
            opacity: [0, 1, 1, 0, 0],
          }}
          transition={{
            repeat:Infinity,
            duration:3,
            ease:'easeInOut'
          
          
           
          }}
        >
          Scroll down
        </motion.h1>
      </div>
    </div>
   





             
              
              
              
              
              
              
             

      </>









);
};

export default DownButton;
