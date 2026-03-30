import React, { useState } from "react";
import CheckIcon from "../../assets/Check.png";
const Cards = ({ card, selectedTools, setSelectedTools }) => {
  const [isselected, setIsselected] = useState("Buy Now");
  const handelBuy = () => {
    setSelectedTools([...selectedTools, card]);
    setIsselected("has bought");
  };
  return (
    <div>
      <div
        className="relative max-w-auto h-auto mb-1 p-6 text-left transition-transform duration-300 hover:scale-102
                         border border-gray-200 shadow-md rounded-2xl space-y-6"
      >
        <div className="w-15 h-15  rounded-full bg-[#F2F2F2] flex justify-center items-center">
          <img className="mt-3 " src={card.image} alt="Product Image" />
        </div>
        <p className="text-2xl font-bold">{card.name}</p>
        <p>{card.description}</p>
        <p>
          <span className="text-3xl font-bold"> $ {card.price} </span>/One-Time
        </p>

        <div>
          <div className="flex gap-1">
            <img src={CheckIcon} alt="" />
            <span className="line-clamp-2">{card.features[0]}</span>
          </div>
          <div className="flex gap-1">
            <img src={CheckIcon} alt="" />
            <span>{card.features[1]}</span>
          </div>
          <div className="flex gap-1">
            <img src={CheckIcon} alt="" />
            <span>{card.features[2]}</span>
          </div>
        </div>

        <button
          onClick={handelBuy}
          onMouseLeave={() => setIsselected("Buy Now")}
          className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] 
                    rounded-full w-full text-white"
        >
          {isselected === "Buy Now" ? "Buy Now" : <span className="flex items-center gap-1 text-white"><img className="text-white" src={CheckIcon} alt=""  />Added to Cart</span>}
        </button>
        <span
          className={`badge absolute right-2 top-2
                            ${
                              card.tagType === "new"
                                ? "bg-[#DBFCE7] text-[#0A883E]"
                                : card.tagType === "popular"
                                  ? "bg-[#E1E7FF] text-[#4F39F6]"
                                  : card.tagType === "best seller"
                                    ? "bg-[#FEF3C6] text-[#BB4D00]"
                                    : ""
                            }`}
        >
          {card.tagType}
        </span>
      </div>
    </div>
  );
};

export default Cards;
