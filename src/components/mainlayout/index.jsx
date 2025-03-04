import { Topbar } from "./topBar ";
import { MainSidebar } from "./mainSidebar";
import { Outlet } from "react-router-dom";
import React from "react";

export const MainLayout = () => {
  return (
    <div className="app">
      <MainSidebar />
      <main className="content">
        <Topbar />
        <div style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
