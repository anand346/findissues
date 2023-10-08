import React from "react";
import styles from "@/styles/LeftSidebar.module.css";
import { langs } from "@/helper/Languages";
import { tags } from "@/helper/tags";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LeftSidebar() {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.left_sidebar} overflow-auto hidden md:block  left_sidebar  h-max-screen md:p-8 p-3 w-[100%] md:w-[23%] md:border-r-2 border-main_secondary h-full `}
      >
        <div className="left_sidebar_content flex flex-col justify-start items-start">
          <div className="basic_search w-full flex flex-col items-start justify-start md:mb-5">
            <p className="basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px]">
              Basic Search
            </p>
            <div
              className={` basic_search_content w-full flex items-start justify-start flex-wrap space-y-3`}
            >
              {langs.map((lang) => {
                return (
                  <Link
                    href={`/search/${lang.query}`}
                    key={lang.query}
                    className={`first:mt-3 cursor-pointer`}
                  >
                    <div
                      className={`${
                        lang.query === router.query.lang
                          ? "bg-main_secondary"
                          : ""
                      } cursor-pointer mr-2 lang_name px-3 py-1 text-center border-main_primary border-[2px] rounded-[20px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105`}
                    >
                      {lang.lang_name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="advance_search w-full  flex flex-col items-start justify-start">
            <div className="advance_search_title mb-4 flex w-full justify-start items-center">
              <p className="advance_search_title text-main_primary font-semibold italic text-[18px] mr-3">
                Tags
              </p>
            </div>

            <div
              className={` advance_search_content mb-4 w-full flex items-start justify-start flex-wrap space-y-3`}
            >
              {tags.map((tag) => {
                return (
                  <Link
                    href={`/search/${tag.query}`}
                    key={tag.query}
                    className={`first:mt-3 cursor-pointer`}
                  >
                    <div
                      className={` ${
                        tag.query === router?.query?.lang
                          ? "bg-main_secondary"
                          : ""
                      } cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[20px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105`}
                    >
                      {tag.tag_name}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
