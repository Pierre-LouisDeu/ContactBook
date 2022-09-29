import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useState } from "react";
import SlideOver from "../components/templates/SlideOver";
import { ContactContext } from "../context/ContactContext";
import { ReloadContext } from "../context/ReloadContext";

const Home: NextPage = () => {
  const [reload, setReload] = useState(false);
  const [contact, setContact] = useState(0);
  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      <ContactContext.Provider value={{ contact, setContact }}>
        <div className="flex min-h-screen flex-col items-center justify-center py-4">
          <Head>
            <title>Contact Book</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center pt-6">
            <SlideOver />
          </main>
        </div>
      </ContactContext.Provider>
    </ReloadContext.Provider>
  );
};

export default Home;
