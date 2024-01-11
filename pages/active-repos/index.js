import SeoTags from "@/components/SeoTags"
import styles from "@/styles/ActiveRepo.module.css"
import RepoCard from "@/components/RepoCard"
import { repos } from "@/helper/repo";
import { useState } from "react";
import { repos_list } from '@/_data/repos';
import moment from "moment/moment";
import { loadRepoDetails } from "@/pages/api/getRepo";
// import 

export default function ActiveRepo({ repoDetails }) {

    const [activeIndex, setActiveIndex] = useState(-1);


    const getDayDiff = (updated_at) => {
        let diffDay = Math.abs(
            moment
                .utc(updated_at, "YYYY-MM-DD HH:mm:ss")
                .diff(moment.now(), "milliseconds", true),
        ) / 86400000;

        return diffDay;
    }


    return (
        <>
            <SeoTags
                seoTitle="FindIssues | Active Repos"
                seoDescription="FindIssues lets you find most recently created issues on GitHub that are not assigned to anyone according to your development language"
                seoUrl="https://www.findissues.me"
            />

            <div className={`${styles.active_repo} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`} >
                <p className="w-[250px] mb-4 font-semibold text-[16px] lg:text-[18px] text-main_primary">
                    <span className="inline-block italic">Active Repos List</span>{" "}
                    👇
                </p>
                {/* {
                    repoDetails?.map((repo,index) => (
                        <RepoCard key={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} repo={repo}  index={index} />
                    ))
                } */}
                {
                    repoDetails?.map((repo, index) => {
                        if (getDayDiff(repo.updated_at) <= 3) {
                            return <RepoCard key={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} repo={repo} index={index} />
                        }
                    })
                }

            </div>

        </>
    )
}


export async function getStaticProps() {

    let repo_result = [];

    repo_result = await loadRepoDetails(repos_list);

    return {
        props: {
            repoDetails: await Promise.all(repo_result)
        },
        revalidate: 600
    }
}
