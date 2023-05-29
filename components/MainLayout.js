import React from "react";
import LeftSidebar from "./LeftSidebar";
import LandingMain from "./LandingMain";
import RightSidebar from "./RightSidebar";
import styles from "@/styles/MainLayout.module.css";

export default function MainLayout({childrenEl}){

    return (
        <>
            <div className = {`${styles.layout_container} overflow-auto layout_container w-full flex items-start justify-between bg-main_secondary_high h-full`}>
                <LeftSidebar />
                {childrenEl}
                <RightSidebar />
            </div>
        </>
    )
}