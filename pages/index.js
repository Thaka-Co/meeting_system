import Head from "next/head";
import styles from "../styles/Home.module.css";
import en from "../locales/en";
import ar from "../locales/ar";
import { useRouter } from "next/router";
import Header from "../components/navBar/landingHeader";
import {useSession} from 'next-auth/react'
export default function Home() {
  const { locale, locales, asPath } = useRouter();
  
  const t = locale === 0 ? en : ar;

  const {data:session} = useSession()
  console.log(session)

  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Hello World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <center>Hello World</center>
        <div className={styles.navbar}>
          {/* {locales.map((l, i) => {
            return (
              <span key={i} className={l === locale ? styles.selected : ""}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </span>
            );
          })} */}
        </div>
      </div>
    </>
  );
}
