import styled from "styled-components";

export interface Props {
  checked: boolean;
}

export const CheckBox = styled.div<Props>`
  display: flex;
  cursor: pointer;

  > svg {
    width: 2.5rem;
    height: 2.5rem;

    margin-right: 1.5rem;

    background: ${props => (props.checked ? "" : props.theme.colors.boxBase)};

    border: 0.1rem solid ${props => props.theme.colors.lineWhite};

    border-radius: 0.8rem;

    > path {
      fill: ${props =>
        props.checked
          ? props.theme.colors.secondary
          : props.theme.colors.boxBase};
    }
  }
`;
