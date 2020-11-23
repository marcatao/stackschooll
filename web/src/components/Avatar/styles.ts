import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  width: 100%;
  height: 100%;

  max-width: 300px;
  max-height: 48px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    max-height: 48px;

    min-width: calc(100% - 45px);
    max-width: 300px;

    padding-left: 1rem;

    > span {
      font-size: 1.66667rem;
      line-height: 2.5rem;

      color: ${props => props.theme.colors.titlePrimary};
      width: 100%;

      transition: color 0.2s;
    }

    > span + span {
      font-size: 1.5rem;
      line-height: 1.8rem;
      color: ${props => props.theme.colors.textPrimary};
    }
  }

  > img {
    width: 100%;
    height: 100%;

    max-width: 40px;
    max-height: 40px;

    background: ${props => props.theme.colors.titlePrimary};

    border-radius: 50%;
  }

  > svg {
    max-width: 45px;
    max-height: 45px;

    min-width: 32px;
    min-height: 32px;

    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    > path {
      fill: ${props => props.theme.colors.titlePrimary};

      transition: fill 0.2s;
    }
  }

  &:hover {
    > div {
      > span,
      a {
        color: ${props => props.theme.colors.textPrimary};
      }
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
