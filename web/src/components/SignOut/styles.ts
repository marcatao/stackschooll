import styled from "styled-components";

export const SignOutStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  max-width: 300px;
  max-height: 48px;

  padding: 0 1rem 0 1rem;
  margin: 0 1rem 0 1rem;

  cursor: pointer;

  > svg {
    max-width: 45px;
    max-height: 45px;

    min-width: 32px;
    min-height: 32px;

    > path {
      fill: ${props => props.theme.colors.titlePrimary};

      transition: fill 0.2s;
    }
  }

  > span {
    font-size: 1.4rem;
    line-height: 3.1rem;
    color: ${props => props.theme.colors.titlePrimary};

    margin: 1rem 1rem;

    transition: color 0.2s;
  }

  &:hover {
    > span,
    a {
      color: ${props => props.theme.colors.textPrimary};
    }

    > svg {
      > path {
        fill: ${props => props.theme.colors.textPrimary};
      }
    }
  }
`;
