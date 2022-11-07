import { signIn } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, FormEvent, ChangeEvent } from "react";

type FormValueType = {
  username: string;
  password: string;
};

const LogIn = (props: any) => {
  const [value, setValue] = useState<FormValueType>();
  const router = useRouter();

  const onChangeFormValue = (e: ChangeEvent<HTMLInputElement>) => {
    let propName = e.target?.name;

    setValue((pre: any) => {
      let newValue = {
        ...pre,
        [propName]: e.target.value,
      };
      return newValue;
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Payload ", value);
    const config = {
      redirect: false,
      ...value,
    };
    const result = await signIn("credentials", { ...config, callbackUrl: "/" });
    if (result?.status === 200 && result?.ok) {
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>LogIn</title>
        <meta name="description" content="Note book login" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 flex flex-col p-4 border rounded-md ml-auto mr-auto"
        method="POST"
      >
        <div className="flex flex-col space-y-5">
          <div className="col-span-6">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              onChange={onChangeFormValue}
              id="username"
              name="username"
              className="focus:border-sky-600 block outline-none border rounded border-slate-300 pl-2 pr-2 pt-1 pb-1"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={onChangeFormValue}
              id="password"
              name="password"
              type={"password"}
              className="focus:border-sky-600 block outline-none border rounded border-slate-300 pl-2 pr-2 pt-1 pb-1"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button type="submit" className="app-btn place-items-end">
            LogIn
          </button>
        </div>
      </form>
    </>
  );
};

export default LogIn;
