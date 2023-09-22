import {useRouter} from "next/router";
import { useState , useEffect } from "react";
import styles from "@/styles/LandingMain.module.css";
import IssuesCard from "@/components/IssuesCard";
import moment from "moment/moment";
import { SkeletonCard } from "@/components/SkeletonCard";
import { priority_langs } from "@/helper/priority_langs";
import { langs } from "@/helper/Languages";

export default function Search({allIssues}){

    
    const router = useRouter();
    
    if(router.isFallback){
        return (
            <div className = {`${styles.landing_main} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
                <p className = "w-[250px] mb-4 font-semibold text-[16px] lg:text-[18px] text-main_primary"><span className="inline-block italic">All Unassigned Issues</span> 👇</p>
                <SkeletonCard />
            </div>
        )
    }

    return (
        <>
            <div className = {`${styles.landing_main} p-3 md:p-8 issues_result overflow-auto w-[100%] md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
                {
                    allIssues.length ? <>
                        <p className = "w-[250px] mb-4 font-semibold text-[16px] lg:text-[18px] text-main_primary"><span className="inline-block italic">All Unassigned Issues</span> 👇</p>
                {
                    allIssues?.map(issue => {
                       return (
                            <IssuesCard key={issue.issueId} issue={issue} />
                       ) 
                    })
                }
                    </> : <>
                    <p className = "w-full mb-4 font-semibold text-[16px] lg:text-2xl text-main_primary text-center">Invalid search query :(</p>
                    </>
                }
            </div>
        </>
    )
}

async function loadRepo(issueItems){

    var repoObj = {};
    for(const issue of issueItems){
        const repores = await fetch(issue.repository_url,{
            headers: {
                'Authorization' : "token "+process.env.NEXT_PUBLIC_ACCESS_TOKEN,
                'Accept' : 'application/vnd.github.v3+json'
            }
        });
        const repojson = await repores.json();

        repoObj[issue.id] = {
            full_name : repojson.full_name,
            stargazers_count : repojson.stargazers_count,
            forks_count : repojson.forks_count,
        }
    }

    
    return repoObj;
}

function getTimeFromNow(created_at){
    var timestamp = created_at.split('T');
    var date = timestamp[0];
    var time = timestamp[1].split('Z')[0];
    var finalTime = date+" "+time;

    var finalTimeFromNow = moment.utc(finalTime, 'YYYY-MM-DD HH:mm:ss').fromNow();
    return finalTimeFromNow;

}

async function loadIssues(url,query_lang){

    var allIssues = [];
    const matching_langs = langs.filter(lang => lang.query === query_lang)

    if(matching_langs.length > 0)
    {
        const issues_res = await fetch(url,{
            headers: {
                'Authorization' : "token "+process.env.NEXT_PUBLIC_ACCESS_TOKEN,
                'Accept' : 'application/vnd.github.v3+json'
            }
        });

        const issues_json = await issues_res.json();
        const issueItems = issues_json.items;

        var repo_res = await loadRepo(issueItems);

        issueItems.forEach(issue => {
            
        
            var finalTimeFromNow = getTimeFromNow(issue.created_at);
            var lang = query_lang;

            var issueObj = {
                issueId : issue.id,
                issueNumber : issue.number,
                issueUrl : issue.html_url,
                issueTitle : issue.title,
                repoTitle : repo_res[issue.id].full_name,
                timeFromNow : finalTimeFromNow,
                repo_forks : repo_res[issue.id].forks_count,
                repo_stars : repo_res[issue.id].stargazers_count,
                language : query_lang
            }

            allIssues.push(issueObj);
            
        });
    }

    // setIssues(allIssues);
    return allIssues;
    
    
}
export async function getStaticPaths() {
    const paths = priority_langs.map((lang) => ({
      params: { lang : lang.query }
    }))
  
    return { paths, fallback: true }
  }


export async function getStaticProps({params}){
    let url = `https://api.github.com/search/issues?q=language:${params.lang}+is:issue+is:open+no:assignee+created:>=2023-05-20&sort:created`;

    let lang_issues = await loadIssues(url,params.lang);

    return {
        props:{
            allIssues: lang_issues,
        },
        revalidate: 60
    }

}
  
