import React from "react";

const TransformSection = () => {
  return (
    <div
      className="flex justify-evenly px-50 py-15
        bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white
        "
    >
      <div className="px-50 py-30">
        <div className=" flex flex-col text-center space-y-4">
          <h1 className="font-bold text-[48px]">
            Ready to Transform Your Workflow?
          </h1>
          <p className="">
           Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today. 
            to boost your productivity and creativity.
          </p>
          <div className="flex justify-center gap-5 ">
            <button className="btn rounded-full bg-white text-purple-500 ">
             Explore Products
            </button>
            <button className="btn rounded-full border border-white bg-transparent text-white ">View Pricing</button>
          </div>
          <p>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;
