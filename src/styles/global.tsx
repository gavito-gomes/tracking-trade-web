import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Poppins', serif !important;
  }
  
  html, body, #root {
    font-size: 14px;
    height: 100%;
    background: ${colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
  }

  button {
    :hover {
      cursor: pointer;
    }
  }
`

export const Page = styled.div`
  height: 100%;
`
