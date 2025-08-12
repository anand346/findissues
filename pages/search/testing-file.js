const errorActive = [];

async function loadRepo(issueItems) {
  try {
      var repoObj = {};
      for (const issue of issueItems) {
        const repores = await fetch(issue.repository_url, {
          headers: {
            Authorization: "token " + process.env.NEXT_PUBLIC_TOKEN_SECOND,
            Accept: "application/vnd.github.v3+json",
          },
        });
        const repojson = await repores.json();

        repoObj[issue.id] = {
          full_name: repojson.full_name,
          stargazers_count: repojson.stargazers_count,
          forks_count: repojson.forks_count,
        };
      }

      return repoObj;

  } catch (error) {
    console.error("Error fetching Data:", error);
    errorActive.push(true);
    return null; // return null and letting getStaticProps handle the error
  }
}

export async function loadIssues(url, query_lang) {
  try {
    const issues_res = await fetch(url, {
    headers: {
      Authorization: "token " + process.env.NEXT_PUBLIC_TOKEN_FIRST,
      Accept: "application/vnd.github.v3+json",
    },
  });

  const issues_json = await issues_res.json();
  const issueItems = issues_json.items;

  var allIssues = [];

  var repo_res = await loadRepo(issueItems);
  var mask = "";
  if (url.includes("label")) {
    mask = "tag";
  } else {
    mask = "language";
  }
  issueItems.forEach((issue) => {
    var lang = query_lang;

    var issueObj = {
      issueId: issue.id,
      issueNumber: issue.number,
      issueUrl: issue.html_url,
      issueTitle: issue.title,
      repoTitle: repo_res[issue.id].full_name,
      createdAt: issue.created_at,
      repo_forks: repo_res[issue.id].forks_count,
      repo_stars: repo_res[issue.id].stargazers_count,

      [mask]: query_lang,
    };

    if (issueObj.repo_forks > 0 && issueObj.repo_stars > 0) {
      allIssues.push(issueObj);
    }
  });

  // setIssues(allIssues);
  return allIssues;

  } catch (error) {
    console.error("Error Getting Issues:", error);
    errorActive.push(true);
    return null; // return null and letting getStaticProps handle the error
  }

}

export default function TestingError() {
  if(errorActive.length > 0) {
    return true;
  } else {
    return false;
  }
}
