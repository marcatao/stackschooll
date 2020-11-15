import React from "react";

import SignOutIcon from "../../assets/images/icons/sign-out.svg";

import { SignOutStyle } from "./styles";

interface SignOutProps {
  onClick: () => void;
  title?: string;
}

const SignOut: React.FC<SignOutProps> = ({ title, onClick }): JSX.Element => {
  return (
    <SignOutStyle onClick={onClick}>
      <SignOutIcon />
      <span>{title}</span>
    </SignOutStyle>
  );
};

export { SignOut };
