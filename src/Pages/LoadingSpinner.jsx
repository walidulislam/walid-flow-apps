import React from "react";
import logoImg from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center gap-4 justify-center text-center min-h-[60vh]">
      <img className="w-16 h-16 animate-spin" src={logoImg} alt="" />
      <h2 className="font-semibold text-4xl text-gray-600">Loading ...</h2>
    </div>
  );
};

export default LoadingSpinner;
