import React from "react";

import { SearchAdd } from "../Common";

import { ParentWrapper } from "./styles";
import { List } from "../../../components/List";

const Parents = (): JSX.Element => {
  const parents = ["Responsável 1", "Responsável 2"];

  return (
    <ParentWrapper>
      <SearchAdd />

      <List title="Nome do Responsável" items={parents} />
    </ParentWrapper>
  );
};
export { Parents };
