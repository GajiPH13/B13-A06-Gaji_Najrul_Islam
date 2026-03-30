import React, { use, useState } from "react";
import Tools from "../Tools/Tools";
import Cart from "../Cart/Cart";
import Cards from "../Cards/Cards";

const SelectProducts = ({ toolsPromis}) => {
    const [isselected,setIsselected] = useState('product')
  const toolsData = use(toolsPromis);
  
 const [selectedTools, setSelectedTools ] = useState([]);
  

  //console.log(toolsData)
  return (
    <div className="px-50 py-30">
      <div className=" flex flex-col text-center space-y-4">
        <h1 className="font-bold text-[48px] text-[#101727]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627383]">
          Choose from our curated collection of premium digital products
          designed <br />
          to boost your productivity and creativity.
        </p>
        <div className="flex justify-center ">
          <button
            onClick={() => setIsselected("product")}
            className={`btn rounded-full 
                   ${isselected === 'product'? 
                    'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ' : 'bg-white text-black'}`}
          >
            Products
          </button>
          <button
            onClick={() => setIsselected("cart")}
            className={`btn  rounded-full 
                   ${isselected === 'cart'? 
                    'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white' : 'bg-white text-black'}`}
          >
            Cart ({(selectedTools.length)})
          </button>
        </div>
        <div className="border-2 border-gray-100 rounded-3xl p-2 h-auto">
          {isselected === "product" ? (
            <Tools
              toolsData={toolsData}
              selectedTools={selectedTools}
             setSelectedTools={setSelectedTools}
            ></Tools>
          ) : (
            <Cart
              toolsData={toolsData}
              selectedTools={selectedTools}
              setSelectedTools={setSelectedTools}
              // totalPrice={totalPrice}
            ></Cart>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectProducts;
