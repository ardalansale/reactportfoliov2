import React from "react";
import Stack from "./Stack";

const ProjectItem = (props) => {
  return (
    <div
      className="ProjectItem  bg-eggplant text-center h-80 md:h-40 
      hover:h-fit w-80 
      lg:w-full mx-auto
      h-fit
      mb-10
      lg:mb-0"
      
      style={{ boxShadow: " -5px 5px #8A70FF" }}
    >
      <div className="lg:hidden px-4 pt-3">
        <h2 className="mt-6 text-jasmine leading-8 text-left font-medium  ">
          &#60;{props.title}/&gt;
        </h2>

        <p className=" font-light leading-8 mt- text-peach text-left">
          <span className="text-iris">&gt; </span>
         {props.description}
        </p>
      </div>
      <div className=" group hidden lg:block px-4">
        <h2 className="mt-6 text-jasmine leading-8 font-medium text-2xl md:leading-10 group-hover:text-tangerine group-hover:text-2xl group-hover:text-left">
          &#60; {props.title} /&gt;
        </h2>

        <p className=" hidden group-hover:block font-light leading-8 text-left text-jasmine md:text-xl md:leading-10">
          {props.description}
        </p>
      <div className=" hidden group-hover:block border-2 border-peach w-32 h-12 font-semibold text-tangerine  hover:text-lavender hover:bg-peach pt-2">
       
      <a  className=""href={props.url} target="_blank">

      Learn more &gt;
      </a>
        </div>
      </div>

      <Stack language={props.stack.language} frontend={props.stack.frontend} backend={props.stack.backend}database={props.stack.database} other={props.stack.other}/>
    </div>
  );
};

export default ProjectItem;
