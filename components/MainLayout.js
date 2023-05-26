import React from "react";
import LeftSidebar from "./LeftSidebar";
import Home from "./Home";
import RightSidebar from "./RightSidebar";

export default function MainLayout(){

    return (
        <>
            <div className = "layout_container w-full flex flex-grow items-start justify-between bg-main_secondary_high">
                <LeftSidebar />
                <Home />
                <RightSidebar />
            </div>
        </>
    )
}