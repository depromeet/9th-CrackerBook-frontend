import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
