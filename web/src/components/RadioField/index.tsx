import React, { useState } from "react";

import { RadioButton } from "./styles";

import { Label } from "../Label";

import RadioOn from "../../assets/images/icons/radio-on.svg";
import RadioOff from "../../assets/images/icons/radio-off.svg";

export interface RadioProps {
  description: string;
  isChecked?: () => boolean;
  onClick?: (value: boolean) => void;
}

const RadioField: React.FC<RadioProps> = ({
  description,
  onClick
}): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <RadioButton
      checked={checked}
      onClick={() => {
        setChecked(!checked);

        if (onClick) {
          onClick(checked);
        }
      }}
    >
      <RadioOff />
      {checked && <RadioOn />}
      <Label>{description}</Label>
    </RadioButton>
  );
};

export { RadioField };
