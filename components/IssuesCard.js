export default function IssuesCard(){
    return (
        <>
            <div className = "issue_card mb-3 border-2 border-main_primary w-[95%] rounded-md flex flex-col justify-start items-start p-3">
                    <div className = "title_sec w-[100%] flex justify-between items-center">
                        <p className = "text-main_secondary_low text-[16px] w-[100%] font-semibold"><span className = "text-main_primary m-0">#100</span> About information not available when logged out</p>
                        {/* <div className = "non_assigned_issues_sec rounded-[20px] w-[25%] px-3 py-1 text-center border-main_primary border-[2px] italic font-semibold text-main_primary text-[14px]">
                            
                        </div> */}
                    </div>                    
                    <p className = "text-main_secondary mb-3" ><i class="fa fa-github text-main_primary" aria-hidden="true"></i> anand346 / findissues</p>
                    <div className = "footer_sec flex justify-between items-center w-[100%]">
                        
                        <div className = "repo_details flex justify-between items-center">
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
                        <p className = "issue_sec text-[14px] italic text-main_yellow"><i class="fa fa-clock-o" aria-hidden="true"></i> 2 minutes ago</p>

                    </div>
                </div>
        </>
    )
}