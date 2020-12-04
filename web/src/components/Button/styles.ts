import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  min-width: 100px;
  max-width: 500px;

  height: 5.85rem;
  min-height: 5rem;
  max-height: 5.85rem;

  border-radius: 0.8rem;
  border: none;

  background: ${props => props.theme.colors.secondary};
  transition: background 0.3s;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secondaryDark};
  }

  &:active {
    outline-color: ${props => props.theme.colors.textTitle};
  }

  > span {
    font: 600 1.666666667rem Archivo;
    line-height: 2.7rem;

    color: ${props => props.theme.colors.buttonText};
  }
`;
