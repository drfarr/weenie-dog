import { Fragment, ReactElement, ReactNode, useEffect, useMemo } from "react";
import type { NextPage, NextPageContext } from "next";
import type { AppProps } from "next/app";
import { trpc } from "lib/trpc/next";

import "styles/globals.css";
import { getSession, SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Toaster from "components/Toaster";
import Assistant from "components/Assistant";
import Head from "next/head";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  pageProps: {
    initialSession: Session;
  };
};

export function MyApp({
  Component,
  pageProps: { initialSession, ...pageProps },
}: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <div className="root">
      <Head>
        <title>All hail the Weenie Dog!™️</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SessionProvider session={initialSession || undefined}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools />

        <Toaster />
      </SessionProvider>
      <Assistant />
    </div>
  );
}

MyApp.getInitialProps = async (appContext: NextPageContext) => {
  // console.log(appContext);
  const session = await getSession(appContext);
  return {
    pageProps: {
      initialSession: session,
    },
  };
};

// @ts-ignore
export default trpc.withTRPC(MyApp);
