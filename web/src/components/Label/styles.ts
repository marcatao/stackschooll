import styled from "styled-components";

export const LabelStyled = styled.span`
  font-size: 1.25rem;
  line-height: 2.5rem;

  color: ${props => props.theme.colors.textBase};

  @media (min-width: 1100px) {
    font-size: 1.46rem;
    line-height: 2.5rem;
  }
`;
