import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#031B34] text-white">
      
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" alt="logo" />
          <span className="font-semibold">HERO.IO</span>
        </div>

        <div className="flex flex-col items-center gap-4">
          <span className="text-sm text-gray-300 hidden sm:block">
            Social Links
          </span>
          <div className="flex gap-3 text-lg">
            <FaGithub />
            <FaLinkedin />
            <FaFacebook />
          </div>
        </div>

      </div>

      <div className="container mx-auto px-4">
        <hr className="border-gray-700" />
        <p className="text-sm text-gray-300 text-center py-4">
          Copyright © 2026 - All right reserved
        </p>
      </div>

    </footer>
  );
};

export default Footer;