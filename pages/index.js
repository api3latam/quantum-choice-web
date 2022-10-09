import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/cs_nav'
import Fullbanner from '../components/csoon'
import LatestActivites  from '../components/latestActivites'


export default function Home() {
  

  return (
    <div >
      <Head>
        <title>QUANTUM CHOICE</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Google Analytics */}
       <script async src="https://www.googletagmanager.com/gtag/js?id=G-G2SLZRDG2P"></script>
          <script dangerouslySetInnerHTML={
              { __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments)}
                  gtag("js", new Date());
                  gtag("config", "G-G2SLZRDG2P");
              `}
          }></script>
      <Navbar/>
      <Fullbanner/>
      
    </div>
  )
}
