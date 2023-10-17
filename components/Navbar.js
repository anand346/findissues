import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { langs } from "@/helper/Languages";
import { tags } from "@/helper/tags";
import { useRouter } from "next/router";
import useClickOutside from "@/hooks/useClickOutside";

export default function Navbar() {
  const router = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);

  const navbarRef = useClickOutside(() => setShowSidebar(false))
  
  function isCurrentPath(path) {
    return router.pathname === path;
  }

  return (
    <>
      <div  className={`w-full ${showSidebar ? "sidebar-open" : ""}`} ref={navbarRef}>
        <div className="navbar sm:h-[90px] h-[75px] border-main_secondary border-b-2 w-full flex flex-grow items-center sm:p-8 py-2 px-3 justify-between bg-main_secondary_high shadow-md ">
          <div className="navbar_left logo">
            <Link href="/">
              <Image
                unoptimized={true}
                src="/images/logo.png"
                alt="Muzical Logo"
                height={100}
                width={100}
                className="w-[7rem] sm:w-[8rem] "
              />
            </Link>
          </div>
          <>
            {showSidebar == false ? (
                <div className="navbar_right flex items-center space-x-2 md:hidden relative block ">
                <Link target="_blank" className="flex items-center"  href="https://github.com/anand346/findissues">
                    <i className="fa fa-github text-[26px] text-main_primary md:hover:text-main_yellow duration-300" ></i>
                </Link>

              <button
                onClick={() => setShowSidebar(!showSidebar)}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden  "
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#1b9c85"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="#1b9c85"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
              </div>
            ) : (
              ""
            )}

            <div
              ref={navbarRef}
              className={`top-0 right-0 w-[230px] sm:w-[300px] bg-main_secondary_high border-main_secondary border-[2px] p-3 pt-3 text-main_secondary fixed h-full overflow-y-scroll  z-40 md:hidden ease-in-out duration-300 ${
                showSidebar ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="w-full flex flex-col items-start justify-start md:mb-5">
                <p className="basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px]">
                  Languages
                </p>
                <button
                    className="flex text-xl text-main_primary md:hidden items-center cursor-pointer absolute right-5 top-2 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
                <div
                  className={` basic_search_content mb-4 w-full flex items-start justify-start flex-wrap space-y-3`}
                >
                  {langs.map((lang) => {
                    return (
                      <Link
                        href={`/search/${lang.query}`}
                        onClick={() => setShowSidebar(false)}
                        key={lang.query}
                        className={`first:mt-3 cursor-pointer grow`}
                      >
                        <div
                          className={`${
                            lang.query === router.query.lang
                              ? "bg-main_secondary"
                              : ""
                          } cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300`}
                        >
                          {lang.lang_name}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="advance_search_title  w-full flex flex-col items-start justify-start md:mb-5">
                  <div className="advance_search_title mb-2 md:mb-4 flex w-full justify-start items-center">
                    <p className="advance_search_title text-main_primary font-semibold italic text-[16px] lg:text-[18px] mr-3">
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
                          onClick={() => setShowSidebar(false)}
                          className={`first:mt-3 cursor-pointer grow`}
                        >
                          <div
                            className={`${
                              tag.query === router?.query?.lang
                                ? "bg-main_secondary"
                                : ""
                            } cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300`}
                          >
                            {tag.tag_name}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start md:mb-5">
                  <p className="basic_search_title w-full mb-2 md:mb-4 text-main_primary font-semibold italic text-[16px] lg:text-[18px] ">
                    Active Repos
                  </p>
                  <div
                    className={` active_repos mb-4 w-full flex items-start justify-start flex-wrap space-y-3`}
                  >
                        <Link href={"https://github.com/anand346/findissues#add-active-repo-"} target="_blank"  className={"first:mt-3 cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300 grow"} onClick={() => setShowSidebar(false)} >
                            Add Repo?
                        </Link>        
                        <Link href={"/active-repos"} className={`${
                            isCurrentPath("/active-repos")
                                ? "bg-main_secondary"
                                : ""
                            } cursor-pointer mr-2 lang_name  px-3 py-1 text-center border-main_primary border-[2px] rounded-[5px] italic font-semibold text-main_primary text-[12px] lg:text-[14px] transition-all transform md:hover:scale-105 md:hover:border-dashed md:hover:text-main_yellow md:hover:border-main_yellow duration-300 grow`} onClick={() => setShowSidebar(false)} >
                            Active Repos
                        </Link> 
                    </div>
                </div>
              </div>
            </div>
          </>

          <div className="navbar_right flex space-x-5 hidden md:block ">
            <Link target="_blank" href="https://github.com/anand346/findissues">
              <i className="fa fa-github text-3xl text-main_primary md:hover:text-main_yellow duration-300" ></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Sidebar overlay */}
      {showSidebar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-10"></div>
      )}
    </>
    // Improved with ❤️ by Bhalerao-2002
  );
}
