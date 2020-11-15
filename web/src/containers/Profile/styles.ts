import styled from "styled-components";

export const ProfileWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
`;

export const FormSection = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 80%;

  padding-top: 3rem;
  border-top: 1px solid ${props => props.theme.colors.lineWhite};

  background: ${props => props.theme.colors.background};

  @media (min-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 500px;

  height: 100%;

  background: ${props => props.theme.colors.boxBase};

  border-radius: 0.5rem;

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-bottom: 2rem;

    > span + span {
      margin-top: 2rem;
    }
  }

  > fieldset {
    display: flex;

    flex-direction: column;

    width: 100%;
    border: none;

    margin-bottom: 2rem;

    > div > input {
      border-radius: 0.8rem 0.8rem 0 0;
    }

    > div + div > input {
      border-radius: 0 0 0 0;
    }

    > div + div + div > input {
      border-radius: 0 0 0.8rem 0.8rem;
    }
  }

  > div > span + span > span {
    color: ${props => props.theme.colors.textBase};
  }

  @media (min-width: 1100px) {
    width: 100%;

    min-width: 400px;
    max-width: 800px;

    max-height: 600px;

    padding: 5rem 10rem 5rem 10rem;
  }
`;
