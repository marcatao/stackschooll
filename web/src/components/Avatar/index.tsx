import React from "react";

import { AvatarWrapper } from "./styles";

import AvatarSVG from "../../assets/images/icons/avatar-icon-svg.svg";

export interface AvatarProps {
  image?: string;
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, name }): JSX.Element => {
  return (
    <AvatarWrapper>
      {image ? <img src={image} /> : <AvatarSVG />}
      <span>{name}</span>
    </AvatarWrapper>
  );
};

export { Avatar };
