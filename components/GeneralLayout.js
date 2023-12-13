import React from "react";
import Navbar from "./Navbar";
import MainLayout from "./MainLayout";
import { ThemeProvider } from './ThemeContext';

export default function GeneralLayout({ children }) {
  
  return (
    <ThemeProvider>
      <div className="general_layout w-screen h-screen flex flex-col justify-center items-center ">
        <Navbar />
        <MainLayout childrenEl={children} />
      </div>  
    </ThemeProvider>
  );
}
