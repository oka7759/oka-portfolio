import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

const GlobalStyles = styled.createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`

export default GlobalStyles
