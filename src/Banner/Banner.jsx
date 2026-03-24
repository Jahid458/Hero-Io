import React from "react";
import heroImage from "../assets/hero.png";
import googleimg from "../assets/googlePLay.png";
import appimg from "../assets/app_store.png";

const Banner = () => {
  return (
    <div className="w-full pt-10 flex flex-col gap-16 mb-10">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          We Build <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="text-sm sm:text-base mt-8 text-gray-400 font-medium">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/us/iphone/today"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black shadow"
          >
            <img className="w-7 h-7" src={appimg} alt="App Store" />
            <span>App Store</span>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps?hl=en"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black shadow"
          >
            <img className="w-7 h-7" src={googleimg} alt="Google Play" />
            <span>Google Play</span>
          </a>
        </div>
      </div>

      <div className="relative flex flex-col  items-center">
        <img
          className="w-full max-w-4xl mx-auto px-4 z-10"
          src={heroImage}
          alt=""
        />

        <div className="w-full bg-linear-to-r z-30 from-[#632EE3] to-[#9F62F2] text-white  pt-24 pb-10 px-4  ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8">
            Trusted By Millions, Built For You
          </h2>

          <div className=" justify-center items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-center ">
            <div>
              <p className="text-sm opacity-70">Total Downloads</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold my-2">
                29.6M
              </p>
              <p className="text-sm opacity-70">21% More Than Last Month</p>
            </div>

            <div>
              <p className="text-sm opacity-70">Total Reviews</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold my-2">
                906K
              </p>
              <p className="text-sm opacity-70">46% More Than Last Month</p>
            </div>

            <div>
              <p className="text-sm opacity-70">Active Apps</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold my-2">
                132+
              </p>
              <p className="text-sm opacity-70">31 More Will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
