import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  max-width: 300px;
  max-height: 48px;

  > img {
    width: 40px;
    height: 40px;

    background: ${props => props.theme.colors.titlePrimary};

    border-radius: 50%;
  }

  > svg {
    width: 15%;
    height: 15%;

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

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
