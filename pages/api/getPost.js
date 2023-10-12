import { repos_list } from "@/_data/repos";

export default async function handler(req , res){

    switch(req.method){

        case "GET" : 
            return await loadRepoDetails();
    }
}


async function loadRepoDetails(){

    let repo_result = [];

    repos_list.forEach(async repo_url => {
        const repo_name = repo_url.split("/")[3]+"/"+repo_url.split("/")[4];
        const repo_endpoint = 'https://api.github.com/repos/'+repo_name;

        const response = await fetch(repo_endpoint);
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

        repo_result.push(repo_details);
    })
    return repo_result;
    

}