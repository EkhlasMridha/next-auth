import Link from "next/link";

type NoteType = {
  id: number;
  name: string;
  detail: string;
};

interface NoteProps {
  noteList: NoteType[];
}

export const Note = (props: NoteProps) => {
  const { noteList, ...restProps } = props;

  return (
    <>
      {noteList?.map((item: NoteType, index) => (
        <Link href={"/notes/" + item?.id.toString()} key={index}>
          <div className="bg-white rounded shadow-md flex flex-col space-y-1 p-4 w-40 h-40 cursor-pointer">
            <h4 className="font-bold">{item?.name}</h4>
            <div className="text-sm text-gray-400">{item?.detail}</div>
          </div>
        </Link>
      ))}
    </>
  );
};
