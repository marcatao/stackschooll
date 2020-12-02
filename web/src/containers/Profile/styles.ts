import styled from "styled-components";

export const ProfileWrapper = styled.main`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.textPrimary};
  background: ${props => props.theme.colors.primary};
`;

export const FormSection = styled.form`
  display: flex;
  justify-content: center;

  width: 100%;
  min-width: 400px;

  height: 100%;

  padding-top: 2.5rem;

  border-top: 1px solid ${props => props.theme.colors.lineWhite};

  background: ${props => props.theme.colors.background};

  @media (min-width: 501px) {
    height: 100%;
  }

  @media (min-width: 1100px) {
    width: 100%;
    height: 100%;
  }
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  min-width: 400px;

  height: 100%;

  background: ${props => props.theme.colors.boxBase};

  border-radius: 0.5rem;

  padding: 2rem 5rem 2rem 5rem;

  > div {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 500px;
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
      border-radius: 0 0 0.8rem 0.8rem;
    }
  }

  > div > span + span > span {
    color: ${props => props.theme.colors.textBase};
  }

  @media (min-width: 501px) {
    width: 100%;
    height: 100%;

    max-width: calc(100vw - 128px);

    min-height: 400px;
    max-height: 500px;

    padding: 2rem 5rem 2rem 5rem;
  }

  @media (min-width: 700px) {
    padding: 2rem 5rem 2rem 10rem;
  }

  @media (min-width: 1100px) {
    width: 100%;
    height: 100%;

    min-width: 400px;
    max-width: 800px;

    min-height: 400px;
    max-height: 500px;

    padding: 2rem 10rem 2rem 10rem;
  }
`;
