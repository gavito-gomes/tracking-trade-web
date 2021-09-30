import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    background: ${colors.white};
    font-family: Arial, Helvetica, sans-serif;
  }
`

export const Page = styled.div`
  height: 100%;
`
