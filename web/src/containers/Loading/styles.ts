import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors.background};
`;
