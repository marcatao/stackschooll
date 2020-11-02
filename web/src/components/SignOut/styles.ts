import styled from "styled-components";

export const SignOutStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.primaryDark};

  border-radius: 1rem;

  width: 30%;
  height: 60%;

  padding: 0 1rem 0 1rem;

  margin: 0 5rem 0 1rem;

  > svg {
    width: 100%;
    height: 100%;

    > path {
      fill: ${props => props.theme.colors.textPrimary};

      transition: fill 0.2s;
    }
  }

  cursor: pointer;

  &:hover {
    > svg {
      > path {
        fill: ${props => props.theme.colors.textTitle};
      }
    }
  }
`;
