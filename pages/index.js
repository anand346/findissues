import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className = {`${styles.landing_main} overflow-auto w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
            <Image unoptimized={true} className = "w-[200px] mt-[70px] ml-[90px] mb-[30px] " src = "/images/logo.png" width = {100} height = {100} alt = "findissues logo" />
            <h1 className = "ml-[90px] italic font-semibold text-[36px] text-main_primary">New to Open-Source ?</h1>
            <p className = "ml-[90px] text-main_yellow text-[22px] mb-[30px] mr-[90px] ">Find Most Recent Open-Source Issues Here</p>
            <p className = "text-[18px] ml-[90px] text-main_primary italic leading-loose mr-[90px] mb-[50px]">Find issues aims to provide you access to the <b>most recent created issues</b> on GitHub which is <b>not assigned</b> to anyone in accordance with your development language with it's advance search technique .</p>
            <p className = "mt-auto ml-[90px] mb-[20px] text-main_primary italic font-semibold text-[18px]"><i className="fa fa-copyright" aria-hidden="true"></i> FindIssues 2023 | Developed With <i className="fa fa-heart" aria-hidden="true"></i> By <Link href = "https://github.com/anand346" className = "underline-offset-2 underline">Anand Raj</Link></p>
        </div>
    </>
  )
}
