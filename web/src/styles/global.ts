import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,body, #__next {
      height: 100vh;
      font-size: ${props => props.theme.font.fontSize};
    }

    body {
      background: ${props => props.theme.colors.background};
    }

    #__next {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    body,
    input,
    button,
    textarea {
      font: 500 1.6rem Poppins;
      color: ${props => props.theme.colors.textBase};
    }

    a {
      text-decoration: none;

      cursor: pointer;
    }

    @media (min-width: 700px) {
      #__next {
        font-size: 62.5%;
      }
    }
`;

export const GlobalContainer = styled.div`
  width: 90vw;
  max-width: 700px;
`;
