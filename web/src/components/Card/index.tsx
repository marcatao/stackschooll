import React from "react";

import { Label } from "../../components/Label";
import { Avatar } from "../../components/Avatar";
import { Title } from "../../components/Title";

import { CardWrapper, StatusHourWrapper } from "./styles";

import ClockIcon from "../../assets/images/icons/clock-icon-svg.svg";

export interface CardProps {
  parent: string;
  student: string;
  parentImage?: string;
  studentImage?: string;
}

const Card: React.FC<CardProps> = ({
  parent,
  student,
  parentImage,
  studentImage
}): JSX.Element => {
  return (
    <CardWrapper>
      <Avatar name={parent} image={parentImage} profile="Responsável" />
      <Avatar name={student} image={studentImage} profile="Aluno" />

      <StatusHourWrapper>
        <div>
          <ClockIcon />
          <Title>12:00</Title>
        </div>

        <Label>Esperando</Label>
      </StatusHourWrapper>
    </CardWrapper>
  );
};
export { Card };
