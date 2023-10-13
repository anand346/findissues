import Link from "next/link";
import { getTimeFromNow } from "@/utils/getTimeFromNow";
import { useState } from "react";
import { IssueSkeleton } from "./IssueSkeleton";

export default function RepoCard({repo,activeIndex,index,setActiveIndex}){
    
    const [issueData,setIssueData] = useState(null);

    const handleOnClickEvent = async (e,index,issue_url) => {

        if(index == activeIndex){
            setActiveIndex(-1);
            return ;
        }else{
            setActiveIndex(index);
            const response = await fetch(issue_url,{
                headers: {
                  Authorization: "token " + process.env.NEXT_PUBLIC_FETCH_REPO,
                  Accept: "application/vnd.github.v3+json",
                },
                next: {revalidate: 600}
              });
            const result = await response.json();
            // const filtered_issue = result.filter(issue => {
            //     return issue.assignee == null && issue.state == "open" && issue.html_url.split("/")[5].includes("issues")
            // })
            let filtered_issue = [];
            result.map(issue => {
                if(issue.assignee == null && issue.state == "open" && issue.html_url.split("/")[5].includes("issues")){

                    let issue_label = "";
                    issue.labels?.map(label => {

                        if(label.name.includes("hacktoberfest") && issue_label.length == 0){
                            issue_label = label.name+","+label.color;
                        }
                    })

                    const issue_detail = {
                        number: issue.number,
                        title: issue.title,
                        html_url: issue.html_url,
                        label: issue_label
                    }

                    filtered_issue.push(issue_detail);
                }
            })

            setIssueData(filtered_issue);
        }
    }
    
    return (
        <>
           <div onClick={(e) => handleOnClickEvent(e,index,repo.issue_url)} className="repo_card cursor-pointer rounded-[5px] mb-3 border-2 border-main_primary w-[100%]  sm:w-[95%] rounded-sm flex flex-col justify-start items-start p-3 transition-all transform md:hover:border-dashed md:hover:border-main_yellow duration-300">
                <div className="card_header flex items-center justify-between w-full mb-2">
                    <p className="repo_title lg:text-[18px] text-[16px] font-semibold text-main_secondary_low w-11/12 md:w-7/12 truncate" > {repo.full_name.split("/")[0]+" / "+repo.full_name.split("/")[1]} </p>
                    {/* <p className="open_issues cursor-pointer lang_name w-[110px] truncate px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105"> {repo.open_issues} Open Issues </p> */}
                </div>
                <div className="card_updated mb-2">
                    <p className="issue_sec lg:text-[16px] text-[14px] italic text-main_yellow">
                        <i className="fa fa-clock-o" aria-hidden="true"></i> Last updated {getTimeFromNow(repo.updated_at)}
                    </p>
                </div>
                <div className="card_definitives flex items-center justify-start flex-wrap lg:justify-between mb-2 lg:text-[16px] text-[14px]">
                    <div className="repo_stars mr-2">
                        <p className="text-main_secondary_low">
                            <i
                            className="fa fa-star text-main_primary"
                            aria-hidden="true"
                            ></i>{" "}
                            stars: {repo.stars}
                        </p>
                    </div>
                    <div className="repo_forks mr-2">
                        <p className="text-main_secondary_low">
                            <i
                            className="fa fa-code-fork text-main_primary"
                            aria-hidden="true"
                            ></i>{" "}
                            forks: {repo.forks}
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
                <div className={`repo_issues ${index != activeIndex ? 'hidden' : '' } cursor-pointer rounded-[5px] w-full rounded-sm flex flex-col justify-start items-start pt-2 lg:text-[16px] text-[14px]`}>
                    <div className="border-t-2 border-dashed mb-3 border-main_primary w-full"></div>
                   
                    {issueData?.map((issue,index) => (
                        <>
                            <Link
                                href={issue.html_url}
                                target="_blank"
                                className="w-full truncate"
                                key={index}
                            >
                                <div className="repo_single_issue mb-2 truncate md:hover:scale-105 transition-all flex items-center justify-between duration-300">
                                    <p className="text-main_yellow w-[70%] truncate"><span className="issue_number text-main_primary">#{issue.number}</span> {issue.title}</p>
                                    <>
                                        {
                                            issue.label.length > 0 ? (
                                                <p className={`rounded-full px-2 border-2 border-[#16db93] text-[#16db93] lg:text-[14px] text-[12px]`}>{issue.label.split(",")[0]}</p>
                                            ) : (
                                                ""
                                            )
                                        }     
                                    </>
                                    
                                </div>
                            </Link>
                            
                        </>
                        )   
                    )}
                </div>
           </div>

        </>
    )
}