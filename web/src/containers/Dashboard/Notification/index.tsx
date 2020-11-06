import React from "react";

import { NotificationWrapper } from "./styles";
import { Card } from "../../../components/Card";

const Notification = (): JSX.Element => {
  return (
    <NotificationWrapper>
      <Card parent="Anderson Gomes" student="Anderson Gomes" />
      <Card parent="Anderson Gomes" student="Anderson Gomes" />
    </NotificationWrapper>
  );
};
export { Notification };
