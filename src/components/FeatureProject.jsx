import React from "react";
import Stack from "./Stack";
import Background from '../FK-MOCKUP.png'
import FeatureMbl from "./FeatureMbl";
const FeatureProject = () => {
  return (
      <>
    <div
      className="hidden lg:flex
      DskFeature container bg-eggplant  mt-11 mt-72 flex  w-full h-[524px] py-10 pl-28 relative"
      style={{ boxShadow: " -5px 5px #7098FF" }}
      >
      <div className="msg  w-3/5 h-[444px] ">
        <h2 className="bodyTwo"> &#60; Försäkringskassan /&gt;</h2>
        <p className="bodyOne  mt-5">
          <span className="text-iris font-medium ">&#62; </span>
          I wanted to revamp their app and improve the user experience for parents who need to schedule VAB (care of sick child) and parental benefits. They recognized that their previous design had become outdated and wanted to give the app a fresh and modern design. Additionally, they aimed to make information about parental benefits and VAB-days more understandable for users.
        </p>

 

        <button className=" btn mt-8">
          <a href="https://ardalansaleh.com/forsakringskassan" target="_blank">

          Check it Out &gt;
          </a>
        
        </button>
      </div>

      <div className="hidden lg:inline-block z-10 ProjectPic  w-[390px] h-[812px]  rounded-2xl ml-10 mt-[-210px]"
          style={{ 
              backgroundImage:`url(${Background})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
          }}
      >
        
      </div>
    </div>

   <FeatureMbl/>




    </>


  );
};

export default FeatureProject;
