import React, { useState } from "react";

import { CheckBox } from "./styles";

import { Label } from "../Label";

import CheckYes from "../../assets/images/icons/check-yes.svg";
import CheckNo from "../../assets/images/icons/check-no.svg";

export interface CheckBoxProps {
  description: string;
  isChecked?: () => boolean;
  onClick?: (value: boolean) => void;
}

const CheckBoxField: React.FC<CheckBoxProps> = ({
  description,
  onClick
}): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(true);

  return (
    <CheckBox
      checked={checked}
      onClick={() => {
        setChecked(!checked);

        if (onClick) {
          onClick(checked);
        }
      }}
    >
      {checked ? <CheckYes /> : <CheckNo />}
      <Label>{description}</Label>
    </CheckBox>
  );
};

export { CheckBoxField };
