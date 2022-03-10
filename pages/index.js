import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/navBar/landingHeader";
export default function Home({ rooms }) {
  console.log(rooms);
  console.log("index", rooms);
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>Hawkama</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/rooms/getRoom");
  const rooms = await res.json();
  return {
    props: {
      rooms,
    },
  };
};
