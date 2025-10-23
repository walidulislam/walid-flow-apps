import React, { useState } from "react";
import {
  loadInstallation,
  removeFromInstallation,
} from "../utils/localStorage";
import { Download, Star } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "./LoadingSpinner";

const Installation = () => {
  const [installation, setInstallation] = useState(() => loadInstallation());
  const { loading } = useApps();
  const [sortDownload, setSortDownload] = useState("none");
  const handelRemove = (id) => {
    removeFromInstallation(id);
    setInstallation((prev) => prev.filter((p) => p.id !== id));
  };
  const sortedApps = () => {
    if (sortDownload === "price-desc") {
      return [...installation].sort((a, b) => b.downloads - a.downloads);
    } else if (sortDownload === "price-asc") {
      return [...installation].sort((a, b) => a.downloads - b.downloads);
    } else {
      return installation;
    }
  };
  if (loading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="px-6 md:px-10 lg:px-20 py-10 lg:py-20 space-y-4 md:space-y-10">
        <div className="space-y-4">
          <h1 className="text-[#001931] font-bold text-4xl lg:text-5xl text-center">
            Your Installed Apps
          </h1>
          <p className="text-sm lg:text-xl text-[#627382] text-center">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6">
          <h2 className="text-xl md:text-2x text-[#001931] font-semibold">
            ({installation.length})Apps Found
          </h2>
          <select
            value={sortDownload}
            onChange={(e) => setSortDownload(e.target.value)}
            className="select select-bordered w-52"
          >
            <option value="none">Sort by Downloads ⬇️</option>
            <option value="price-desc">High-Low</option>
            <option value="price-asc">Low-High</option>
          </select>
        </div>
        <div className="space-y-3">
          {sortedApps().map((a) => (
            <div
              key={a.id}
              className="flex justify-between items-center bg-base-100 w-full shadow-lg rounded-xl hover:scale-105 transition ease-in-out p-4"
            >
              <div className="flex gap-3 items-center">
                <img
                  className="h-[80px] w-[80px] border-2 border-gray-300 rounded-xl"
                  src={a.image}
                />
                <div className=" md:space-y-2">
                  <h2 className="card-title text-[#001931]">{a.title}</h2>
                  <div className="md:card-actions">
                    <div className="flex justify-centers items-center text-[#00D390] font-medium ">
                      <Download className="h-4" />
                      {a.downloads}
                      <p>M</p>
                    </div>
                    <div className="flex justify-centers items-center text-[#FF8811]  font-medium">
                      <Star className="h-4" />
                      {a.ratingAvg}
                    </div>
                    <div className="pl-1 md:pl-0">
                      <p className="text-gray-400">{a.size}MB</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => {
                  handelRemove(a.id);
                  toast.warn(`${a.title} uninstalled successfully!`);
                }}
                className="btn bg-[#00D390] hover:bg-gradient-to-br from-[#d0168f] to-[#b80303] font-medium text-white"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation;
