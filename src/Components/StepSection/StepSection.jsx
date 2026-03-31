import React from "react";
import UserIcon from "../../assets/user.png";
import Package from "../../assets/package.png";
import Roket from "../../assets/rocket.png";
const StepSection = () => {
  return (
    <div>
        <div className="px-50 py-30  text-center max-w-400  mx-auto bg-[#F9FAFC]">
            <div className="space-y-4">
                <h2 className="font-bold text-[#101727] text-3xl">
        Get Started in 3 Steps
      </h2>
      <p className="text-[#627382]">
        Start using premium digital tools in minutes, not hours.
      </p>
            </div>
      
     <div className="flex gap-4 ">
         <div
        className="bg-white relative mt-10 px-6 py-20 max-w-[380px] h-[#380px] rounded-2xl 
            border border-gray-100 shadow-2xs"
      >
        <div className="  flex flex-col justify-center items-center">
          <div className="mb-6 flex justify-center items-center w-25 h-25 rounded-full bg-linear-to-r from-[#7166c54c] to-[#9614fa53] ">
            <img src={UserIcon} alt="" srcset="" />
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-[#101727] text-xl">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <span className="text-white">01</span>
        </div>
        
      </div>
      <div
        className="bg-white relative mt-10 px-6 py-20 max-w-[380px] h-[#380px] rounded-2xl 
            border border-gray-100 shadow-2xs"
      >
        <div className="  flex flex-col justify-center items-center">
          <div className="mb-6 flex justify-center items-center w-25 h-25 rounded-full bg-linear-to-r from-[#7166c54c] to-[#9614fa53] ">
            <img src={Package} alt="" srcset="" />
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-[#101727] text-xl">Choose Products</h3>
            <p className="text-[#627382]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <span className="text-white">02</span>
        </div>
        <div></div>
        <div></div>
      </div>
      <div
        className="bg-white relative mt-10 px-6 py-20 max-w-[380px] h-[#380px] rounded-2xl 
            border border-gray-100 shadow-2xs"
      >
        <div className="  flex flex-col justify-center items-center">
          <div className="mb-6 flex justify-center items-center w-25 h-25 rounded-full bg-linear-to-r from-[#7166c54c] to-[#9614fa53] ">
            <img src={Roket} alt="" srcset="" />
          </div>
          <div className="text-center space-y-3">
            <h3 className="text-[#101727] text-xl">Start Creating</h3>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-4 right-4 w-10 h-10 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
          <span className="text-white">03</span>
        </div>
        <div></div>
        <div></div>
      </div>
     </div>


    </div>
    </div>
  );
};

export default StepSection;
