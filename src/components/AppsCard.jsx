import React from "react";
import { Download, Star } from "lucide-react";

const AppsCard = ({ app }) => {
    const {image, title, downloads, ratingAvg} = app;
  return (
    <div className="card bg-base-100 w-full shadow-lg rounded-xl hover:scale-105 transition ease-in-out p-4 pb-0">
      <figure>
        <img
        className=" h-[316px] w-full border-2 border-gray-300 rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-[#001931]">{title}</h2>
        <div className="card-actions justify-between">
          <div className="badge badge-outline text-[#00D390] bg-[#F1F5E8] py-4 font-medium text-lg"><Download />{downloads}<p>M</p></div>
          <div className="badge badge-outline text-[#FF8811] bg-[#FFF0E1] py-4 font-medium text-lg"><Star />{ratingAvg}</div>
        </div>
      </div>
    </div>
  );
};

export default AppsCard;
