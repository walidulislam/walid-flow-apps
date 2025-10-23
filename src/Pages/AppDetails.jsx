import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../Hooks/useApps";
import downImg from "../assets/icon-downloads.png";
import ratingImg from "../assets/icon-ratings.png";
import reviewImg from "../assets/icon-review.png";
import LoadingSpinner from "./LoadingSpinner";
import { loadInstallation, updateList } from "../utils/localStorage";
import { toast, ToastContainer } from "react-toastify";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [installed, setInstalled] = useState(false);
  const app = apps.find((a) => a.id === Number(id));
  useEffect(() => {
    const installedApp = loadInstallation();
    const installed = installedApp.some((a) => a.id === Number(id));
    setInstalled(installed);
  }, [id]);
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  const {
    ratings,
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = app;
  return (
    <div className="p-6 md:p-10 lg:p-20">
      <ToastContainer></ToastContainer>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 text-left items-center ">
        <img
          className="w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] rounded-lg border-2 border-gray-300"
          src={image}
          alt=""
        />
        <div className="space-y-4 lg:space-y-8 w-full">
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
            <div className="divider m-0"></div>
          </div>
          <div className="flex gap-6 md:gap-10 lg:gap-14">
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
          {installed ? (
            <button className="btn bg-gradient-to-br from-[#e74e1b] to-[#edcb43] font-medium text-white">
              Installed
            </button>
          ) : (
            <button
              onClick={() => {
                updateList(app);
                setInstalled(true);
                toast.success(`${title} App Installed..🦄`);
              }}
              className="btn bg-[#00D390] hover:bg-gradient-to-br from-[#2411b4] to-[#3b91dd] font-medium text-white"
            >
              Install Now ({size} MB)
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-[300px] md:h-[500px] my-10">
        <div className="flex mb-2 flex-col">
          <div className="divider m-0"></div>
        </div>
        <h2 className="text-xl md:text-2x text-[#001931] font-semibold">
          Ratings
        </h2>
        <ResponsiveContainer width="100%" height="100%" minHeight={300}>
          <BarChart
            layout="vertical"
            data={[...ratings].reverse()}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#FF6451" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex mb-2 flex-col">
          <div className="divider m-0"></div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
