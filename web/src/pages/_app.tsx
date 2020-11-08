import React from "react";
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
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
