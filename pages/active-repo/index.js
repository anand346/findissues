import SeoTags from "@/components/SeoTags"
import styles from "@/styles/ActiveRepo.module.css"
import RepoCard from "@/components/RepoCard"
import { repo } from "@/helper/repo";

export default function ActiveRepo(){

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
                <RepoCard repo={repo} />
            </div>

        </>
    )
}