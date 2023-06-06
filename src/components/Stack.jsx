import React from 'react';

const Stack = (props) => {
  return (
  
  
  <div className="Stack text-tangerine my-5">

            <ul className="flex justify-around">
                {/* <li className="text-jasmine">Stack &gt; </li> */}
                <li>{props.language}</li>
                <li>{props.frontend}</li>
                <li>{props.backend}</li>
                <li>{props.database}</li>
                <li>{props.other}</li>
                
            </ul>

  </div>





);
};

export default Stack;
