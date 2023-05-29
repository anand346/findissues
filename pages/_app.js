import '@/styles/globals.css'
import Script from 'next/script'
import GeneralLayout from '@/components/GeneralLayout'
export default function App({ Component, pageProps }) {
  return (
    <>
      <GeneralLayout>
        <Component {...pageProps} />
      </GeneralLayout>
      
      <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" /> 
    </>
  )
}
