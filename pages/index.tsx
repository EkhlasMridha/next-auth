import type { NextPage } from "next";
import Head from "next/head";
import { Note } from "../Components/note";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container + "bg-gray-300"}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Home page</main>
    </div>
  );
};

export default Home;
