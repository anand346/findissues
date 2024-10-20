import React from "react";
import { useTheme } from 'next-themes';
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import styles from "@/styles/MainLayout.module.css";

export default function MainLayout({ childrenEl }) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || "dark";

  return (
    <>
      <div
        className={`overflow-auto main_layout w-full flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between bg-${theme}_main_secondary_high h-full`}
      >
        <LeftSidebar />
        {childrenEl}
        <RightSidebar />
      </div>
    </>
  );
}
