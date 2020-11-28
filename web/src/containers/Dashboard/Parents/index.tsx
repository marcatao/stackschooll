import React from "react";

import { ParentWrapper, ParentHeader } from "./styles";
import { List } from "../../../components/List";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";

const Parents = (): JSX.Element => {
  const parents = ["Responsável 1", "Responsável 2"];

  return (
    <ParentWrapper>
      <ParentHeader>
        <InputSearch name="search" label="Pesquisar" />
        <Button button="button" name="add" onClick={() => console.log("click")}>
          + Novo
        </Button>
      </ParentHeader>

      <List title="Nome do Responsável" items={parents} />
    </ParentWrapper>
  );
};
export { Parents };
