import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { Layout } from "../layouts/layout";
import { NextRouter } from "next/router";
import { useEffect } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

type SessionProps = {
  session: any;
};

type NotePageProps = SessionProps & {};

function AuthGuard(props: any) {
  const { data: session } = useSession();
  const { router, children } = props;

  useEffect(() => {
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
  const { Component, pageProps } = props;

  const queryClient = new QueryClient();

  return (
    <SessionProvider>
      <AuthGuard {...props}>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </AuthGuard>
    </SessionProvider>
  );
}

export default MyApp;
