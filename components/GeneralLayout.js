import React from "react";
import Navbar from "./Navbar";
import MainLayout from "./MainLayout";

export default function GeneralLayout({children}){
    return (
        <div className = "main_container w-screen h-screen md:h-screen flex flex-col justify-center items-center ">
          <Navbar />
          <MainLayout childrenEl={children} />
        </div>
    )

}