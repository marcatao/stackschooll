import React from "react";

import { Wrapper } from "./styles";

import SpinnerSVG from "../../assets/images/icons/spinner-icon-svg-svg2.svg";

const Spinner = (): JSX.Element => {
  return (
    <Wrapper>
      <SpinnerSVG />
    </Wrapper>
  );
};

export { Spinner };
