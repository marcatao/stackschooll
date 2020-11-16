import React from "react";

import InputMask from "react-input-mask";

export interface MaskProps {
  mask: string;
  maskChar: string;
  defaultValue: string;
}

const Mask: React.FC<MaskProps> = ({
  defaultValue,
  mask,
  maskChar,
  ...props
}) => {
  return (
    <InputMask
      {...props}
      defaultValue={defaultValue}
      mask={mask}
      maskChar={maskChar}
    />
  );
};

export default Mask;
