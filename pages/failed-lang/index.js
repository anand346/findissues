import IssuesCard from "@/components/IssuesCard";

// This page is used when getStaticProps or getStaticPath failed to handle the errors founds in fetching issues.
// It displays a message indicating redirect to home or github dashboard and suggests trying again.
// Default issue object below

 var issueObj = {
      issueId: 0,
      issueNumber: 0,
      issueUrl: '/',
      issueTitle: 'Something went wrong in getting your relevant programming language. please try again',
      repoTitle: 'dashboard',
      createdAt: 'Not_working4',
      repo_forks: 0,
      repo_stars: 0,
      language: 'Not_working5',
      repo_title: '/'
 }

export default function Failed_lang() {
  return (
    <IssuesCard issue={issueObj} />
  );
}