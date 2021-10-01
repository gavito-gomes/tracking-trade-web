import React from 'react'
import styled from 'styled-components'

export const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const SubtitlesCircle = styled('div')<{ color?: string }>`
  border: 3px solid ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
export const SubtitlesLabel = styled.div`
  font-size: 13px;
`
