import Link from "next/link"

export default function IssuesCard({issue}){
    return (
        <>
            <div className = "issue_card mb-3 border-2 border-main_primary w-[95%] rounded-md flex flex-col justify-start items-start p-3">
                    <div className = "title_sec w-[100%] flex justify-between items-center">
                        <Link href = {issue.issueUrl} target="_blank" ><p className = "hover:text-main_primary text-main_secondary_low text-[16px] w-[100%] font-semibold"><span className = "text-main_primary m-0">#{issue.issueNumber}</span> {issue.issueTitle}</p></Link> 
                    </div>                    
                    <Link href = {`https://github.com/${issue.repoTitle}`} target="_blank" ><p className = "hover:text-main_secondary_low text-main_secondary mb-3" ><i className="fa fa-github text-main_primary" aria-hidden="true"></i> {issue.repoTitle}</p></Link> 
                    <div className = "footer_sec flex justify-between items-center w-[100%]">
                        
                        <div className = "repo_details flex justify-between items-center">
                            <div className = "repo_stars mr-2">
                                <p><i className="fa fa-star text-main_primary" aria-hidden="true"></i> stars : {issue.repo_stars}</p>
                            </div>
                            <div className = "repo_forks mr-2">
                                <p><i className="fa fa-code-fork text-main_primary" aria-hidden="true"></i> forks : {issue.repo_forks}</p>
                            </div>
                            <div className = "repo_lang mr-2">
                                <p><i className="fa fa-laptop text-main_primary" aria-hidden="true"></i> lang : {issue.language}</p>
                            </div>
                        </div>
                        <p className = "issue_sec text-[14px] italic text-main_yellow"><i className="fa fa-clock-o" aria-hidden="true"></i> {issue.timeFromNow}</p>

                    </div>
                </div>
        </>
    )
}