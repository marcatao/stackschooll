import React from "react";

import { Label } from "../../components/Label";
import { Avatar } from "../../components/Avatar";
import { Title } from "../../components/Title";

import { CardWrapper, StatusHourWrapper } from "./styles";

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
      <Avatar name={parent} image={parentImage} />
      <Avatar name={student} image={studentImage} />

      <StatusHourWrapper>
        <Title>12:00</Title>
        <Label>Esperando</Label>
      </StatusHourWrapper>
    </CardWrapper>
  );
};
export { Card };
