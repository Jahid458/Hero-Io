import React from "react";
import logo from "../assets/logo.png";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#031B34] text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">

        <div className="flex items-center gap-2">
          <img src={logo} className="w-8" alt="logo" />
          <span className="font-semibold text-lg">HERO.IO</span>
        </div>

        <div className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-300">
          <span className="font-semibold text-white">Quick Links</span>
          <div className="flex gap-4 flex-wrap justify-center md:justify-start">
            <a href="/" className="hover:text-white transition">Home</a>
            <a href="/apps" className="hover:text-white transition">Apps</a>
            <a href="/installation" className="hover:text-white transition">Installation</a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-sm text-gray-300 hidden sm:block">
            Social Links
          </span>

          <div className="flex gap-4 text-xl">
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-gray-300 transition">
              <FaGithub />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <hr className="border-gray-700" />
        <p className="text-sm text-gray-300 text-center py-4">
          © {year} HERO.IO — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;