import React, { InputHTMLAttributes } from "react";

import { MaskWrapper, Input, Label } from "./styles";

import Mask, { MaskProps } from "./Mask";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    MaskProps {
  label: string;
  name: string;
  defaultValue: string;
  icon?: JSX.Element;
}

const InputMask: React.FC<InputProps> = ({
  label,
  name,
  icon,
  mask,
  maskChar,
  defaultValue,
  ...rest
}): JSX.Element => {
  const Icon = (): JSX.Element => <>{icon}</>;

  return (
    <MaskWrapper>
      <Mask defaultValue={defaultValue} mask={mask} maskChar={maskChar}>
        {rest => <Input type="text" id={name} name={name} required {...rest} />}
      </Mask>

      <Label htmlFor={name}>{label}</Label>
      <Icon />
    </MaskWrapper>
  );
};

export { InputMask };
