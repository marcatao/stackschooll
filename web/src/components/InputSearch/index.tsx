import React from "react";

import SearchIconSVG from "../../assets/images/icons/search-icon.svg";

import { InputProps, InputField } from "../InputField";

import { IconWrapper } from "./styles";

export type SearchProps = InputProps;

const InputSearch: React.FC<SearchProps> = (props): JSX.Element => {
  const SearchIcon = (): JSX.Element => (
    <div onClick={() => console.log("teste")}>
      <SearchIconSVG />
    </div>
  );

  return <InputField type="text" icon={<SearchIcon />} {...props} />;
};

export { InputSearch };
