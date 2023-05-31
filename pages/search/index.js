import {useRouter} from "next/router";
import { useState , useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
import IssuesCard from "@/components/IssuesCard";
import moment from "moment/moment";
import { repo } from "@/helper/repo";
import { SkeletonCard } from "@/components/SkeletonCard";

export default function Search(){

    
    const [issues,setIssues] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    let skeletonCards = Array(7).fill(0);

    async function loadRepo(issueItems){

        var repoObj = {};
        for(const issue of issueItems){
            const repores = await fetch(issue.repository_url,{
                headers: {
                    'Authorization' : "token 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",
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

    async function loadIssues(){

        setLoading(true);
        const issues_res = await fetch(`https://api.github.com/search/issues?q=language:${router.query.lang != undefined ? router.query.lang : "java"}+is:issue+is:open+no:assignee+created:>=2023-05-20&sort:created`,{
            headers: {
                'Authorization' : "token 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",
                'Accept' : 'application/vnd.github.v3+json'
            }
          });

        const issues_json = await issues_res.json();
        const issueItems = issues_json.items;

        var allIssues = [];

        var repo_res = await loadRepo(issueItems);

        issueItems.forEach(issue => {
            
           
            var finalTimeFromNow = getTimeFromNow(issue.created_at);
            var lang = router.query.lang != undefined ? router.query.lang : "java";

            var issueObj = {
                issueId : issue.id,
                issueNumber : issue.number,
                issueUrl : issue.html_url,
                issueTitle : issue.title,
                repoTitle : repo_res[issue.id].full_name,
                timeFromNow : finalTimeFromNow,
                repo_forks : repo_res[issue.id].forks_count,
                repo_stars : repo_res[issue.id].stargazers_count,
                language : lang
            }

            allIssues.push(issueObj);
            
        });

        setIssues(allIssues);
        
        
    }
    

    useEffect(() => {
        
        loadIssues().then(() => setLoading(false))
        
        
    },[router.query.lang])

    return (
        <>
            <div className = {`${styles.landing_main} p-8 issues_result overflow-auto w-[54%] landing_main h-full flex flex-col items-start justify-start`}>
                <p className = "w-[200px] mb-4 italic font-semibold text-[18px] text-main_primary">Issues Result</p>
                {loading == true ? (

                                
                            <SkeletonCard />
                                

                                ) : (
                    
                            issues.map(issue => {
                                return (
                                    <IssuesCard key={issue.issueId} issue={issue} />
                                ) 
                            })
                        )
                }
                {/* {
                    issues.map(issue => {
                       return (
                            <IssuesCard key={issue.issueId} issue={issue} />
                       ) 
                    })
                } */}
            </div>
        </>
    )
}
