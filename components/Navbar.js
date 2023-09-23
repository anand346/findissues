import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { langs } from "@/helper/Languages";
import { tags } from '@/helper/tags';

export default function Navbar(){

    const [showSidebar,setShowSidebar] = useState(false);

    return (
        <>
            <div className = "navbar sm:h-[90px] h-[75px] border-main_secondary border-b-2 w-full flex flex-grow items-center sm:p-8 py-2 px-3 justify-between bg-main_secondary_high shadow-md ">
                <div className = "navbar_left logo">
                        <Link href = "/"><Image unoptimized={true} src = "/images/logo.png" alt="Muzical Logo" height={100} width={100} className = "w-[7rem] sm:w-[8rem] " /></Link>
                </div>
                <>
                    {
                        showSidebar == false ? (
                            <button onClick={ () => setShowSidebar(!showSidebar) }  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  ">
                                <span className="sr-only">Open main menu</span>
                                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#1b9c85" viewBox="0 0 17 14">
                                    <path stroke="#1b9c85" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                                </svg>
                            </button>  
                        ) : (
                            <button
                                className="flex text-xl text-main_primary md:hidden items-center cursor-pointer fixed right-5 top-3 z-50"
                                onClick={() => setShowSidebar(!showSidebar)}
                            >
                            x
                            </button>
                        )
                    }

                    <div  className={`top-0 right-0 w-[230px] sm:w-[300px] bg-main_secondary_high border-main_secondary border-[2px] p-3 pt-3 text-main_secondary fixed h-full overflow-y-scroll  z-40 md:hidden ease-in-out duration-300 ${ showSidebar ? "translate-x-0 " : "translate-x-full" }` } >
                        <div className="w-full flex flex-col items-start justify-start md:mb-5">
                            <p className="basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px]">
                                 Languages
                            </p>
                            <div className={` basic_search_content mb-4 w-full flex items-start justify-start flex-wrap space-y-3`} >
                                {langs.map((lang) => {
                                    return (
                                    <a
                                        href={`/search/${lang.query}`}
                                        key={lang.query}
                                        className={`first:mt-3 cursor-pointer`}
                                    >
                                        <div className={` cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[20px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105`}>
                                        {lang.lang_name}
                                        </div>
                                    </a>
                                    );
                                })}
                            </div>
                            <div className="advance_search_title hidden w-full flex flex-col items-start justify-start md:mb-5">
                                <div className="advance_search_title mb-2 md:mb-4 flex w-full justify-start items-center">
                                    <p className="advance_search_title text-main_primary font-semibold italic text-[16px] lg:text-[18px] mr-3">
                                        Tags
                                    </p>
                                </div>
                                <div className={` advance_search_content mb-4 w-full flex items-start justify-start flex-wrap space-y-3`} >
                                    {tags.map((tag) => {
                                        return (
                                        <a
                                            href={`/search/${tag.query}`}
                                            key={tag.query}
                                            className={`first:mt-3 cursor-pointer`}
                                        >
                                            <div className={` cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[20px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105`}>
                                            {tag.tag_name}
                                            </div>
                                        </a>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="w-full flex flex-col items-start justify-start md:mb-5">
                                <p className="basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px]">
                                    Socials
                                </p>
                                <div className = " flex space-x-5 block md:hidden ">
                                    <Link target="_blank" href="https://github.com/anand346/findissues" className="inline-flex border-2 p-2 rounded-[20px] border-main_primary" ><Image src = "/dark-github.svg" alt = "dark theme logo" height = {20} width = {20} className = "sm:w-[20px] cursor-pointer " /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>
                    
                <div className = "navbar_right flex space-x-5 hidden md:block ">
                    <Link target="_blank" href="https://github.com/anand346/findissues" ><Image src = "/dark-github.svg" alt = "dark theme logo" height = {100} width = {100} className = "sm:w-[1.5rem] w-[1.5rem] cursor-pointer" /></Link>
                </div>
            </div>
        </>
    )
}