import React from "react";
import Navbar from "./Navbar";
import MainLayout from "./MainLayout";
import { ThemeProvider} from 'next-themes';

export default function GeneralLayout({ children}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <div className= "general_layout w-screen h-screen flex flex-col justify-center items-center ">
        <Navbar />
        <MainLayout childrenEl={children} />
      </div>
    </ThemeProvider>
    
  );
}
