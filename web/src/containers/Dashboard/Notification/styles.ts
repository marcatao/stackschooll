import styled from "styled-components";

export const NotificationWrapper = styled.section`
  display: flex;
  flex-direction: column;

  background: ${props => props.theme.colors.boxBase};

  width: 100%;
  height: 100%;

  min-width: 450px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1100px) {
    display: flex;
    flex-direction: row;
  }
`;
