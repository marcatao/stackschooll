import React from "react";

import SignOutIcon from "../../assets/images/icons/sign-out.svg";

import { SignOutStyle } from "./styles";

interface SignOutProps {
  onClick: () => void;
}

const SignOut: React.FC<SignOutProps> = ({ onClick }): JSX.Element => {
  return (
    <SignOutStyle onClick={onClick}>
      <SignOutIcon />
    </SignOutStyle>
  );
};

export { SignOut };
