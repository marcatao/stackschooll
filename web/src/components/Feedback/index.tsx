import React from "react";

import { FeedbackWrapper } from "./styles";

import { Title } from "../Title";
import { Label } from "../Label";
import { Button } from "../Button";

import SuccessIcon from "../../assets/images/icons/success-icon.svg";

export interface FeedbackProps {
  title: string;
  label: string;
  button?: string;
  onClick?: () => void;
}

const Feedback: React.FC<FeedbackProps> = ({
  title,
  label,
  button,
  onClick
}): JSX.Element => {
  return (
    <FeedbackWrapper>
      <SuccessIcon />
      <Title>Cadastro concluído</Title>
      <Label>
        Agora você faz da plataforma da Proffy. Tenho uma ótima experiência.
      </Label>
      <Button name="action" onClick={onClick}>
        {button}
      </Button>
    </FeedbackWrapper>
  );
};

export { Feedback };
