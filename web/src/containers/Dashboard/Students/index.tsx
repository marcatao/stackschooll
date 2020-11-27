import React from "react";

import { StudentWrapper } from "./styles";
// import { Title } from "../../../components/Title";

import { List } from "../../../components/List";

const Students = (): JSX.Element => {
  const students = ["Aluno 1", "Aluno 2"];

  return (
    <StudentWrapper>
      <List title="Nome do Aluno" items={students} />
    </StudentWrapper>
  );
};
export { Students };
