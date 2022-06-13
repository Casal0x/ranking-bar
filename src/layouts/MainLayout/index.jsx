import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="main-layout">
      Este es el main layout
      <div className="routes">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
