import React from "react";

import { AvatarWrapper } from "./styles";

import AvatarSVG from "../../assets/images/icons/avatar-icon-svg.svg";

export interface AvatarProps {
  image?: string;
  name?: string;
  profile?: string;
  onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
  image,
  name,
  profile,
  onClick
}): JSX.Element => {
  return (
    <AvatarWrapper onClick={onClick}>
      {image ? <img src={image} /> : <AvatarSVG />}
      <div>
        <span>{name}</span>
        <span>{profile}</span>
      </div>
    </AvatarWrapper>
  );
};

export { Avatar };
