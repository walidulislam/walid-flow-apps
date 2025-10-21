import React from "react";
import playStore from "../assets/play-store.png";
import appStore from "../assets/app-store.png";
import bannerImg from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="text-center bg-[#F5F5F5]  px-4 md:px-10 lg:px-20 pt-10 lg:pt-20 space-y-5">
      <h1 className="font-bold text-5xl lg:text-7xl">
        We Build
        <br />
        <span className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text font-black">
          Productive{" "}
        </span>
        Apps
      </h1>
      <p className="text-sm lg:text-xl text-[#627382]">
        At WalidFlow.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <a
        href="https://play.google.com/store/apps?hl=en"
        role="button"
        className="btn mr-4"
        target="_blank"
      >
        {" "}
        <img className="max-w-8" src={playStore} /> Google Play
      </a>
      <a
        href="https://www.apple.com/app-store/"
        role="button"
        className="btn"
        target="_blank"
      >
        {" "}
        <img className="max-w-8" src={appStore} /> App Store
      </a>
      <div className="flex justify-center">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
