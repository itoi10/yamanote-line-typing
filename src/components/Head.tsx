import type { NextPage } from "next";
import NextHead from "next/head";

type Props = {
  title: string;
};

const Home: React.FC<Props> = ({ title }) => {
  return (
    <>
      <NextHead>
        <title>{title}</title>
      </NextHead>
    </>
  );
};

export default Home;
