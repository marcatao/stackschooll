import React from "react";

import { StudentWrapper, StudentHeader } from "./styles";
import { Button } from "../../../components/Button";

import { List } from "../../../components/List";

const Students = (): JSX.Element => {
  const students = ["Aluno 1", "Aluno 2"];

  return (
    <StudentWrapper>
      <StudentHeader>
        <Button button="button" name="add" onClick={() => console.log("click")}>
          + Novo
        </Button>
      </StudentHeader>

      <List title="Nome do Aluno" items={students} />
    </StudentWrapper>
  );
};
export { Students };
