import styled from "styled-components";

export const CardWrapper = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;

  background: ${props => props.theme.colors.primary};
  box-shadow: 1px 1px 10px ${props => props.theme.colors.primary};

  width: 400px;
  min-width: 200px;

  height: 200px;
  max-height: 200px;

  border-radius: 5px;

  margin: 1rem;
  padding: 1rem;
`;

export const StatusHourWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 2rem;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props => props.theme.colors.titlePrimary};
  }

  > div {
    display: flex;
    align-items: center;

    > svg {
      width: 100%;
      height: 100%;

      padding-right: 1rem;

      max-width: 32px;
      max-height: 32px;

      > path {
        fill: ${props => props.theme.colors.lineWhite};
      }
    }

    > span {
      color: ${props => props.theme.colors.titlePrimary};
    }
  }
`;
