import {useRouter} from "next/router";
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
import IssuesCard from "@/components/IssuesCard";

export default function Search(){

    const router = useRouter();
    

    return (
        <>
            <div className = {`${styles.landing_main} p-8 issues_result overflow-auto w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
                <p className = "w-[200px] mb-4 italic font-semibold text-[18px] text-main_primary">Issues Result</p>
                <IssuesCard />
                <IssuesCard />
                <IssuesCard />
                <IssuesCard />
                <IssuesCard />
                <IssuesCard />
                <IssuesCard />
            </div>
        </>
    )
}