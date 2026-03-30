import React, { useState } from "react";
import Cards from "../Cards/Cards";

const Tools = ({ toolsData,selectedTools,setSelectedTools }) => {
  // console.log(toolsData)
  
  return (
    <div className="grid grid-cols-3 gap-2">
      {toolsData.map((card) => (
        <Cards key={card.id} card={card}
          selectedTools ={selectedTools}
          setSelectedTools ={setSelectedTools}>
        </Cards>
      ))}
    </div>
  );
};

export default Tools;
