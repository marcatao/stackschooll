import React from "react";

import { NotificationWrapper } from "./styles";
import { Card } from "../../../components/Card";

const Notifications = (): JSX.Element => {
  return (
    <NotificationWrapper>
      <Card parent="Responsável do Aluno 1" student="Aluno 1" />
      <Card parent="Responsável do Aluno 2" student="Aluno 2" />
    </NotificationWrapper>
  );
};
export { Notifications };
