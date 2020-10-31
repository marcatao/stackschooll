import styled from "styled-components";

export const DashaboardPageContent = styled.div`
  width: 100vw;
  height: 100vh;

  color: ${props => props.theme.colors.textPrimary};

  @media (min-width: 1100px) {
    display: grid;

    grid-template-columns: 256px auto 256px;
    grid-template-rows: 64px auto;

    grid-template-areas:
      "Logo TopBar Prof"
      "Side Main   Main";
  }
`;
export const LogoWrapper = styled.div`
  @media (min-width: 1100px) {
    grid-area: Logo;

    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const HeaderWrapper = styled.header`
  @media (min-width: 1100px) {
    grid-area: TopBar;

    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const ProfileWrapper = styled.div`
  @media (min-width: 1100px) {
    grid-area: Prof;

    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const SideWrapper = styled.aside`
  @media (min-width: 1100px) {
    grid-area: Side;

    background: ${props => props.theme.colors.inputBackground};
  }
`;

export const MainWrapper = styled.main`
  @media (min-width: 1100px) {
    grid-area: Main;

    background: ${props => props.theme.colors.background};
  }
`;
