import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${props => props.theme.colors.secondary};

  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 40px;
  max-height: 40px;

  border-radius: 50%;

  width: 100%;
  height: 100%;
  transition: background 0.2s;

  cursor: pointer;

  > svg {
    width: 100%;
    height: 100%;

    max-width: 24px;
    max-height: 24px;

    min-width: 24px;
    min-height: 24px;

    > path {
      fill: ${props => props.theme.colors.titlePrimary};

      transition: fill 0.2s;
    }
  }

  &:hover {
    background: ${props => props.theme.colors.secondaryDark};
    transition: background 0.2s;
  }

  > svg {
    > path {
      fill: ${props => props.theme.colors.inputBackground};
      transition: fill 0.2s;
    }
  }
`;
