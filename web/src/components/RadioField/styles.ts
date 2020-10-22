import styled from "styled-components";

export interface Props {
  checked: boolean;
}

export const RadioButton = styled.div<Props>`
  display: flex;

  margin: 0.5rem;
  position: relative;

  cursor: pointer;

  > svg {
    margin-right: 1.5rem;

    border: none;
    border-radius: 50%;

    > path {
      fill: ${props => props.theme.colors.secondary};
    }
  }

  > svg:first-child {
    width: 2.5rem;
    height: 2.5rem;
  }

  > svg + svg {
    position: absolute;

    width: 1.5rem;
    height: 1.5rem;

    top: 0.5rem;
    left: 0.5rem;
  }
`;
