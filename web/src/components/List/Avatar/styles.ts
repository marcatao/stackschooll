import styled from "styled-components";

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  // max-width: 300px;
  max-height: 100px;

  padding: 0.5rem;

  border-bottom: 0.1rem solid ${props => props.theme.colors.background};

  > div + div {
    top: 50%;
    left: 18%;
  }

  > img {
    width: 100%;
    height: 100%;

    max-width: 50px;
    max-height: 50px;

    min-width: 32px;
    min-height: 32px;

    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    background: ${props => props.theme.colors.titlePrimary};

    border-radius: 50%;
  }

  > svg {
    max-width: 50px;
    max-height: 50px;

    min-width: 32px;
    min-height: 32px;

    padding-top: 0.25rem;
    padding-bottom: 0.25rem;

    > path {
      fill: ${props => props.theme.colors.textBase};

      transition: fill 0.2s;
    }
  }

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

export const AvatarInformation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-width: 200px;
  max-width: 300px;

  height: 100%;
  max-height: 100px;

  padding-left: 2rem;

  > span {
    font-size: 1.66667rem;
    line-height: 2.5rem;

    color: ${props => props.theme.colors.textBase};
    width: 100%;

    transition: color 0.2s;
  }
`;
