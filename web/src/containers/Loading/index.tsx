import React from "react";

import { Spinner } from "../../components/Spinner";

import LogoSVG from "../../assets/images/logostackschool.svg";

import { Wrapper } from "./styles";

const Loading = (): JSX.Element => {
  return (
    <Wrapper>
      <LogoSVG />
      <Spinner />
    </Wrapper>
  );
};

export default Loading;
