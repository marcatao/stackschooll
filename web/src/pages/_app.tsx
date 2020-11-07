// eslint-disable-next-line no-use-before-define
import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import theme from "../styles/theme";

import { Dashboard } from "../containers/Dashboard";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard>
        <Component {...pageProps} />
      </Dashboard>

      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MyApp;
