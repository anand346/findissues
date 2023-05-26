import React from 'react';
import Image from 'next/image';


export default function Navbar(){
    return (
        <>
            <div className = "navbar border-main_secondary border-b-2 w-full flex items-center sm:p-8 p-7 justify-between bg-main_secondary_high shadow-md ">
                <div className = "navbar_left logo">
                        <Image unoptimized={true} src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[5rem] sm:w-[8rem] " />
                </div>
                <div className = "navbar_right flex space-x-5">
                    <Image src = "/dark-moon.svg" alt = "dark theme logo" height = {100} width = {100} className = "sm:w-[1.5rem] w-[1rem] cursor-pointer " />
                    <Image src = "/dark-github.svg" alt = "dark theme logo" height = {100} width = {100} className = "sm:w-[1.5rem] w-[1rem] cursor-pointer" />                    
                </div>
            </div>
        </>
    )
}