import React from "react";

import CameraSVG from "../../../assets/images/icons/camera-icon-svg.svg";
import { Wrapper } from "./styles";

interface CameraProps {
  onClick?: () => void;
}

const Camera: React.FC<CameraProps> = ({ onClick, ...rest }): JSX.Element => {
  return (
    <Wrapper onClick={onClick} {...rest}>
      <CameraSVG />
    </Wrapper>
  );
};

export { Camera };
