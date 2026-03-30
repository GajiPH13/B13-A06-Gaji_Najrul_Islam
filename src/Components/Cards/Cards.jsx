import React from 'react';
import CheckIcon from "../../assets/Check.png";
const Cards = ({card}) => {
    return (
        <div>
            <div
                    className="relative max-w-[300px] h-auto p-6 text-left transition-transform duration-300 hover:scale-105
                         border border-gray-200 shadow-md rounded-2xl space-y-6"
                  >
                    <div className="w-15 h-15  rounded-full bg-[#F2F2F2] flex justify-center items-center">
                      <img className="mt-3 "
                        src={card.image}
                        alt="Product Image"
                      />
                    </div>
                    <p className="text-2xl font-bold">{card.name}</p>
                    <p>description</p>
                    <p>
                      <span className="text-3xl font-bold"> $ 29 </span>/One-Time
                    </p>
            
                    <div>
                        <div className="flex gap-1">
                      <img src={CheckIcon} alt="" srcset="" />
                      <span>Features</span>
                    </div>
                    <div className="flex gap-1">
                      <img src={CheckIcon} alt="" srcset="" />
                      <span>Features</span>
                    </div>
                    <div className="flex gap-1">
                      <img src={CheckIcon} alt="" srcset="" />
                      <span>Features</span>
                    </div>
                    </div>
            
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full">
                      Buy Now
                    </button>
                    {/* <span
                      className={`badge absolute right-0 top-0
                            ${
                              data.status === "popular"
                                ? "bg-red-500"
                                : data.status === "favourite"
                                  ? "bg-orange-500"
                                  : data.status === "mostwanted"
                                    ? "bg-yellow-500"
                                    : ""
                            }`}
                    >
                      Badge
                    </span> */}
                  </div>
        </div>
    );
};

export default Cards;