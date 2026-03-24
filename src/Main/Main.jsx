import React from "react";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
        <h1>Hello Main Layout Present</h1>
      <div className=" container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
