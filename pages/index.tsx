import type { NextPage } from "next";
import Head from "next/head";
import React, { useContext, useState } from "react";
import SlideOver from "../components/templates/SlideOver";
import { ReloadContext } from "../context/ReloadContext";
import { ContactContext } from "../context/ContactContext";
import { PanelContext } from "../context/PanelContext";

const Home: NextPage = () => {
  const [reload, setReload] = useState(false);
  const [contact, setContact] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <ReloadContext.Provider value={{ reload, setReload }}>
      <ContactContext.Provider value={{ contact, setContact }}>
        <PanelContext.Provider value={{ open, setOpen }}>
          <div className="flex min-h-screen flex-col items-center py-4">
            <Head>
              <title>Contact Book</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="flex w-full flex-1 flex-col px-20 text-center pt-6 items-center pt-24">
              <SlideOver open={open} />
            </main>
          </div>
        </PanelContext.Provider>
      </ContactContext.Provider>
    </ReloadContext.Provider>
  );
};

export default Home;
