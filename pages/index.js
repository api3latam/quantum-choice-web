import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Banner from '../components/playbanner'
import LatestActivites  from '../components/latestActivites'
import Fullbanner2 from '../components/howtoplay'
import Fullbanner from '../components/firstbanner'

export default function play() {
  

  return (
    <div >
      <Head>
        <title>QUANTUM CHOICE</title>
        <meta name="description" content="The first on-chain quantum raffle." />
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
      <Fullbanner/>
      <Banner/>
      <Fullbanner2/>
      {/*

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
       */}

    </div>
  )
}
