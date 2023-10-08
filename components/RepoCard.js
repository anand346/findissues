import Link from "next/link";
import { getTimeFromNow } from "@/utils/getTimeFromNow";
import { useState } from "react";
import { issue } from "@/helper/issue";
export default function RepoCard({repo}){

    const [show,setShow] = useState(false);
    const [hide,setHide] = useState(true);

    const handleExpand = (e) => {
        e.preventDefault();
        setShow(true);
        setHide(false);
    }

    return (
        <>
           <div onClick={(e) => handleExpand(e)} className="repo_card cursor-pointer rounded-[5px] mb-3 border-2 border-main_primary w-[100%] sm:w-[95%] rounded-sm flex flex-col justify-start items-start p-3 transition-all transform md:hover:scale-105">
                <div className="card_header flex items-center justify-between w-full mb-2">
                    <p className="repo_title text-lg font-semibold text-main_secondary_low w-7/12 truncate" > {repo.full_name.split("/")[0]+" / "+repo.full_name.split("/")[1]} </p>
                    <p className="open_issues cursor-pointer lang_name w-[110px] truncate px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105"> {repo.open_issues_count} Open Issues </p>
                </div>
                {/* <div className="card_bio flex items-start justify-start mb-2 max-h-[50px] ">
                    <p className="text-sm text-main_secondary_low " > {repo.description} </p>
                </div> */}
                <div className="card_updated mb-2">
                    <p className="issue_sec lg:text-[14px] sm:text-[12px] text-[12px] italic text-main_yellow">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> Last updated {getTimeFromNow(repo.updated_at)}
                    </p>
                </div>
                <div className="card_definitives flex items-center justify-start mb-2">
                    <div className="repo_stars mr-2">
                        <p className="text-main_secondary_low">
                            <i
                            className="fa fa-star text-main_primary"
                            aria-hidden="true"
                            ></i>{" "}
                            stars: {repo.stargazers_count}
                        </p>
                    </div>
                    <div className="repo_forks mr-2">
                        <p className="text-main_secondary_low">
                            <i
                            className="fa fa-code-fork text-main_primary"
                            aria-hidden="true"
                            ></i>{" "}
                            forks: {repo.forks_count}
                        </p>
                    </div>
                    <div className="repo_lang mr-2 ">
                        <p className="text-main_secondary_low">
                            <i
                            className="fa fa-laptop text-main_primary"
                            aria-hidden="true"
                            ></i>{" "}
                            lang: {repo.language}
                        </p>
                    </div>
                </div>
                <div className="repo_issues cursor-pointer rounded-[5px] w-full rounded-sm flex flex-col justify-start items-start pt-2">
                    <div className="border-t-2 border-dashed mb-3 border-main_primary w-full"></div>
                    <div className="repo_single_issue mb-2">
                        <p className="text-main_yellow"><span className="issue_number text-main_primary">#{issue.number}</span> {issue.title}</p>
                    </div>
                    <div className="repo_single_issue mb-2">
                        <p className="text-main_yellow"><span className="issue_number text-main_primary">#{issue.number}</span> {issue.title}</p>
                    </div>
                    <div className="repo_single_issue mb-2">
                        <p className="text-main_yellow"><span className="issue_number text-main_primary">#{issue.number}</span> {issue.title}</p>
                    </div>
                    <div className="repo_single_issue mb-2">
                        <p className="text-main_yellow"><span className="issue_number text-main_primary">#{issue.number}</span> {issue.title}</p>
                    </div>
                </div>
           </div>

        </>
    )
}