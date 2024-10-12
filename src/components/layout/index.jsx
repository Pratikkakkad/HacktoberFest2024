import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <div className="p-4 h-[calc(100vh-80px)]">
        <Outlet />
      </div>
    </div>
  );
}
