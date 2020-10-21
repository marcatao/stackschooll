import styled from "styled-components";
import { GlobalContainer } from "../../styles/global";

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 90px;
`;

export const NavBarSection = styled(GlobalContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1100px) {
    max-width: 1100px;
  }
`;
