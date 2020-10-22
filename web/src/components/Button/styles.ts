import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 100%;
  height: 5.85rem;

  min-height: 5.85rem;

  border-radius: 0.8rem;
  border: none;

  background: ${props => props.theme.colors.secondary};
  transition: background 0.3s;

  cursor: pointer;

  &:hover {
    background: ${props => props.theme.colors.secondaryDark};
  }

  > span {
    font: 600 1.666666667rem Archivo;
    line-height: 2.7rem;

    color: ${props => props.theme.colors.buttonText};
  }
`;
