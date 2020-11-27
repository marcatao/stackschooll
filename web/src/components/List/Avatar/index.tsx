import React from "react";

import { AvatarWrapper, AvatarInformation } from "./styles";
import AvatarSVG from "../../../assets/images/icons/avatar-icon-svg.svg";

export interface AvatarProps {
  image?: string;
  name?: string;
  profile?: string;
  email?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  name,
  profile,
  email,
  onClick
}): JSX.Element => {
  return (
    <AvatarWrapper>
      {image !== undefined ? <img src={image} /> : <AvatarSVG />}
      <AvatarInformation>
        <span>{name}</span>
      </AvatarInformation>
    </AvatarWrapper>
  );
};

export { Avatar };
