import React, { InputHTMLAttributes } from "react";

import { InputWrapper, Input, Label } from "./styles";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  icon?: JSX.Element;
}

const InputField: React.FC<InputProps> = ({
  label,
  name,
  icon,
  ...rest
}): JSX.Element => {
  const Icon = (): JSX.Element => <>{icon}</>;

  return (
    <InputWrapper>
      <Input type="text" id={name} name={name} required {...rest} />
      <Label htmlFor={name}>{label}</Label>
      <Icon />
    </InputWrapper>
  );
};

export { InputField };
