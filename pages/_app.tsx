import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header } from "../layouts/header";
import { Footer } from "../layouts/footer";
import { SessionProvider, useSession } from "next-auth/react";
import { Layout } from "../layouts/layout";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

type SessionProps = {
  session: any;
};

type NotePageProps = SessionProps & {};

function AuthGuard(props: any) {
  const { data: session } = useSession();
  const { router, children } = props;

  useEffect(() => {
    console.log("Path ", (router as NextRouter).pathname);
    if (
      !["/", "/auth/login"].includes((router as NextRouter).pathname) &&
      !session
    ) {
      (router as NextRouter).replace("/");
    }
  }, [router?.pathname, session]);

  return <>{children}</>;
}

function MyApp(props: AppProps<NotePageProps>) {
  const {
    Component,
    pageProps: { session, ...pageProps },
  } = props;

  return (
    <SessionProvider session={session}>
      <AuthGuard {...props}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthGuard>
    </SessionProvider>
  );
}

export default MyApp;
