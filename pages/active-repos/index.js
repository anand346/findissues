import SeoTags from "@/components/SeoTags";
import styles from "@/styles/ActiveRepo.module.css";
import { useTheme } from "next-themes";
import RepoCard from "@/components/RepoCard";
import { useState, useEffect, useRef } from "react";
import { repos_list } from "@/_data/repos";
import moment from "moment/moment";

import { BsChevronUp } from "react-icons/bs";
import loadActiveRepoDetails from "../api/loadActiveRepoDetails";
export default function ActiveRepo({ repoDetails }) {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme || "dark";

  const [activeIndex, setActiveIndex] = useState(-1);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
  const wrapperRef = useRef(null);

  const scrollToTop = () => {
    console.log("onclicka");
    const issuesNav = document.getElementById("activeReposContainer");
    console.log(issuesNav);
    if (issuesNav) {
      issuesNav.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const scrollY = wrapperRef.current.scrollTop;
        const scrollThreshold = 200;
        setShowScrollTopButton(scrollY > scrollThreshold);
      }
    };

    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const getDayDiff = (updated_at) => {
    let diffDay =
      Math.abs(
        moment
          .utc(updated_at, "YYYY-MM-DD HH:mm:ss")
          .diff(moment.now(), "milliseconds", true),
      ) / 86400000;

    return diffDay;
  };

  return (
    <>
      <SeoTags
        seoTitle="FindIssues | Active Repos"
        seoDescription="FindIssues lets you find most recently created issues on GitHub that are not assigned to anyone according to your development language"
        seoUrl="https://www.findissues.me"
      />

      <div
        className={`${styles.active_repo} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}
        ref={wrapperRef}
      >
        <p
          className={`w-[250px] mb-4 font-semibold text-[16px] lg:text-[18px] text-${theme}_main_primary`}
          id="activeReposContainer"
        >
          <span className="inline-block italic">Active Repos List</span> 👇
        </p>
        {/* {
                    repoDetails?.map((repo,index) => (
                        <RepoCard key={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} repo={repo}  index={index} />
                    ))
                } */}
        {repoDetails?.map((repo, index) => {
          if (getDayDiff(repo.updated_at) <= 3) {
            return (
              <RepoCard
                key={index}
                setActiveIndex={setActiveIndex}
                activeIndex={activeIndex}
                repo={repo}
                index={index}
              />
            );
          }
        })}

        {showScrollTopButton && (
          <div className="w-full flex justify-end items-center">
            <button
              onClick={scrollToTop}
              className="fixed bottom-5 w-10 backdrop-blur  h-10 rounded-full border-2 border-main_yellow flex justify-center items-center text-main_primary cursor-pointer"
            >
              <BsChevronUp style={{ strokeWidth: "5px" }} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export async function getStaticProps() {
  let repo_result = await loadActiveRepoDetails(repos_list);

  return {
    props: {
      repoDetails: await Promise.all(repo_result),
    },
    revalidate: 600,
  };
}
