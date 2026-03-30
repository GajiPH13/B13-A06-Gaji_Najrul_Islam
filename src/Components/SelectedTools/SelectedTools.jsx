import React from "react";

const SelectedTools = ({ tools, handelToolRemove }) => {
//   console.log(tools);
  return (
    <div className="max-w-300 p-10 rounded-3xl ">
      <div className="">
        <div className="border border-gray-100 p-6 rounded-2xl 
        flex gap-2 justify-between items-center">
          <div className="flex gap-4">
            <div>
              <img src={tools.image} alt="" />
            </div>
            <div>
              <p className=" text-xl text-[#101727]">{tools.name}</p>
              <p className="text-left">{tools.price}</p>
            </div>
          </div>
          <div>
            <button onClick={()=>handelToolRemove(tools)} className="btn text-red-500"> Remove</button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-between">
          <p>Total</p>
          <p>{tools.price}</p>
        </div>
        <div>
          <button
            className="btn w-full rounded-full 
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          >
            Proceed to Checkout
          </button>
        </div> */}
    </div>
  );
};

export default SelectedTools;
