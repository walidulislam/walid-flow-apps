import React, { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../components/AppsCard";
import LoadingSpinner from "./LoadingSpinner";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const term = search.trim().toLocaleLowerCase();
  const searchedApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;
  return (
    <div className="px-6 md:px-10 lg:px-20 py-10 lg:py-20 space-y-4 md:space-y-10">
      <div className="space-y-4">
        <h1 className="text-[#001931] font-bold text-4xl lg:text-5xl text-center">
          Our All Applications
        </h1>
        <p className="text-sm lg:text-xl text-[#627382] text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center space-y-6">
        <h2 className="text-xl md:text-2x text-[#001931] font-semibold">
          ({searchedApps.length})Apps Found
        </h2>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search"
          />
        </label>
      </div>
      {loading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {searchedApps.map((app) => (
            <AppsCard key={app.id} app={app}></AppsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
