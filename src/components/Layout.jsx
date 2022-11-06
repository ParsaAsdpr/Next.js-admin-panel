import Head from "next/head";
import React from "react";
import Header from "../containers/Header";
import Sidebar from "../containers/Sidebar";

const Layout = ({ title, children }) => {
  return (
    <div dir="rtl" id="yourAppElement">
    <Head>
      <title>Admin Panel</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="flex flex-row">
      <div className="w-2/12 h-screen">
        <Sidebar />
      </div>

      <div className="w-full">
        <Header title={title} />
        {children}
      </div>
    </div>
  </div>

  );
};

export default Layout;
