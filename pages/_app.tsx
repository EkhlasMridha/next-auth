import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { SessionProvider, useSession } from "next-auth/react";
import { Layout } from "../layouts/layout";

type SessionProps = {
  session: any;
};

type NotePageProps = SessionProps & {};

function MyApp(props: AppProps<NotePageProps>) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;
  console.log(props);
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
