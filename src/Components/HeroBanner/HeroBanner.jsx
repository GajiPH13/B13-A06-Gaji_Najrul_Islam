import React from "react";
import CircleIconHero from "../../assets/heroIcon.png";
import HeroImage from "../../assets/banner.png";
import PlayIcon from "../../assets/heroPlay.png";
const HeroBanner = () => {
  return (
    <div className="flex  justify-evenly 
    items-center  gap-15 px-50 pt-30 pb-15 ">
      <div className="space-y-5">
        <div
          className="badge badge-md 
          bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent"
        >
          <img src={CircleIconHero} alt="" />
          New: AI-Powered Tools Available
        </div>
        <h2 className="font-bold text-5xl text-[#101727]">
          Supercharge Your<br/> Digital Workflow
        </h2>
        <p className="text-left">
          Access premium AI tools, design assets, templates, and productivity<br/>
          software—all in one place. Start creating faster today.</p>
          <p> ExploreProducts</p>
        <div className="flex gap-4">
          <button className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button
            className="btn rounded-full
            bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent"
          >
            <img src={PlayIcon} alt="" srcset="" />
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
