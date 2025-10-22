import React from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import { Download } from "lucide-react";
import downImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import LoadingSpinner from "./LoadingSpinner";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const app = apps.find((a) => a.id === Number(id));
  console.log(app);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  const { image, title, companyName, downloads, ratingAvg, reviews, size } =
    app;
  return (
    <div className="p-20">
      <div className="flex gap-10 text-left items-center ">
        <img
          className="w-[350px] h-[350px] rounded-lg border-2 border-gray-300"
          src={image}
          alt=""
        />
        <div className="space-y-8 w-full">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl text-[#001931] font-bold">
              {title}
            </h2>
            <p className="text-sm lg:text-xl text-[#627382]">
              Developed by{" "}
              <span className="font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
                {companyName}
              </span>
            </p>
          </div>
          <div className="flex mb-2 flex-col">
            <div className="divider"></div>
          </div>
          <div className="flex gap-14">
            <div className="space-y-1">
              <img src={downImg} />
              <p className="text-sm font-normal opacity-80 text-[#001931]">
                Downloads
              </p>
              <h1 className="text-3xl md:text-4xl text-[#001931] font-extrabold">
                {downloads}M
              </h1>
            </div>
            <div className="space-y-1">
              <img src={ratingImg} />
              <p className="text-sm font-normal opacity-80 text-[#001931]">
                Average Ratings
              </p>
              <h1 className="text-3xl md:text-4xl text-[#001931] font-extrabold">
                {ratingAvg}
              </h1>
            </div>
            <div className="space-y-1">
              <img src={reviewImg} />
              <p className="text-sm font-normal opacity-80 text-[#001931]">
                Total Reviews
              </p>
              <h1 className="text-3xl md:text-4xl text-[#001931] font-extrabold">
                {reviews}K
              </h1>
            </div>
          </div>
          <button className="btn bg-[#00D390] font-medium text-white">
            Install Now ({size} MB)
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
