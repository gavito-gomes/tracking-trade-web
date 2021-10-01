import React from 'react'
import styled from 'styled-components'
import { screen } from '../../styles/constants'
import { Page } from '../../styles/global'
import EventHistory from './components/EventHistory'
import Inspections from './components/Inspections'

export default function ControlPanel(): JSX.Element {
  return (
    <Container>
      <Title>Painel de Controle</Title>
      <EventHistoryWrapper>
        <EventHistory />
      </EventHistoryWrapper>
      <InspectionsWrapper>
        <Inspections />
      </InspectionsWrapper>
    </Container>
  )
}

const Container = styled(Page)`
  padding: 20px;
  display: grid;
  grid-template-rows: 50px repeat(3, fit-content(300px));
  grid-template-columns: 100%;
  gap: 10px;

  @media (${screen.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  grid-column: 1 / 4;
`
const EventHistoryWrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 2;

  @media (${screen.md}) {
    grid-column: 1 / 4;
  }
`

const InspectionsWrapper = styled.div`
  grid-row: 3 / 4;
  grid-column: 1 / 2;

  @media (${screen.md}) {
    grid-column: 1 / 4;
  }
`
