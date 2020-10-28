import styled from "styled-components";

import { GlobalContainer } from "../../styles/global";

export const SuccessPageContent = styled.div`
  width: 100vw;
  height: 100vh;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  @media (min-width: 1100px) {
    padding-left: 10%;
    padding-right: 10%;

    width: 100%;
    height: 100%;
  }
`;

export const SectionWrapper = styled(GlobalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 500px;
  min-width: 400px;

  > svg {
    width: 100%;
    height: 100%;

    max-width: 500px;
    max-height: 400px;
  }
`;
