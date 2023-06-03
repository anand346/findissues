import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


export default function Navbar(){
    return (
        <>
            <div className = "navbar sm:h-[90px] h-[75px] border-main_secondary border-b-2 w-full flex flex-grow items-center sm:p-8 py-2 px-3 justify-between bg-main_secondary_high shadow-md ">
                <div className = "navbar_left logo">
                        <Link href = "/"><Image unoptimized={true} src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[7rem] sm:w-[8rem] " /></Link>
                </div>
                <div className = "navbar_right flex space-x-5">
                    {/* <Image src = "/dark-moon.svg" alt = "dark theme logo" height = {100} width = {100} className = "sm:w-[1.5rem] w-[1rem] cursor-pointer " /> */}
                    <Link target="_blank" href="https://github.com/anand346/findissues" ><Image src = "/dark-github.svg" alt = "dark theme logo" height = {100} width = {100} className = "sm:w-[1.5rem] w-[1.5rem] cursor-pointer" /></Link>
                </div>
            </div>
        </>
    )
}