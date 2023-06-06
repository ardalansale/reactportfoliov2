import React from "react";
import Stack from "./Stack";
import Background from '../innertuner.png'
const FeatureMbl = () => {
  return (
    <>
      <div className="Featuremobile  lg:hidden mt-16">
        <div className="msg  ">
          <h2 className="bodyTwo"> &#60; INNERTUNER /&gt;</h2>
          <p className="bodyOne  mt-5">
            <span className="text-iris font-medium ">&#62; </span>
            this is InnerTuner Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Blanditiis exercitationem facilis explicabo?
            Velit, doloremque consequatur soluta eligendi iusto omnis animi!
            Sapiente praesentium maxime quam ipsa cupiditate quae aperiam
            laboriosam ratione.
          </p>

          <Stack />

          <button className=" btn mt-8">Learn More &gt;</button>
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
