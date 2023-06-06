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
      
      
      <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" /> 
    </>
  )
}
