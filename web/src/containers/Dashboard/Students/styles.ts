import styled from "styled-components";

export const StudentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.boxBase};

  width: 100%;
  height: 100%;

  min-width: 450px;

  padding: 1rem;

  > span {
    height: auto;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1100px) {
  }
`;

export const StudentHeader = styled.header`
  display: flex;
  justify-content: flex-end;

  width: 100%;
  height: 64px;

  margin: 0 1rem 1rem 0rem;

  > button {
    width: 128px;
    background: ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => props.theme.colors.primaryDark};

      transition: background 0.3s;
    }

    @media (min-width: 501px) {
      width: 200px;
    }

    @media (min-width: 1100px) {
      width: 256px;
    }
  }
`;
