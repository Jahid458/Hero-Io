import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
        <Navbar></Navbar>
      <div className=" container mx-auto min-h-[calc(100vh-160px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
