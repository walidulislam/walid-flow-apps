import React from "react";

const Status = () => {
  return (
    <div className="bg-gradient-to-br from-[#632EE3] to-[#9F62F2] p-10 lg:p-20 text-center space-y-10">






      
      <h2 className="text-white font-bold text-4xl lg:text-5xl">
        Trusted by Millions, Built for You
      </h2>
      <div className="flex md:flex-row flex-col justify-center md:gap-x-20 lg:gap-x-40 gap-y-8">
        <div className="space-y-2">
          <p className="text-sm font-normal opacity-80 text-white">
            Total Downloads
          </p>
          <h1 className="font-extrabold text-5xl lg:text-6xl text-white">
            29.6M
          </h1>
          <p className="text-sm font-normal opacity-80 text-white">
            21% More Than Last Month
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-normal opacity-80 text-white">
            Total Reviews
          </p>
          <h1 className="font-extrabold text-5xl lg:text-6xl text-white">
            906K
          </h1>
          <p className="text-sm font-normal opacity-80 text-white">
            46% More Than Last Month
          </p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-normal opacity-80 text-white">
            Active Apps
          </p>
          <h1 className="font-extrabold text-5xl lg:text-6xl text-white">
            132+
          </h1>
          <p className="text-sm font-normal opacity-80 text-white">
            31 More Will Launch
          </p>
        </div>
      </div>
    </div>
  );
};

export default Status;
