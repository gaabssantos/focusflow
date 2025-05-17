import { createGlobalStyle } from 'styled-components';
import themes from './themes.styles';

const colors = themes.light.colors;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 80px;
  }
        
  body {
    color: ${colors.dark};
    background-color: ${colors.light};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;
export default GlobalStyles;
