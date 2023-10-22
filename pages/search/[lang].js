import IssuesCard from "@/components/IssuesCard";

import { SkeletonCard } from "@/components/SkeletonCard";

import { priority_langs } from "@/helper/priority_langs";
import { tags } from "@/helper/tags";
import styles from "@/styles/LandingMain.module.css";
import Image from "next/image";

import { useRouter } from "next/router";
import { BsArrowRight } from "react-icons/bs";
import error_404 from "../../public/404.svg";
import Link from "next/link";

import { langs } from "@/helper/Languages";
import SeoTags from "@/components/SeoTags";
import moment from "moment";
import { useEffect, useRef, useState } from "react";

export default function Search({ allIssues, lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState('Best Match');
  const [issues, setIssues] = useState(allIssues);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown =()=>{
    setIsOpen(false);
  };

  useEffect(()=>{
    setIssues(allIssues);
  }, [allIssues]);
  
  useEffect(()=>{
    function handleClickOutside(event){
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        closeDropdown();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return ()=>{
      document.removeEventListener("mousedown",handleClickOutside);
    };
  }, []);

  const sortIssues = (option) => {
    const sortingFunctions = {
      'Best Match': (a, b) => 0,
      'Most Stars': (a, b) => b.repo_stars - a.repo_stars,
      'Least Stars': (a, b) => a.repo_stars - b.repo_stars,
      'Most Forks': (a, b) => b.repo_forks - a.repo_forks,
      'Least Forks': (a, b) => a.repo_forks - b.repo_forks,
    };

    const sorted = [...allIssues].sort(sortingFunctions[option]);
    setIssues(sorted); // Update the state variable with the sorted array
    setSortOption(option);
    closeDropdown();
  };


  const router = useRouter();

  if (router.isFallback) {
    return (
      <div
        className={`${styles.landing_main} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}
      >
        <p className="w-[250px] mb-4 font-semibold text-[16px] lg:text-[18px] text-main_primary">
          <span className="inline-block italic">All Unassigned Issues</span> 👇
        </p>
        <SkeletonCard />
      </div>
    );
  }

  return (
    <>
      <div
        className={`${styles.landing_main} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}
      >
        {issues.length ? (
          <>
            <SeoTags
              seoTitle={`FindIssues | Find Most Recent and Unassigned ${lang} Issues!`}
              seoDescription={`FindIssues lets you find most recently created issues on GitHub that are not assigned to anyone according to ${lang} programming language`}
              seoUrl={`https://www.findissues.me/search/${lang}`}
            />
            <div className="w-[100%] sm:w-[95%] flex justify-between items-center">
              <p className="w-[200px] mb-4 font-semibold text-[16px] lg:text-[18px] text-main_primary">
                <span className="inline-block italic">
                  All Unassigned Issues
                </span>{" "}
                👇
              </p>
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="py-1 px-2 mb-4 border-2 border-main_primary rounded-[5px] text-[12px] lg:text-[14px] hover:bg-main_secondary "
                  id="options-menu"
                  aria-haspopup="listbox"
                  aria-expanded="true"
                >
                  Sort by: {sortOption}
                </button>

                {isOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 bg-main_secondary"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <div className="py-1" role="none">
                    {['Best Match', 'Most Stars', 'Least Stars', 'Most Forks', 'Least Forks'].map((option) => (
                        <a
                          key={option}
                          onClick={() => sortIssues(option)}
                          href="#"
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                          role="menuitem"
                          tabIndex="-1"
                        >
                          {option}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {issues?.map((issue) => {
  return <IssuesCard key={issue.issueId} issue={issue} />;
})}
          </>
        ) : (
          <>
            <SeoTags
              seoTitle={`FindIssues - Page Not Found`}
              seoDescription={`Page Not Found`}
              seoUrl={`https://www.findissues.me`}
            />
            <div className="w-fit mx-auto">
              <p className="w-full mb-4 font-semibold text-[16px] lg:text-4xl text-main_primary text-center">
                Page Not Found
              </p>
              <Image
                src={error_404}
                alt="error 404"
                className="w-3/5 mx-auto mt-8"
              />
              <Link
                href={"/"}
                className="w-fit bg-transparent hover:bg-white rounded-full italic text-main_primary px-4 py-1 font-semibold flex items-center gap-2 text-sm mx-auto mt-8 border-y-4 "
              >
                Back to Home <BsArrowRight />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}

async function loadRepo(issueItems) {
  var repoObj = {};
  for (const issue of issueItems) {
    const repores = await fetch(issue.repository_url, {
      headers: {
        Authorization: "token " + process.env.NEXT_PUBLIC_TOKEN_SECOND,
        Accept: "application/vnd.github.v3+json",
      },
    });
    const repojson = await repores.json();

    repoObj[issue.id] = {
      full_name: repojson.full_name,
      stargazers_count: repojson.stargazers_count,
      forks_count: repojson.forks_count,
    };
  }

  return repoObj;
}

async function loadIssues(url, query_lang) {
  const issues_res = await fetch(url, {
    headers: {
      Authorization: "token " + process.env.NEXT_PUBLIC_TOKEN_FIRST,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const issues_json = await issues_res.json();
  const issueItems = issues_json.items;

  var allIssues = [];

  var repo_res = await loadRepo(issueItems);
  var mask = "";
  if (url.includes("label")) {
    mask = "tag";
  } else {
    mask = "language";
  }
  issueItems.forEach((issue) => {
    var lang = query_lang;

    var issueObj = {
      issueId: issue.id,
      issueNumber: issue.number,
      issueUrl: issue.html_url,
      issueTitle: issue.title,
      repoTitle: repo_res[issue.id].full_name,
      createdAt: issue.created_at,
      repo_forks: repo_res[issue.id].forks_count,
      repo_stars: repo_res[issue.id].stargazers_count,

      [mask]: query_lang,
    };

    allIssues.push(issueObj);
  });

  // setIssues(allIssues);
  return allIssues;
}
export async function getStaticPaths() {
  const paths = priority_langs.map((lang) => ({
    params: { lang: lang.query },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  let url = "";
  tags.forEach((tag) => {
    if (tag.query.includes(params.lang)) {
      url = `https://api.github.com/search/issues?q=label:${params.lang}+is:issue+is:open+no:assignee+created:>=2023-05-20&sort:created`;
      return;
    }
  });

  if (url.length == 0) {
    langs.forEach((lang) => {
      if (lang.query.includes(params.lang)) {
        url = `https://api.github.com/search/issues?q=language:${params.lang}+is:issue+is:open+no:assignee+created:>=2023-05-20&sort:created`;
        return;
      }
    });
  }

  let lang_issues = "";

  if (url.length > 0) {
    lang_issues = await loadIssues(url, params.lang);
  }

  return {
    props: {
      allIssues: lang_issues,
      lang: params.lang,
    },
    revalidate: 600,
  };
}
