import React from "react";
import Link from "next/link";

import SignOutIcon from "../../assets/images/icons/sign-out.svg";

import { SignOutStyle } from "./styles";

const SignOut = (): JSX.Element => {
  return (
    <Link href="/">
      <SignOutStyle>
        <SignOutIcon />
      </SignOutStyle>
    </Link>
  );
};

export { SignOut };
