import React from "react";

import { Spinner } from "../../components/Spinner";

import { Wrapper } from "./styles";

const Loading = (): JSX.Element => {
  return (
    <Wrapper>
      <Spinner />
    </Wrapper>
  );
};

export default Loading;
