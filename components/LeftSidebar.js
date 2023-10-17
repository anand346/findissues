import React from "react";
import styles from "@/styles/LeftSidebar.module.css";
import { langs } from "@/helper/Languages";
import { tags } from "@/helper/tags";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LeftSidebar() {
  const router = useRouter();

  function isCurrentPath(path) {
    return router.pathname === path;
  }

  return (
    <>
      <div
        className={`${styles.left_sidebar} overflow-auto hidden md:block  left_sidebar  h-max-screen md:p-8 p-3 w-[100%] md:w-[23%] md:border-r-2 border-main_secondary h-full `}
      >
        <div className="left_sidebar_content flex flex-col justify-start items-start">
          <div className="basic_search w-full flex flex-col items-start justify-start mb-4">
            <p className="basic_search_title w-full text-main_yellow font-semibold italic text-[16px] lg:text-[18px]">
              Basic Search
            </p>
            <div
              className={` basic_search_content w-full flex items-start justify-start flex-wrap  space-y-3`}
            >
              {langs.map((lang) => {
                return (
                  <Link
                    href={`/search/${lang.query}`}
                    key={lang.query}
                    className={`first:mt-3 cursor-pointer grow`}
                  >
                    <div
                      className={`${
                        lang.query === router.query.lang
                          ? "bg-main_secondary"
                          : ""
                      } cursor-pointer mr-2 lang_name px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300`}
                    >
                      {lang.lang_name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="advance_search w-full flex flex-col items-start justify-start mb-4">
            <p className="advance_search_title flex w-full justify-start items-center  text-main_yellow font-semibold italic text-[18px]">
              Tags
            </p>
            <div
              className={` advance_search_content w-full flex items-start justify-start flex-wrap space-y-3`}
            >
              {tags.map((tag) => {
                return (
                  <Link
                    href={`/search/${tag.query}`}
                    key={tag.query}
                    className={`first:mt-3 cursor-pointer grow`}
                  >
                    <div
                      className={` ${
                        tag.query === router?.query?.lang
                          ? "bg-main_secondary"
                          : ""
                      } cursor-pointer mr-2 lang_name truncate px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300`}
                    >
                      {tag.tag_name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={"w-full flex items-start justify-start flex-wrap "}>
            <p className="flex w-full justify-start items-center  text-main_yellow font-semibold italic text-[18px] mr-3">
              Active Repo
            </p>
            <div
              className={
                " w-full flex items-start justify-start flex-wrap space-y-3"
              }
            >
              <Link
                href={"https://github.com/anand346/findissues#add-active-repo-"}
                target="_blank"
                className={
                  "cursor-pointer mt-3 flex items-center justify-center rounded-[5px] w-[110px] h-10 mr-2 px-3 py-1 text-center border-main_primary border-[2px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300 grow"
                }
              >
                Add Repo?
              </Link>
              <Link
                href={"/active-repos"}
                className={`${
                  isCurrentPath("/active-repos")
                    ? "bg-main_secondary"
                    : ""
                } 
                  cursor-pointer flex items-center justify-center rounded-[5px] w-[110px] h-10 mr-2 px-3 py-1 text-center border-main_primary border-[2px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300 grow`}
              >
                Active Repos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
