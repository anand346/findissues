export default async function loadActiveRepoDetails(repos_list) {

    let repo_result = repos_list.map(async repo_url => {
        const repo_name = repo_url.split("/")[3] + "/" + repo_url.split("/")[4];
        const repo_endpoint = 'https://api.github.com/repos/' + repo_name;

        const response = await fetch(repo_endpoint, {
            headers: {
                Authorization: "token " + process.env.NEXT_PUBLIC_FETCH_REPO,
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
            issue_url: repo_endpoint + '/issues'
        }

        return repo_details;
    })

    return repo_result;

}