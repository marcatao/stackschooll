import styled from "styled-components";

export const TitleStyled = styled.span`
  font: 700 2.5rem Poppins;

  line-height: 3.6rem;
  color: ${props => props.theme.colors.textTitle};

  @media (min-width: 1100px) {
    font: 600 3.75rem Poppins;
    line-height: 3.75rem;
  }
`;
