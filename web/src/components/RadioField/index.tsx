import React from "react";

import { RadioButtonWrapper } from "./styles";

import { Label } from "../Label";

import RadioOn from "../../assets/images/icons/radio-on.svg";
import RadioOff from "../../assets/images/icons/radio-off.svg";

export interface RadioProps {
  name: string;
  description: string;
  value?: boolean;
  onClick?: (description: string, value: boolean) => void;
}

const RadioField: React.FC<RadioProps> = ({
  name,
  description,
  value,
  onClick
}): JSX.Element => {
  return (
    <RadioButtonWrapper
      id={name}
      checked={value}
      onClick={() => onClick(description, value)}
    >
      <RadioOff />
      {value && <RadioOn />}
      <Label>{description}</Label>
    </RadioButtonWrapper>
  );
};

export { RadioField };
