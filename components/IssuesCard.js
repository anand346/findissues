export default function IssuesCard(){
    return (
        <>
            <div className = "issue_card mb-3 border-2 border-main_primary w-[95%] rounded-md flex flex-col justify-start items-start p-3">
                    <div className = "title_sec w-[100%] flex justify-between items-center">
                        <p className = "text-main_secondary_low text-[24px] font-semibold">anand346 / findissues</p>
                        <div className = "non_assigned_issues_sec rounded-[20px] px-3 py-1 text-center border-main_primary border-[2px] italic font-semibold text-main_primary text-[14px]">
                            9 Non-Assigned Issues
                        </div>
                    </div>                    
                    <p className = "text-main_secondary_low mb-3" >The mobile app vault (iOS and Android)</p>
                    <div className = "footer_sec">
                        <p className = "issue_sec text-[14px] font-semibold text-main_yellow">Most recent issue created 2 minutes ago</p>
                        <div className = "repo_details flex justify-start items-start">
                            <div className = "repo_stars mr-2">
                                <p><i className="fa fa-star text-main_primary" aria-hidden="true"></i> stars : 30</p>
                            </div>
                            <div className = "repo_forks mr-2">
                                <p><i className="fa fa-code-fork text-main_primary" aria-hidden="true"></i> forks : 30</p>
                            </div>
                            <div className = "repo_lang mr-2">
                                <p><i className="fa fa-laptop text-main_primary" aria-hidden="true"></i> lang : PHP</p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}