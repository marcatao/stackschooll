import styled from "styled-components";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  max-width: 500px;
  max-height: 400px;

  > svg {
    width: 10rem;
    height: 10rem;

    @media (min-width: 1100px) {
      width: 100%;
      height: 100%;
    }
  }

  > svg + span {
    font: 700 3.33rem Poppins;

    text-align: center;

    line-height: 3.85rem;
    color: ${props => props.theme.colors.titlePrimary};

    width: 50%;

    margin-top: 2.5rem;

    @media (min-width: 1100px) {
      font-size: 3.75rem;
      line-height: 4.37rem;

      width: 100%;
    }
  }

  > span + span {
    font: 400 1.45rem Poppins;

    text-align: center;

    line-height: 2.5rem;
    color: ${props => props.theme.colors.textPrimary};

    width: 80%;

    margin-top: 1.66rem;

    @media (min-width: 1100px) {
      font-size: 1.66rem;
      line-height: 2.5rem;

      width: 100%;
    }
  }

  > button {
    width: 80%;

    margin-top: 5rem;
  }
`;
