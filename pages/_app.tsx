import React from "react";
import Head from "next/head";
import { AppProps } from "next/dist/shared/lib/router/router";
import "../styles/globals.scss";
import "../styles/burger.css";
import {Header} from "../layout/Header/Header";
import Menu from "../layout/Header/Menu/Menu";
import {Footer} from "../layout/Footer/Footer";
import Call from "../components/Call/Call";

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>TeploHouse | Тепло в Вашем доме</title>
        <meta name="description" content="TeploHouse" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
        </div>
        <div className="burger-menu">
        <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
        <Header />
      <Component {...pageProps} />
        <Footer />
      <Call />
    </>
  );
}