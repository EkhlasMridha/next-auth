import Link from "next/link";
import { useRouter } from "next/router";

export const Header = (props: any) => {
  const router = useRouter();

  const goToHome = () => {
    router.push("/");
  };
  return (
    <header className="shadow-md flex px-8 h-11 z-20">
      <div className="flex justify-between flex-auto h-100">
        <div
          className="font-bold mt-auto mb-auto cursor-pointer"
          onClick={goToHome}
        >
          Notebook
        </div>
        <div className="flex">
          <Link href={"notes"}>
            <div className="cursor-pointer hover:bg-sky-700 hover:text-white active:bg-sky-900 flex">
              <span className="mt-auto mb-auto px-4">Notes</span>
            </div>
          </Link>
          <div className="cursor-pointer hover:bg-sky-700 hover:text-white active:bg-sky-900 flex">
            <span className="mt-auto mb-auto px-4">SignIn</span>
          </div>
          <div className="cursor-pointer hover:bg-sky-700 active:bg-sky-900 hover:text-white flex">
            <span className="mt-auto mb-auto px-4">SignOut</span>
          </div>
        </div>
      </div>
    </header>
  );
};
