import styled from "styled-components";

export const SignOutStyle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  background: ${props => props.theme.colors.primaryDark};

  border-radius: 1rem;

  width: 40px;
  height: 40px;

  > svg {
    width: 25px;
    height: 25px;

    > path {
      fill: ${props => props.theme.colors.textPrimary};
    }
  }

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.primaryDarker};
  }
`;
