import React from "react";
import Navbar from "./Navbar";
import MainLayout from "./MainLayout";

export default function GeneralLayout({ children }) {
  return (
    <div className="general_layout w-screen h-screen flex flex-col justify-center items-center ">
      <Navbar />
      <MainLayout childrenEl={children} />
    </div>
  );
}
