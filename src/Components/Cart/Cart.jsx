import React from "react";
import SelectedTools from "../SelectedTools/SelectedTools";
import ShopingCart from '../../assets/shopping-cart.png'
import { toast } from 'react-toastify'
const Cart = ({ selectedTools, setSelectedTools }) => {
  // console.log(selectedTools)

   const totalPrice = selectedTools.reduce((sum , tool) => sum + tool.price,0 )

  const handelToolRemove = (tools) => {
      const filteredTools = selectedTools.filter((selectedTool) => selectedTool.id !== tools.id);
      setSelectedTools(filteredTools);
  }

  const notifyThanks = () => toast("Thank you for buying")
  return (
    <div>
      <h2 className="text-left ml-10 mt-5 font-bols text-2xl text-[#101727]">
        Your Cart
      </h2>
      {/* {selectedTools.length === 0 ? <SelectedTools></SelectedTools>
            : (<p> Add some product</p> )} */}
      {selectedTools.length === 0 ? (
        <div>
          <div
            className="  border border-gray-200 rounded-2xl flex flex-col gap-3 
      justify-center items-center  max-w-300 h-100 mx-auto"
          >
            <p className="text-xl font-semibold"><img className="object-contain" src={ShopingCart} alt=""  /></p>
            <p>Your cart is empty</p>
          </div>
        </div>
      ) : (
        selectedTools.map((tools, index) => {
          return (
            <SelectedTools
              key={index}
              tools={tools}
               handelToolRemove={handelToolRemove}
            ></SelectedTools>
          );
        })
      )}

      <div className=" ">
        <div className="flex justify-between p-5">
          <p>Total</p>
          <p className="text-2xl font-bold">{totalPrice}</p>
        </div>
        <div>
          <button
           onClick={()=>{ setSelectedTools([]);notifyThanks()}}
            className="btn w-full rounded-full 
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Cart;
