import React from "react";

import { LabelStyled } from "./styles";

const Label: React.FC = ({ children }): JSX.Element => {
  return <LabelStyled>{children}</LabelStyled>;
};

export { Label };
