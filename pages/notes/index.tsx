import Head from "next/head";
import { useState } from "react";
import { Note } from "../../Components/note";
import styles from "../../styles/Home.module.css";

interface NoteProps {
  id: number;
  name: string;
  detail: string;
}

const Notes = (props: any) => {
  const [value, setValue] = useState<any>();
  const [noteList, setNote] = useState<NoteProps[]>([
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
  ]);

  const onChangeFormValue = (e: any) => {
    let propName = e.target?.name;
    setValue((pre: any) => {
      let newValue = {
        ...pre,
        [propName]: e.target.value,
      };
      return newValue;
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();

    console.log(value);
    setNote((pre) => {
      let id = pre.length + 1;
      let data: NoteProps = {
        id: id,
        ...value,
      };
      return (pre ?? []).concat(data);
    });
  };

  return (
    <div className={styles.container + "bg-gray-300"}>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Note list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <form onSubmit={onSubmit} className="p-4 border rounded-sm">
          <div className="space-y-5">
            <div className="col-span-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                onChange={onChangeFormValue}
                id="name"
                name="name"
                className="focus:border-sky-600 block outline-none border rounded border-slate-300 pl-2 pr-2 pt-1 pb-1"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="detail"
                className="block text-sm font-medium text-gray-700"
              >
                Detail
              </label>
              <textarea
                onChange={onChangeFormValue}
                id="detail"
                name="detail"
                className="focus:border-sky-600 block outline-none border rounded border-slate-300 pl-2 pr-2 pt-1 pb-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 bg-sky-700 rounded pl-4 pr-4 pt-2 pb-2 text-white active:bg-sky-900 place-items-end"
          >
            Save
          </button>
        </form>
        <div className="flex space-x-8 mt-8">
          <Note noteList={noteList} />
        </div>
      </main>
    </div>
  );
};

export default Notes;
