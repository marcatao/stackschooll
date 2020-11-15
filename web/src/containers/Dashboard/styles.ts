import styled from "styled-components";

export const DashaboardPageContent = styled.div`
  width: 100vw;
  // width: 100%;
  height: 100vh;

  color: ${props => props.theme.colors.textPrimary};
  display: grid;

  grid-template-columns: 128px auto;
  grid-template-rows: 80px auto 80px;

  grid-row-gap: 5px;

  grid-template-areas:
    "Logo Prof"
    "Main Main"
    "Side Side";

  @media (min-width: 501px) {
    display: grid;

    grid-template-columns: 128px auto 300px;
    grid-template-rows: 80px auto;

    grid-template-areas:
      "Logo TopBar Prof"
      "Side Main   Main";
  }

  @media (min-width: 1100px) {
    display: grid;

    grid-template-columns: 256px auto 400px;
    grid-template-rows: 80px auto;

    grid-template-areas:
      "Logo TopBar Prof"
      "Side Main   Main";
  }
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.primaryDark};
  box-shadow: 5px 1px 5px ${props => props.theme.colors.primary};

  > svg {
    width: 50%;
    height: 50%;

    max-width: 128px;
    max-height: 48px;
  }

  @media (min-width: 501px) {
    grid-area: Logo;
  }

  @media (min-width: 1100px) {
    grid-area: Logo;

    justify-content: center;
    align-items: center;

    background: ${props => props.theme.colors.primaryDark};
  }
`;

export const HeaderWrapper = styled.header`
  display: none;
  background: ${props => props.theme.colors.primaryDark};
  box-shadow: 5px 1px 5px ${props => props.theme.colors.primary};

  padding-left: 2rem;

  > svg {
    width: 100%;
    height: 100%;

    max-width: 128px;
    max-height: 20px;
  }

  @media (min-width: 501px) {
    grid-area: TopBar;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > span {
      color: ${props => props.theme.colors.textPrimary};

      margin-top: 0.8rem;
    }
  }

  @media (max-width: 700px) {
    > svg,
    span {
      display: none;
    }
  }

  @media (min-width: 1100px) {
    grid-area: TopBar;

    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > span {
      color: ${props => props.theme.colors.textPrimary};

      margin-top: 0.8rem;
    }
  }
`;

export const ProfileWrapper = styled.div`
  grid-area: Prof;

  display: flex;
  align-items: center;

  background: linear-gradient(
    to right,
    ${props => props.theme.colors.primaryDark},
    ${props => props.theme.colors.primary}
  );

  box-shadow: 5px 1px 5px ${props => props.theme.colors.primary};

  @media (min-width: 1100px) {
    grid-area: Prof;

    display: flex;

    > span {
      color: ${props => props.theme.colors.textPrimary};

      margin-top: 0.8rem;
    }
  }
`;

export const SideWrapper = styled.aside`
  display: flex;

  grid-area: Side;
  background: ${props => props.theme.colors.inputBackground};
`;

export const MainWrapper = styled.main`
  background: ${props => props.theme.colors.background};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 5rem 1rem 0 2rem;

  > section {
    border-radius: 0.5rem;
  }

  > span {
    margin-bottom: 1rem;
  }

  @media (min-width: 501px) {
    grid-area: Main;

    width: calc(100vw - 128px);
  }

  @media (min-width: 1100px) {
    grid-area: Main;

    width: calc(100vw - 256px);
  }
`;
