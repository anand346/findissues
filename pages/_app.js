import '@/styles/globals.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" /> 
    </>
  )
}
