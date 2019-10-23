import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Comfortaa:400,600&display=swap');
*,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Comfortaa', sans-serif;
    background: ${props => props.theme.bgLimeGreen};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    text-decoration: none;
    color: white;
  }
`

export default GlobalStyles