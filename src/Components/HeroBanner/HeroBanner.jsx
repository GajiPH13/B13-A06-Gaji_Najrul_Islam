import React from "react";
import CircleIconHero from "../../assets/heroIcon.png";
import HeroImage from "../../assets/banner.png";
import PlayIcon from "../../assets/heroPlay.png";

const HeroBanner = () => {
  return (
    <div
      className="px-4 pt-30 pb-15 sm:flex sm:justify-center sm:items-center sm:gap-3  lg:flex justify-evenly items-center lg:gap-15 lg:px-50  "
    >
      <div className="space-y-5">
        <div
          className="badge badge-md bg-[#E1E7FF] px-6 py-6 rounded-full max-w-[#400px]
          "
        >
          <img  src={CircleIconHero} alt="" />
          <span
            className="text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent"
          >
            New: AI-Powered Tools Available
          </span>
        </div>
        <h2 className="font-bold text-5xl text-[#101727]">
          Supercharge Your
          <br /> Digital Workflow
        </h2>
        <p className="text-left">
          Access premium AI tools, design assets, templates, and productivity
          <br />
          software—all in one place. Start creating faster today.
        </p>
        <p> ExploreProducts</p>
        <div className="flex gap-4 mb-10">
          <button className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            Explore Products
          </button>
          <button
            className="btn rounded-full
            bg-linear-to-r from-[#4F39F6] to-[#9514FA]
             bg-clip-text text-transparent"
          >
            <img src={PlayIcon} alt="Play Icon" />
            Watch Demo
          </button>
        </div>
      </div>
      <div className=" h-auto">
        <img   src={HeroImage} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
