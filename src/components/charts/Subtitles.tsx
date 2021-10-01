import styled from 'styled-components'
import { screen } from '../../styles/constants'

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`

export const SubtitlesCircle = styled('div')<{ color?: string }>`
  border: 3px solid ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
export const SubtitlesLabel = styled.div`
  font-size: 12px;

  @media (${screen.lg}) {
    font-size: 10px;
  }
  @media (${screen.lg}) {
    font-size: 11px;
  }
`
