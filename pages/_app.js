import '@/styles/globals.css'
import Script from 'next/script'
import GeneralLayout from '@/components/GeneralLayout'
import { ThemeProvider } from 'next-themes'
export default function App({ Component, pageProps }) {
  return (
    <>
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

      <Script strategy="lazyOnload" id="google_analytics" > 
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" /> 
    </>
  )
}
