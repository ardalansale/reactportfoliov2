import React from "react";
import Stack from "./Stack";
import Background from '../FK-MOCKUP.png'
const FeatureMbl = () => {
  return (
    <>
      <div className="Featuremobile  lg:hidden mt-16">
        <div className="msg  ">
          <h2 className="bodyTwo"> &#60; Försäkringskassan /&gt;</h2>
          <p className="bodyOne  mt-5">
            <span className="text-iris font-medium ">&#62; </span>
            I wanted to revamp their app and improve the user experience for parents who need to schedule VAB (care of sick child) and parental benefits. They recognized that their previous design had become outdated and wanted to give the app a fresh and modern design. Additionally, they aimed to make information about parental benefits and VAB-days more understandable for users.
          </p>

          <Stack />

          <button className=" btn mt-8">
          <a href="https://ardalansaleh.com/forsakringskassan" target="_blank">

                Learn More &gt;
                      </a>
          
          </button>
        </div>

            <div className="cover block flex justify-center  mt-10">
                <div className="w-[215px] h-[466px]"
                 style={{ 
                    backgroundImage:`url(${Background})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    <div className="h-[361px] w-[303px] bg-eggplant mt-12 absolute ml-[-40px] rotate-[25deg] -z-10">

                    </div>

                </div>

            </div>

      </div>
    </>
  );
};

export default FeatureMbl;
