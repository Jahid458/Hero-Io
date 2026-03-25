import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { IoMdDownload } from "react-icons/io";
import { FcRating } from "react-icons/fc";
import toast, { Toaster } from "react-hot-toast";
import { getInstalledApps, uninstallApp } from "../../Js/AddDb";

const Installation = () => {
  const data = useLoaderData();
  const [sortType, setSortType] = useState("");
  const installedAppsStr = getInstalledApps();
  const installedApps = installedAppsStr.map((i) => parseInt(i));

  // Filter installed apps
  const installationDone = data.filter((d) => installedApps.includes(d.id));

  // Sorting logic
  const sortedApps = [...installationDone].sort((a, b) => {
    if (sortType === "high") return b.downloads - a.downloads;
    if (sortType === "low") return a.downloads - b.downloads;
    return 0;
  });
  const handleUninstall = (id) => {
    uninstallApp(id);
    toast.success("App Uninstalled Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <Toaster position="top-right" />

      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4">
          Your{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Installed
          </span>{" "}
          Apps
        </h1>

        <p className="text-sm sm:text-base text-gray-400 mt-3">
          Manage all your installed apps easily.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
        <p className="text-lg font-semibold text-gray-700">
          {installationDone.length} Installed
        </p>


        <select
          onChange={(e) => setSortType(e.target.value)}
          className="px-4 py-2 border rounded-lg text-sm focus:outline-none"
        >
          <option value="">Sort by Downloads</option>
          <option value="high">High → Low</option>
          <option value="low">Low → High</option>
        </select>
      </div>

      <div className="mt-6 space-y-4">
        {sortedApps.length === 0 ? (<div className="text-center text-gray-400 mt-10">
            No installed apps yet  </div>) : (
          sortedApps.map((app) => (
            <div  key={app.id} className="flex flex-col md:flex-row items-start md:items-center
              justify-between gap-4 p-4 md:p-5  rounded-xl border shadow-sm hover:shadow-md
              transition hover:scale-[1.01]" >
              <div className="flex items-start sm:items-center gap-4 w-full">
                <img src={app.image} alt={app.title} className="w-14 h-14 sm:w-16 sm:h-16 
                  md:w-20 md:h-20 rounded-xl object-cover bg-gray-200"/>

                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-sm sm:text-base md:text-lg">
                    {app.title}</h3>

                  <div className="flex flex-wrap items-center gap-2 sm:gap-4
                    text-xs sm:text-sm mt-1">
                    <span className="text-green-500 flex items-center gap-1"><IoMdDownload /> {app.downloads}
                    </span>

                    <span className="text-orange-400 flex items-center gap-1">
                      <FcRating /> {app.ratingAvg}
                    </span>

                    <span className="text-gray-400"> {app.size} MB </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="w-full sm:w-auto px-4 sm:px-5 py-2 text-sm sm:text-base rounded-lg font-medium  bg-green-500 text-white
                hover:bg-green-600 transition" >Uninstall</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Installation;