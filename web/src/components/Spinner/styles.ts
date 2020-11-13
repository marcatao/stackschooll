import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  max-width: 64px;
  max-height: 64px;

  min-width: 32px;
  min-height: 32px;

  > svg {
    width: 100%;
    height: 100%;

    > path {
      fill: ${props => props.theme.colors.primary};
    }

    animation: spinner 1s linear infinite;
  }

  @keyframes spinner {
    from {
      transform: rotate(0deg);
      opacity: 0.75;
    }
    to {
      transform: rotate(360deg);
      opacity: 1;
    }
  }
`;
