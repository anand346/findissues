import Link from "next/link";

export default function IssuesCard({ issue }) {
  return (
    <>
      <div className="issue_card mb-3 border-2 border-main_primary w-[100%] sm:w-[95%] rounded-sm flex flex-col justify-start items-start p-3 transition-all transform hover:scale-105">
        <div className="title_sec w-[100%] flex justify-between items-center">
          <Link
            href={issue.issueUrl}
            className="truncate w-full"
            target="_blank"
          >
            <p className="hover:text-main_primary truncate w-full  text-main_secondary_low lg:text-[16px] sm:text-[14px] text-[14px] w-[100%] font-semibold">
              <span className="text-main_primary m-0">
                #{issue.issueNumber}
              </span>{" "}
              {issue.issueTitle}
            </p>
          </Link>
        </div>
        <Link
          href={`https://github.com/${issue.repoTitle}`}
          className="w-full truncate"
          target="_blank"
        >
          <p className="hover:text-main_secondary_low lg:text-[16px] sm:text-[14px] text-[14px] w-full truncate text-[#a6a6c1] mb-3">
            <i
              className="fa fa-github text-main_primary"
              aria-hidden="true"
            ></i>{" "}
            {issue.repoTitle}
          </p>
        </Link>
        <div className="footer_sec flex lg:text-[16px] sm:text-[12px] text-[12px] flex-col sm:flex-col lg:flex-row lg:justify-between sm:justify-start lg:items-center sm:items-start  w-[100%]">
          <div className="repo_details flex justify-start flex-wrap lg:justify-between items-center">
            <div className="repo_stars mr-2">
              <p className="text-main_secondary_low">
                <i
                  className="fa fa-star text-main_primary"
                  aria-hidden="true"
                ></i>{" "}
                stars : {issue.repo_stars}
              </p>
            </div>
            <div className="repo_forks mr-2">
              <p className="text-main_secondary_low">
                <i
                  className="fa fa-code-fork text-main_primary"
                  aria-hidden="true"
                ></i>{" "}
                forks : {issue.repo_forks}
              </p>
            </div>
            <div className="repo_lang mr-2 ">
              <p className="text-main_secondary_low">
                <i
                  className="fa fa-laptop text-main_primary"
                  aria-hidden="true"
                ></i>{" "}
                lang : {issue.language}
              </p>
            </div>
          </div>
          <p className="issue_sec lg:text-[14px] sm:text-[12px] text-[12px] italic text-main_yellow">
            <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
            {issue.timeFromNow}
          </p>
        </div>
      </div>
    </>
  );
}
