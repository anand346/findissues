import Head from "next/head";
import React from "react";

const SeoTags = ({ seoTitle, seoDescription, seoUrl }) => {
  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content="/images/og-image.jpg" />
      <meta property="og:image:alt" content="FindIssues" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content="/images/og-image.jpg" />
    </Head>
  );
};

export default SeoTags;
