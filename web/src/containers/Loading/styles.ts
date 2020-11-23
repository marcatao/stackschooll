import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors.background};

  > svg {
    margin: 5rem;

    path {
      fill: ${props => props.theme.colors.primary};
    }
  }
`;
