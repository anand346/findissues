import { useHydration } from "@/hooks/useHydration";
import { getTimeFromNow } from "@/utils/getTimeFromNow";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function IssuesCard({ issue }) {
  const [timeFromNow, setTimeFromNow] = useState(
    getTimeFromNow(issue.createdAt),
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeFromNow(getTimeFromNow(issue.createdAt));
    }, 30000);

    return () => clearInterval(intervalId);
  });

  // since we are updating a state based on time, we need to lookout for mismatches
  // betwen server side and client side renders.
  // this below hook will make the targeted component wait for rehydration before rendering
  const hydrated = useHydration();

  return (
    <>
      <div className="issue_card mb-3 border-2 border-main_primary w-[100%] sm:w-[95%] rounded-sm flex flex-col justify-start items-start p-3 transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:border-main_yellow duration-300">
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
                {"tag" in issue
                  ? `#tag: ${issue.tag}`
                  : `lang: ${issue.language}`}
              </p>
            </div>
          </div>
          {/* wait for rehydration */}
          {hydrated && (
            <p className="issue_sec lg:text-[14px] sm:text-[12px] text-[12px] italic text-main_yellow">
              <i className="fa fa-clock-o" aria-hidden="true"></i> {timeFromNow}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
