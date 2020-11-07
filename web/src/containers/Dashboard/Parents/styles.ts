import styled from "styled-components";

export const ParentWrapper = styled.section`
  display: flex;

  background: ${props => props.theme.colors.boxBase};

  width: 100%;
  height: 100%;

  min-width: 450px;

  padding: 1rem;

  > span {
    height: auto;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
  }
`;
