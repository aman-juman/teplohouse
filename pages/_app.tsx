import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.scss";
import {Header} from "../components";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>TeploHouse | Тепло в Вашем доме</title>
        <meta name="description" content="TeploHouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
      <Component {...pageProps} />
    </>
  );
}