import React from "react";

import { TitleStyled } from "./styles";

const Title: React.FC = ({ children }): JSX.Element => {
  return <TitleStyled>{children}</TitleStyled>;
};

export { Title };
