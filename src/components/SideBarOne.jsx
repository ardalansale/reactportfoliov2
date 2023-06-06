import React from 'react';

const SideBarOne = (props) => {
  return (
    <div className="hidden lg:block sideBar">
        <div className="dot lg:w-1 md:h-1 bg-lavender rotate-45"></div>
         <div 
         style={{
           height:`${props.height}`,
           marginLeft: '1px',
           width:'1px',
           position:'absolute',
           backgroundColor:'#7B61FF'
         }}
         className=" 
        // 
         "
         ></div>
    </div>
    
    
    
    
    );
};

export default SideBarOne;
