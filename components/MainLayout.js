import React from "react";
import LeftSidebar from "./LeftSidebar";
import LandingMain from "./LandingMain";
import RightSidebar from "./RightSidebar";
import styles from "@/styles/MainLayout.module.css";

export default function MainLayout({ childrenEl }) {
  return (
    <>
      <div
        className={`overflow-auto main_layout w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between bg-main_secondary_high h-full`}
      >
        <LeftSidebar />
        {childrenEl}
        <RightSidebar />
      </div>
    </>
  );
}
