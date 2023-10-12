import SeoTags from "@/components/SeoTags"
import styles from "@/styles/ActiveRepo.module.css"
import RepoCard from "@/components/RepoCard"
import { repos } from "@/helper/repo";
import { useState } from "react";
import { repos_list } from '@/_data/repos';

export default function ActiveRepo({repoDetails}){

    const [activeIndex, setActiveIndex] = useState(-1);

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
                {
                    repoDetails?.map((repo,index) => (
                        <RepoCard key={index} setActiveIndex={setActiveIndex} activeIndex={activeIndex} repo={repo}  index={index} />
                    ))
                }
                
            </div>

        </>
    )
}


export async function getStaticProps(){

    let repo_result = [];

    repo_result = repos_list.map(async repo_url => {
        const repo_name = repo_url.split("/")[3]+"/"+repo_url.split("/")[4];
        const repo_endpoint = 'https://api.github.com/repos/'+repo_name;

        const response = await fetch(repo_endpoint,{
            headers: {
              Authorization: "token " + process.env.NEXT_PUBLIC_TOKEN_FIRST,
              Accept: "application/vnd.github.v3+json",
            },
        });
        const result = await response.json();
        const repo_details = {
                full_name: result.full_name,
                updated_at: result.updated_at,
                stars: result.stargazers_count,
                forks: result.forks_count,
                language: result.language,
                open_issues: result.open_issues_count,
                issue_url: repo_endpoint+'/issues'
        }

        return repo_details;
    })

    return {
        props: {
            repoDetails: await Promise.all(repo_result)
        },
        revalidate: 600
    }
}
