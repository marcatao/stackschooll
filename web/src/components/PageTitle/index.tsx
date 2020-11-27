import React from "react";
import Head from "next/head";

const PageTitle: React.FC = ({ children }) => {
  return (
    <Head>
      <title>{children}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default PageTitle;
