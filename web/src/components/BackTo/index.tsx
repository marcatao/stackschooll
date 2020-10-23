import React from "react";
import Link from "next/link";

import { BackToStyle } from "./styles";

import BackIcon from "../../assets/images/icons/back.svg";

interface BackProps {
  link: string;
}

const BackTo: React.FC<BackProps> = ({ link }): JSX.Element => {
  return (
    <Link href={link}>
      <BackToStyle>
        <BackIcon />
      </BackToStyle>
    </Link>
  );
};

export { BackTo };
