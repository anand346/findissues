import React from "react";
import styles from "@/styles/LeftSidebar.module.css";
import { langs } from "@/helper/Languages";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState , useEffect } from "react";


export default function LeftSidebar(){

    const router = useRouter();

    function replaceRoute(lang_query){
        router.replace(`/search/${lang_query}`).then(() => router.reload())
    }

    return (
        <>
            <div className = {`${styles.left_sidebar} overflow-auto  left_sidebar  h-max-screen md:p-8 p-3 w-[100%] md:w-[23%] md:border-r-2 border-main_secondary h-full `}>
                <div className = "left_sidebar_content flex flex-col justify-start items-start">
                    <div className = "basic_search w-full flex flex-col items-start justify-start md:mb-5">
                        <p className = "basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px]">Basic Search</p>
                        <div className = {` basic_search_content w-full flex items-start justify-start flex-wrap space-y-3`}>
                            {
                                langs.map(lang => {
                                    return (
                                        <a href="javascript:void(0);" key={lang.query} className = {`first:mt-3 cursor-pointer`} onClick = {() => replaceRoute(lang.query)}><div className = {`${lang.query == router.query.lang ? 'bg-main_secondary' : ''} cursor-pointer mr-2 lang_name px-3 py-1 text-center border-main_primary border-[2px] rounded-[20px] italic font-semibold text-main_primary text-[12px] lg:text-[14px]`}>{lang.lang_name}</div></a>
                                    )
                                })
                            }

                        </div>
                    </div>
                    <div className = "advance_search hidden w-full flex flex-col items-start justify-start">
                        <div className = "advance_search_title mb-4 flex w-full justify-start items-center">
                        <p className = "advance_search_title text-main_primary font-semibold italic text-[18px] mr-3">Advance Search</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" />
                            <div className="w-9 h-5 bg-transparent border border-main_primary border border-[2px] rounded-full peer peer-focus:ring-0 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-main_secondary after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-main_primary"></div>
                        </label>
                        </div>
                        
                        <div className = "advance_search_content  w-full flex flex-wrap items-start justify-start space-y-3 ">
                        
                            <div className=" filter_btn flex h-8 first:mt-3 mr-2">
                                <span className="inline-flex items-center px-2 text-main_primary bg-transparent border border-t-[2px] border-l-[2px] border-b-[2px] border-main_primary rounded-l-[20px] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14.795" height="16.929" className = "h-3" viewBox="0 0 14.795 16.929">
                                        <path id="Icon_open-fork" data-name="Icon open-fork" d="M3.17,0A3.166,3.166,0,0,0,0,3.17,3.132,3.132,0,0,0,2.114,6.15v4.629A3.112,3.112,0,0,0,0,13.759a3.17,3.17,0,0,0,6.341,0,3.109,3.109,0,0,0-1.775-2.832,1.049,1.049,0,0,1,.719-.338H9.511a3.193,3.193,0,0,0,3.17-3.17V6.171a3.112,3.112,0,0,0,2.113-2.98,3.17,3.17,0,1,0-6.341,0,3.132,3.132,0,0,0,2.114,2.98V7.418A1.046,1.046,0,0,1,9.511,8.475H5.284a3.467,3.467,0,0,0-1.057.19V6.15A3.112,3.112,0,0,0,6.341,3.17,3.166,3.166,0,0,0,3.17,0Z" fill="#1b9c85"/>
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" className=" rounded-r-[20px] w-[65px] bg-transparent border border-main_primary text-main_primary border-t-[2px] border-r-[2px] border-b-[2px] focus:outline-0 focus:ring-0 focus:border-main_primary placeholder:italic" placeholder="Forks" />
                            </div>
                            <div className=" filter_btn flex h-8 first:mt-3 mr-2">
                                <span className="inline-flex items-center px-2 text-main_primary bg-transparent border border-t-[2px] border-l-[2px] border-b-[2px] border-main_primary rounded-l-[20px] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16.153" height="14.999" className = "h-3" viewBox="0 0 16.153 14.999">
                                        <path id="Icon_ionic-ios-star" data-name="Icon ionic-ios-star" d="M17.79,8.567h-5.3l-1.612-4.81a.584.584,0,0,0-1.1,0L8.167,8.567H2.827a.579.579,0,0,0-.577.577.424.424,0,0,0,.011.1.554.554,0,0,0,.242.407l4.359,3.072L5.189,17.585a.579.579,0,0,0,.2.649.558.558,0,0,0,.325.141.707.707,0,0,0,.361-.13l4.255-3.032,4.255,3.032a.676.676,0,0,0,.361.13.518.518,0,0,0,.321-.141.571.571,0,0,0,.2-.649l-1.673-4.864,4.323-3.1.1-.09a.551.551,0,0,0-.425-.963Z" transform="translate(-2.25 -3.375)" fill="#1b9c85"/>
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" className=" rounded-r-[20px] w-[65px] bg-transparent border border-main_primary text-main_primary border-t-[2px] border-r-[2px] border-b-[2px] focus:outline-0 focus:ring-0 focus:border-main_primary placeholder:italic" placeholder="Stars" />
                            </div>
                            <div className=" filter_btn flex h-8 first:mt-3 mr-2">
                                <span className="inline-flex items-center px-2 text-main_primary bg-transparent border border-t-[2px] border-l-[2px] border-b-[2px] border-main_primary rounded-l-[20px] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.722" height="14.135" className = "h-3" viewBox="0 0 12.722 14.135">
                                        <path id="Icon_material-date-range" data-name="Icon material-date-range" d="M8.741,9.361H7.327v1.414H8.741Zm2.827,0H10.154v1.414h1.414Zm2.827,0H12.981v1.414h1.414Zm1.414-4.947H15.1V3H13.688V4.414H8.034V3H6.62V4.414H5.914A1.407,1.407,0,0,0,4.507,5.827L4.5,15.722a1.413,1.413,0,0,0,1.414,1.414h9.895a1.418,1.418,0,0,0,1.414-1.414V5.827A1.418,1.418,0,0,0,15.808,4.414Zm0,11.308H5.914V7.947h9.895Z" transform="translate(-4.5 -3)" fill="#1b9c85"/>
                                    </svg>
                                </span>
                                <input type="text" id="website-admin" className=" rounded-r-[20px] w-[130px] bg-transparent border border-main_primary text-main_primary border-t-[2px] border-r-[2px] border-b-[2px] focus:outline-0 focus:ring-0 focus:border-main_primary placeholder:italic " placeholder="YYYY-MM-DD" />
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}