import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-0 px-2">
      <Head>
        <title>Sample App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-8xl text-purple-400">Hello sample-app!!</h1>
    </div>
  );
};

export default Home;
