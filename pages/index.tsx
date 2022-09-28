import type { NextPage } from "next";
import Head from "next/head";
import SlideOver from "../components/templates/SlideOver";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Contact Book</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center pt-6">
        <SlideOver />
      </main>
    </div>
  );
};

export default Home;
