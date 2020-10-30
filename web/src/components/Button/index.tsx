import React from "react";

import { ButtonStyle } from "./styles";

import { Label } from "../Label";

export interface ButtonProps {
  button?: "reset" | "button" | "submit";
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  onClick,
  children,
  button,
  ...rest
}): JSX.Element => {
  return (
    <ButtonStyle
      type={button}
      id={name}
      name={name}
      {...rest}
      onClick={onClick}
    >
      <Label>{children}</Label>
    </ButtonStyle>
  );
};

export { Button };
