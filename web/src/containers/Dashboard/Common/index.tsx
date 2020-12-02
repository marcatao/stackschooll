import React from "react";

import { SearchAddWrapper } from "./styles";
import { Button } from "../../../components/Button";
import { InputSearch } from "../../../components/InputSearch";

const SearchAdd = (): JSX.Element => {
  return (
    <SearchAddWrapper>
      <InputSearch name="search" label="Pesquisar" />
      <Button button="button" name="add" onClick={() => console.log("click")}>
        + Novo
      </Button>
    </SearchAddWrapper>
  );
};
export { SearchAdd };
