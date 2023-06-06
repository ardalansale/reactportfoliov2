import React from "react";
import Stack from "./Stack";
import Background from '../innertuner.png'
import FeatureMbl from "./FeatureMbl";
const FeatureProject = () => {
  return (
      <>
    <div
      className="hidden lg:flex
      DskFeature container bg-eggplant  mt-11 mt-72 flex  w-full h-[524px] py-10 pl-28 relative"
      style={{ boxShadow: " -5px 5px #8A70FF" }}
      >
      <div className="msg  w-3/5 h-[444px] ">
        <h2 className="bodyTwo"> &#60; INNERTUNER /&gt;</h2>
        <p className="bodyOne  mt-5">
          <span className="text-iris font-medium ">&#62; </span>
         This app is to help maintain a healthy lifestyle by incorporating good habits. InnerTuner will let the user keep track of the water intake and exercise for the week and recorder the progress the day and also keep track of the mood change through out the week.  
        </p>

        <div className=" STACK Stack text-tangerine my-5">

<ul className="flex justify-around">
    <li className="text-jasmine">Stack &gt; </li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>Express</li>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>Tailwindcss</li>
    
</ul>

</div>

        <button className=" btn mt-8">
          <a href="https://innertuner.herokuapp.com/" target="_blank">

          Check it Out &gt;
          </a>
        
        </button>
      </div>

      <div className="hidden lg:inline-block z-10 ProjectPic  w-96 h-[812px]  rounded-2xl ml-10 mt-[-210px]"
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
