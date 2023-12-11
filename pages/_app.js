import "@/styles/globals.css";
import Script from "next/script";
import GeneralLayout from "@/components/GeneralLayout";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FindIssues - Explore Open Source Projects on GitHub</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.findissues.me" />
        <meta name="title" content="FindIssues" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="FindIssues, Github, Hacktoberfest, Open Source, GithubIssues, libraries, frameworks, applications, websites, Python, C, PHP, 
        Go, Javascript, typescript, HTML, CSS, Java, C++, C#, Rust, Scala, Ruby, Dart, Kotlin, Lua, Swift, Shell, Matlab, Perl, good-first-issues, repo" />
        <meta name="author" content="Anand Raj" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="FindIssues - Explore Open Source Projects on GitHub" />
        <meta property="og:description" content="Explore open source projects on GitHub and find relevant issues based on the labels you choose to contribute to. 
        Discover opportunities for collaboration and learning."/>
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:image:alt" content="FindIssues" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>

      <ThemeProvider defaultTheme="dark">
        <GeneralLayout>
          <Component {...pageProps} />
        </GeneralLayout>
      </ThemeProvider>

      <Script
        id="googleAnalytics"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload" id="google_analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
        `}
      </Script>
    </>
  );
}
