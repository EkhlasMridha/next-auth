import Head from "next/head";
import { Note } from "../../Components/note";
import styles from "../../styles/Home.module.css";

const Notes = (props: any) => {
  return (
    <div className={styles.container + "bg-gray-300"}>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Note list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex space-x-8">
          <Note
            noteList={[
              {
                id: 1,
                name: "Note 1",
                detail: "Test note detail 1",
              },
              {
                id: 2,
                name: "Note 2",
                detail: "Test note detail 2",
              },
            ]}
          />
        </div>
      </main>
    </div>
  );
};

export default Notes;
