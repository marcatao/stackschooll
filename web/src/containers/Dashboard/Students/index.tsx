import React from "react";

import { SearchAdd } from "../Common";

import { StudentWrapper } from "./styles";
import { List } from "../../../components/List";

import { useAuth } from "../../../contexts/auth";

const Students = (): JSX.Element => {
  const { user } = useAuth();
  const students = ["Aluno 1", "Aluno 2"];

  return (
    <StudentWrapper>
      <SearchAdd />

      <List
        title="Nome do Aluno"
        items={students}
        show={user.profile === "responsavel"}
      />
    </StudentWrapper>
  );
};
export { Students };
