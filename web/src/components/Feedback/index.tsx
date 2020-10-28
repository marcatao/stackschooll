import React from "react";

import { FeedbackWrapper } from "./styles";

import { Title } from "../Title";
import { Label } from "../Label";
import { Button } from "../Button";

import SuccessIcon from "../../assets/images/icons/success-icon.svg";

export interface FeedbackProps {
  title: string;
  description: string;
  button?: string;
  onClick?: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  title,
  description,
  button,
  onClick
}): JSX.Element => {
  return (
    <FeedbackWrapper>
      <SuccessIcon />
      <Title>{title}</Title>
      <Label>{description}</Label>
      <Button name="action" onClick={onClick}>
        {button}
      </Button>
    </FeedbackWrapper>
  );
};

export { Feedback };
