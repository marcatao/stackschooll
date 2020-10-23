import styled from "styled-components";

import { GlobalContainer } from "../../styles/global";

export const RegisterPageContent = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};

  @media (min-width: 1100px) {
    display: grid;

    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "banner section";
  }
`;

export const Banner = styled.section`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 20%;
  min-height: 200px;

  @media (min-width: 1100px) {
    grid-area: banner;

    justify-content: flex-end;

    height: 50vh;

    padding-left: 10%;
    padding-right: 10%;

    width: 100%;
    height: 100%;
  }
`;

export const BannerSection = styled(GlobalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 500px;
  min-width: 400px;

  position: relative;

  > svg {
    width: 100%;
    height: 100%;

    max-width: 500px;
    max-height: 400px;

    position: absolute;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;

  padding-top: 3rem;

  background: ${props => props.theme.colors.background};

  @media (min-width: 1100px) {
    grid-area: section;

    justify-content: flex-start;
    align-items: center;

    padding-left: 10%;
    padding-right: 10%;

    width: 100%;
    height: 100%;
  }
`;

export const ContentSection = styled(GlobalContainer)`
  display: flex;
  flex-direction: column;

  max-width: 500px;

  height: 100%;

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 2rem;

    > span + span {
      margin-top: 2rem;
    }
  }

  > fieldset {
    display: flex;

    width: 100%;
    border: none;

    margin-bottom: 2rem;
  }

  > div > span + span > span {
    color: ${props => props.theme.colors.textBase};
  }

  @media (min-width: 1100px) {
    max-width: 400px;
    max-height: 400px;
  }
`;

export const Header = styled.div`
  display: flex;

  width: 100%;
  max-width: 500px;
  min-width: 400px;

  margin-bottom: 2rem;
`;

export const LogoContainer = styled.div`
  text-align: center;
  z-index: 2;

  > svg {
    height: 10rem;

    > path {
      fill: ${props => props.theme.colors.background};
    }
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
    margin-top: 0.8rem;
  }
`;
