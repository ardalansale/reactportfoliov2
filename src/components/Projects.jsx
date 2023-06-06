import React, {useState} from 'react';
import DownButton from './DownButton';
import FeatureProject from './FeatureProject';
import SideBarOne from './SideBarOne';
import ProjectList from './ProjectList'
// import useFetch from '../../src/useFetch';

const Projects = () => {

   
    // const {data:projects, isPending, error} = useFetch(' http://localhost:8000/projects');
    
  return (
  
    <div id="Projects" className="Projects  mr-6 md:mr-16 ml-6 m mt-20 md:mt-52  lg:ml-40">

        <h1 className="hOne"> &#60; Projects /&gt; </h1>
        <SideBarOne height={'2850px'}/>
        <div className="lg:flex">
            <div className="msg  lg:ml-24  lg:w-1/2 mt-10">
                <p className="bodyOne  mt-5">
                <span className="text-iris font-medium ">&#62; </span>
                I enjoy creating things that live on the internet and I am always learning something new. For me the best way to implement the concepts is through projects. So below are a few projects that I have worked on. feel free to check them out.
                </p>
            </div>
           
        <DownButton/>
        </div>
        <FeatureProject />

       {/* {projects &&  <ProjectList 
         projects={projects}
         />} */}
            <ProjectList/>

    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    );
};

export default Projects;
