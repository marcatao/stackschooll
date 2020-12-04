import styled from "styled-components";

export const SearchAddWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 128px;

  margin: 0 1rem 1rem 0rem;

  position: relative;

  > button {
    width: 128px;
    height: 5rem;

    background: ${props => props.theme.colors.primary};

    position: absolute;
    right: 0;
    top: 121px;

    margin: 0 0 0 1rem;

    &:hover {
      background: ${props => props.theme.colors.primaryDark};
      transition: background 0.3s;
    }

    @media (min-width: 501px) {
      width: 200px;

      height: 100%;
      max-height: 5.85rem;

      position: relative;
      top: 0;
    }

    @media (min-width: 1100px) {
      width: 256px;
    }
  }

  > div > input {
    border-radius: 0.8rem;
  }

  @media (min-width: 501px) {
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 64px;

    margin: 0 1rem 1rem 0rem;
  }
`;
