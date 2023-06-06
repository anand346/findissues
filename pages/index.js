import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className = {`${styles.landing_main} overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
            <Image unoptimized={true} className = "w-[150px] md:w-[200px] mt-[20px] md:mt-[70px] p-3 md:p-0 md:ml-[90px] mb-[10px] md:mb-[30px] " src = "/images/logo.png" width = {100} height = {100} alt = "findissues logo" />
            <h1 className = "pl-3 md:p-0 md:ml-[90px] italic font-semibold text-[24px] md:text-[36px] text-main_primary">New to Open-Source ?</h1>
            <p className = "pl-3 md:p-0 md:ml-[90px] text-main_yellow text-[18px] md:text-[22px] mb-[30px] mr-[90px] ">Find Most Recent and Unassigned Issues Here!</p>
            <p className = "text-[18px] ml-[90px] text-main_primary italic leading-loose mr-[90px] mb-[50px]">Find issues lets you find <b>most recently created issues</b> on GitHub that are <b>not assigned</b> to anyone according to your development language with its advance search technique.</p>
            <p className = "mt-auto p-3 md:p-0 md:ml-[90px] mb-[20px] text-main_primary italic font-semibold text-[12px] md:text-[18px]"><i className="fa fa-copyright" aria-hidden="true"></i> FindIssues {new Date().getFullYear()} | Developed With <i className="fa fa-heart" aria-hidden="true"></i> By <Link href = "https://github.com/anand346" className = "underline-offset-2 underline">Anand Raj</Link></p>
        </div>
    </>
  )
}
