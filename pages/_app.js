import '@/styles/globals.css'
import Script from 'next/script'
import GeneralLayout from '@/components/GeneralLayout'
import PageContext from '@/context/pageContext'
import { useState } from 'react'
export default function App({ Component, pageProps }) {

  const [page,setPage] = useState(1);
  return (
    <>
      <GeneralLayout>
        <PageContext.Provider value = {{
          page : page,
          setPage : setPage
        }}>
          <Component {...pageProps} />
        </PageContext.Provider>
        
      </GeneralLayout>
      
      <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" /> 
    </>
  )
}
