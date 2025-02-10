import Head from "next/head";
import Image from "next/image";
import { useTheme } from 'next-themes';
import Link from "next/link";
import styles from "@/styles/LandingMain.module.css";
import SeoTags from "@/components/SeoTags";

export default function Home() {
  const { resolvedTheme } = useTheme() || "dark";
  const theme = resolvedTheme || "dark";

  return (
    <>
      <SeoTags
        seoTitle="FindIssues | Find Most Recent and Unassigned Issues Here!"
        seoDescription="FindIssues lets you find most recently created issues on GitHub that are not assigned to anyone according to your development language"
        seoUrl="https://www.findissues.me"
      />

      <div
        className={`${styles.landing_main} overflow-auto w-[100%] pt-[40px] md:pt-0 md:w-[54%] landing_main h-full flex flex-col items-start justify-start`}
      >
        <div>
          <Image
            unoptimized={true}
            className="w-[150px] md:w-[200px] mt-[20px] md:mt-[70px] p-3 md:p-0 md:ml-[90px] mb-[10px] md:mb-[30px] "
            src="/images/logo.png"
            width={100}
            height={100}
            alt="findissues logo"
          />
          <h1 className={`pl-3 md:p-0 md:ml-[90px] italic font-semibold text-[24px] md:text-[36px] text-${theme}_main_primary`}>
            New to Open-Source ?
          </h1>
          <p className={`pl-3 pr-3 md:p-0 md:ml-[90px] md:mr-[90px] text-${theme}_main_yellow text-[18px] md:text-[22px] mb-[30px] text-justify `}>
            Find Most Recent and Unassigned Issues Here!
          </p>
          <p className={`text-[14px] md:text-[18px] pl-3 pr-3 md:p-0 md:ml-[90px] md:mr-[90px] text-${theme}_main_primary leading-loose mb-[50px] text-justify`}>
            Find issues lets you find <span className="font-bold">most recently created issues</span> on
            GitHub that are <span className="font-bold">not assigned</span> to anyone according to your
            development language with its advance search technique.
          </p>
        </div>

        <p className={`mt-auto p-3 md:p-0 md:ml-[90px] mb-[20px] text-${theme}_main_primary italic font-semibold text-[12px] md:text-[18px]`}>
          <i className="fa fa-copyright" aria-hidden="true"></i> FindIssues{" "}
          {new Date().getFullYear()}<br/> Developed With{" "}
          <i className={`fa fa-heart text-${theme}_main_yellow`} aria-hidden="true"></i> By{" "}
          <Link
            href="https://github.com/anand346"
            target="_blank"
            className="underline-offset-2 underline"
          >
            Anand Raj
          </Link>
          {" "}and{" "}
          <Link
            href="https://github.com/anand346/findissues/graphs/contributors"
            target="_blank"
            className="underline-offset-2 underline"
          >
          Open Source Community
          </Link>
        </p>
      </div>
    </>
  );
}
