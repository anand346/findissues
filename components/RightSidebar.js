import React from "react";
import styles from "@/styles/RightSidebar.module.css";

export default function RightSidebar(){

    return (
        <>
            <div className = {` ${styles.right_sidebar} hidden  md:block overflow-auto right_sidebar sm:p-8 p-7 w-[23%] border-l-2 border-main_secondary p-8 h-full`}>
                <div className = "right_sidebar_content flex flex-col justify-start items-start">
                    <p className = "right_sidebar_title text-main_primary font-semibold italic text-[16px] lg:text-[18px] mb-4">How To Use ?</p>
                    {/* <p className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-4">To find the most recent issues created on GitHub of your favourite programming lang. and which is not assigned to anyone till now. 
                    </p> */}
                    {/* <p className = "right_sidebar_title text-main_primary font-semibold italic text-[12px] lg:text-[14px] mb-4">To find most recent created issues on Github follow these steps  :</p> */}
                    <ol className = "list-decimal ml-[13px] mb-3">
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[12px] lg:text-[14px] mb-3">
                        Please select your preferred programming language from the categories listed in the sidebar on the left.
                        </li>
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[12px] lg:text-[14px] mb-3">
                        It will display 30 of the most recent Github issues created in that language that have not yet been assigned to anyone.
                        </li>
                    </ol>
                    <p className = "right_sidebar_title text-main_primary font-semibold italic text-[16px] lg:text-[18px] mb-4">Future Plans </p>
                    <ol className = "list-decimal ml-[13px]">
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[12px] lg:text-[14px] mb-3">
                        To Implement Advance Search Technique which will help users to filter issues based on no. of stars and forks.
                        </li>
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[12px] lg:text-[14px] mb-3">
                        To show 100 most recent created github issues with pagination functionality .
                        </li>
                    </ol>
                    <p className = "right_sidebar_title text-[#a6a6c1] font-semibold italic text-[14px] ">Note : You may see little fluctuation in timing of issue creation </p>

                </div>
            </div>
        </>
    )
}