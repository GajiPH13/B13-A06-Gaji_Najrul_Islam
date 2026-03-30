import React from "react";
import Cards from "../Cards/Cards";

const Tools = ({toolsData}) => {
    // console.log(toolsData)
  return (
    <div className="grid grid-cols-3 gap-2">
        {
            toolsData.map(card => 
            <Cards 
            card={card}>

            </Cards>
        )
        }
      
    </div>
  );
};

export default Tools;
