import {useRouter} from "next/router";
import { useState , useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
import IssuesCard from "@/components/IssuesCard";
import moment from "moment/moment";

export default function Search(){

    
    const [issues,setIssues] = useState([]);
    const [render,setRender] = useState(true);
    const router = useRouter();
    const language = router.query.lang;

    // async function fetchRepo(url){
    //     const res = await fetch(`https://api.github.com/repos/`);
    //     const repo = await res.json();
    //     return repo;
    // }

    async function loadRepo(url){
        const headers = { 'Authorization': 'Bearer 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' };
        const res = await fetch(url,{headers});
        const repo_res = await res.json();
        return repo_res;
    }

    function getTimeFromNow(created_at){
        var timestamp = created_at.split('T');
        var date = timestamp[0];
        var time = timestamp[1].split('Z')[0];
        var finalTime = date+" "+time;
        var finalTimeFromNow = moment(finalTime, 'YYYY-MM-DD HH:mm:ss').fromNow();
        return finalTimeFromNow;

    }

    async function loadIssues(){
        const headers = { 'Authorization': 'Bearer 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' };
        const res = await fetch(`https://api.github.com/search/issues?q=language:${language}+is:issue+is:open+no:assignee+created:>=2023-05-20+sort:created`,{headers});
        const res_issues = await res.json();
        const issueItems = res_issues.items;
        var allIssues = [];
        issueItems.forEach(async issue => {
            
           
            var finalTimeFromNow = getTimeFromNow(issue.created_at);
            var repo_res = await loadRepo(issue.repository_url);

            var issueObj = {
                issueId : issue.id,
                issueNumber : issue.number,
                issueTitle : issue.title,
                repoTitle : repo_res.full_name,
                timeFromNow : finalTimeFromNow,
                repo_forks : repo_res.forks_count,
                repo_stars : repo_res.stargazers_count,
                language : language
            }

            allIssues.push(issueObj);
        });

        setIssues(allIssues);
        console.log(issues);
        
        // loadRepo('https://api.github.com/repos/SzymCode/ContactBook');

        // var timestamp = obj.created_at.split('T');
        // var date = timestamp[0];
        // var time = timestamp[1].split('Z')[0];
        // var finalTime = date+" "+time;
        // var finalTimeFromNow = moment(finalTime, 'YYYY-MM-DD HH:mm:ss').fromNow();
        
        // const repoTitleArray = obj.repository_url.split('/');
        // const finalRepoTitle = repoTitleArray[4]+' / '+repoTitleArray[5];

        // console.log("issue title",obj.title);
        // console.log("repo title",finalRepoTitle);
        // console.log("repo url",obj.repository_url);
        // console.log("issue created",finalTimeFromNow);
        // console.log("repo stars",repo.stargazers_count);
        // console.log("repo forks",repo.forks_count);
        // console.log("language","php");
    }
    

    useEffect(() => {
        console.log("rendered");
        loadIssues();
    },[])

    return (
        <>
            <div className = {`${styles.landing_main} p-8 issues_result overflow-auto w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
                <p className = "w-[200px] mb-4 italic font-semibold text-[18px] text-main_primary">Issues Result</p>
                {
                    issues.map(issue => {
                       return (
                            <IssuesCard key={issue.issueId} issue={issue} />
                       ) 
                    })
                }
            </div>
        </>
    )
}
