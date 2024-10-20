import Head from "next/head";

const SeoTags = ({ seoTitle, seoDescription, seoUrl }) => {
  return (
    <Head>
        <title>{seoTitle}</title>
        <meta name="title" content="FindIssues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="FindIssues, Github, Hacktoberfest, Open Source, GithubIssues, libraries, frameworks, applications, websites, beginner friendly, good-first-issues, repo" />
        <meta name="author" content="Anand Raj" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={seoUrl} />
        <meta name="theme-color" content="#232334" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:alt" content="FindIssues" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content="/images/og-image.jpg" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
    </Head>
  );
};

export default SeoTags;
