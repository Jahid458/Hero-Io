import React from "react";
import { Link } from "react-router";
import AppCard from "../AppCard/AppCard";

const Trending = ({ data }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-bold mt-10">
        Trending
        <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Apps
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-12 place-items-center">
        {data.slice(0, 8).map((app) => (
          <AppCard className="w-full max-w-70" key={app.id} singleData={app} />
        ))}
      </div>

      <Link
        to="/apps"
        className="inline-block px-6 py-2 rounded-lg text-white font-semibold bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition"
      >
        Show All
      </Link>
    </section>
  );
};

export default Trending;
