import React from "react";
import CheckIcon from "../../assets/Check.png";
const PricingSection = () => {
  return (
    <div className="bg-white mt-10   text-center max-w-400 px-6  mx-auto md:px-50 md:py-30">
      <div className="text-center space-y-6 mb-10">
        <h2 className="font-bold text-[#101727] text-3xl">
          Simple, Transparent Pricing
        </h2>
        <p className="text-[#627382] ">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="px-6 grid grid-cols-1  md:grid-cols-3 gap-4">
        <div
          className="  bg-[#F9FAFC] h-auto mb-1 p-6 text-left 
                    border border-gray-100 shadow-md rounded-2xl space-y-6"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">Starter</p>
            <p>Perfect for getting started</p>
          </div>
          <p>
            <span className="text-3xl font-bold"> $0 </span>/month
          </p>

          <div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span className="line-clamp-2">Access to 10 free tools</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Basic templates</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Community support</span>
            </div>
            <div className="flex gap-1 mb-20">
              <img src={CheckIcon} alt="" />
              <span>1 project per month</span>
            </div>
          </div>

          <button
            className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                            rounded-full w-full text-white"
          >
            Get Started Free
          </button>
        </div>
        <div
          className=" relative h-auto mb-1 p-6 text-left text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                    border border-gray-200 shadow-md rounded-2xl space-y-6"
        >
          <div className=" absolute ml-25 -mt-10 badge text-[#BB4D00] bg-[#FEF3C6]">
            <span >Most Popular</span>
          </div>
          <div className="space-y-2">
            <p className="text-2xl font-bold">Pro</p>
          <p>Best for professionals</p>
          </div>
          <p>
            <span className="text-3xl font-bold"> $29</span> /month
          </p>

          <div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span className="line-clamp-2">Access to all premium tools</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Unlimited templates</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Cloud sync</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Advanced analytics</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Priority support</span>
            </div>
            <div className="flex gap-1 mb-10">
              <img src={CheckIcon} alt="" />
              <span>Unlimited Projects</span>
            </div>
          </div>

          <button
            className="btn  px-4 py-3 bg-white text-purple-500
                            rounded-full w-full "
          >
            Start Pro Trial
          </button>
        </div>
        <div
          className="  h-auto mb-1 p-6 text-left 
                    border border-gray-200 shadow-md rounded-2xl space-y-6"
        >
          <div className="space-y-2">
            <p className="text-2xl font-bold">Enterprise</p>
          <p>For teams and businesses</p>
          </div>
          <p>
            <span className="text-3xl font-bold"> $99 </span>/month
          </p>

          <div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span className="line-clamp-2">Everything in Pro</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Team collaboration</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Custom integrations</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Dedicated support</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>SLA guarantee</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Custom branding</span>
            </div>
            <div className="flex gap-1">
              <img src={CheckIcon} alt="" />
              <span>Contact Sales</span>
            </div>
          </div>

          <button
            className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                            rounded-full w-full text-white"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
