import styled from "styled-components";

export const ListWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;

export const HeaderList = styled.header`
  display: flex;
  align-items: center;

  width: 100%;
  height: 64px;

  padding: 1rem;

  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  background: ${props => props.theme.colors.inputBackground};
  box-shadow: 0px 1px 5px ${props => props.theme.colors.background};

  > span {
    color: ${props => props.theme.colors.textBase};
    font: 500 1.6666667rem Poppins;

    opacity: 0.8;
  }
`;

export const ItemsWrapper = styled.section`
  display: flex;
  flex-direction: column;

  height: 100%;

  border-top: 0.1rem solid ${props => props.theme.colors.background};
`;
