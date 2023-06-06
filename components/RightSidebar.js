import React from "react";
import styles from "@/styles/RightSidebar.module.css";

export default function RightSidebar(){

    return (
        <>
            <div className = {` ${styles.right_sidebar} overflow-auto right_sidebar sm:p-8 p-7 w-[23%] border-l-2 border-main_secondary p-8 h-full`}>
                <div className = "right_sidebar_content flex flex-col justify-start items-start">
                    <p className = "right_sidebar_title text-main_primary font-semibold italic text-[18px] mb-4">How it works ?</p>
                    {/* <p className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-4">To find the most recent issues created on GitHub of your favourite programming lang. and which is not assigned to anyone till now. 
                    </p> */}
                    <p className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-4">To find most recent created issues on Github follow these steps  :</p>
                    <ol className = "list-decimal ml-[13px]">
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-3">
                        Choose your favourite programming langauge from basic search tab on the left side bar .
                        </li>
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-3">
                        This will show you all the recent created issues on GitHub of that lang. that are not assigned to anyone .
                        </li>
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-3">
                        If you want to filter issues based on stars and forks of repo then you can use advance search .
                        </li>
                        <li className = "right_sidebar_title text-main_primary font-semibold italic text-[14px] mb-3">
                        With advance search you can filter issues based on stars and forks of repo along with date of creation of issues .

                        </li>
                    </ol>

                </div>
            </div>
        </>
    )
}