import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/constants'

type CardProps = {}

const Card: React.FC<CardProps> = ({ children }) => {
  return <CardContainer>{children}</CardContainer>
}

export default Card

const CardContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${colors.gray};
  padding: 15px;
`

export const CardTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
`
