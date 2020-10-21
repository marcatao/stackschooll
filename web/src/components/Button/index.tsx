import React from "react";

import { ButtonStyle } from "./styles";

import { Label } from "../Label";

export interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  children,
  ...rest
}): JSX.Element => {
  return (
    <ButtonStyle id={name} name={name} {...rest} onClick={onClick}>
      <Label>{children}</Label>
    </ButtonStyle>
  );
};

export { Button };
