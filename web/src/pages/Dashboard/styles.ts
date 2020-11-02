import styled from "styled-components";

export const DashaboardPageContent = styled.div`
  width: 100vw;
  height: 100vh;

  color: ${props => props.theme.colors.textPrimary};

  @media (min-width: 1100px) {
    display: grid;

    grid-template-columns: 256px auto 256px;
    grid-template-rows: 80px auto;

    grid-template-areas:
      "Logo TopBar Prof"
      "Side Main   Main";
  }
`;
export const LogoWrapper = styled.div`
  display: flex;

  @media (min-width: 1100px) {
    grid-area: Logo;

    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.primaryDark};

    > svg {
      width: 50%;
      height: 50%;
    }
  }
`;

export const HeaderWrapper = styled.header`
  display: flex;

  @media (min-width: 1100px) {
    grid-area: TopBar;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background: ${props => props.theme.colors.primaryDark};

    > svg {
      width: 25%;
      height: 25%;
    }

    > span {
      // color: ${props => props.theme.colors.titlePrimary};
      color: ${props => props.theme.colors.textPrimary};

      margin-top: 0.8rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  @media (min-width: 1100px) {
    grid-area: Prof;

    display: flex;
    justify-content: center;
    align-items: center;

    background: linear-gradient(
      to right,
      ${props => props.theme.colors.primaryDark},
      ${props => props.theme.colors.primary}
    );
  }
`;

export const SideWrapper = styled.aside`
  @media (min-width: 1100px) {
    grid-area: Side;

    background: ${props => props.theme.colors.inputBackground};
    /* background: linear-gradient(
      to bottom,
      ${props =>
      props.theme.colors.primaryDark},
      ${props =>
      props.theme.colors.inputBackground}
    ); */
  }
`;

export const MainWrapper = styled.main`
  @media (min-width: 1100px) {
    grid-area: Main;

    display: flex;

    padding: 5rem 0 0 5rem;

    background: ${props => props.theme.colors.background};

    //> span {
    //color: ${props => props.theme.colors.primary};
    //}
  }
`;
