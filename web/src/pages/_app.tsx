import React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import Layout from "../containers/Layout";

import { AuthProvider } from "../contexts/auth";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <Head>
            <title>StackSchool</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
