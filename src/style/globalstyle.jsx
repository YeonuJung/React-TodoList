import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body{
background-color: bisque;
width: 100%;
height: 100vh;
box-sizing: border-box;
}
`
export default GlobalStyle;