import React from "react";

import { AvatarContent } from "./styles";

export interface AvatarProps {
  image?: string;
  name?: string;
}

const Avatar: React.FC<AvatarProps> = ({ image, name }): JSX.Element => {
  return (
    <AvatarContent>
      <img src={image} />
      <span>{name}</span>
    </AvatarContent>
  );
};

export { Avatar };
