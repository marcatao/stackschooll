import React from "react";

import InputMask from "react-input-mask";

export interface MaskProps {
  mask: string;
  maskChar: string;
}

const Mask: React.FC<MaskProps> = ({ mask, maskChar, ...props }) => {
  return <InputMask {...props} mask={mask} maskChar={maskChar} />;
};

export default Mask;
