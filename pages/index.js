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
      <Navbar/>
      <Fullbanner/>
      {/* Image */}
      
    </div>
  )
}
