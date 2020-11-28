import styled from "styled-components";

export const ParentWrapper = styled.main`
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

  @media (min-width: 501px) {
    min-width: 550px;
  }

  @media (min-width: 1100px) {
  }
`;

export const ParentHeader = styled.header`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  // align-items: center;

  width: 100%;
  height: 128px;

  margin: 0 1rem 1rem 0rem;

  > button {
    width: 128px;
    background: ${props => props.theme.colors.primary};

    margin: 0 0 0 1rem;

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

  @media (min-width: 501px) {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 64px;

    margin: 0 1rem 1rem 0rem;
  }
`;
