import React from "react";

import { SearchAdd } from "../Common";

import { StudentWrapper } from "./styles";
import { List } from "../../../components/List";

const Students = (): JSX.Element => {
  const students = ["Aluno 1", "Aluno 2"];

  return (
    <StudentWrapper>
      <SearchAdd />

      <List title="Nome do Aluno" items={students} />
    </StudentWrapper>
  );
};
export { Students };
