import React from "react";

import { NavBar, NavBarSection } from "./styles";

const Header: React.FC = ({ children }) => {
  return (
    <NavBar>
      <NavBarSection>{children}</NavBarSection>
    </NavBar>
  );
};

export { Header };
