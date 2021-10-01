import React from 'react'
import styled from 'styled-components'
import { screen } from '../../styles/constants'
import { Page } from '../../styles/global'
import ActionPlanns from './components/ActionPlanns'
import ActionPlannsUpdate from './components/ActionPlannsUpdate'
import EventHistory from './components/EventHistory'
import GeneralActionPlanns from './components/GeneralActionPlanns'
import Inspections from './components/Inspections'
import ScheduledInspections from './components/ScheduledInspections'

export default function ControlPanel(): JSX.Element {
  return (
    <Container>
      <Title>Painel de Controle</Title>
      <EventHistoryWrapper>
        <EventHistory />
      </EventHistoryWrapper>

      <GeneralActionsWrapper>
        <GeneralActionPlanns />
      </GeneralActionsWrapper>

      <InspectionsWrapper>
        <Inspections />
      </InspectionsWrapper>

      <ActionPlannsWrapper>
        <ActionPlanns />
      </ActionPlannsWrapper>

      <ActionPlannsUpdateWrapper>
        <ActionPlannsUpdate />
      </ActionPlannsUpdateWrapper>

      <ScheduledInspectionsWrapper>
        <ScheduledInspections />
      </ScheduledInspectionsWrapper>
    </Container>
  )
}

const Container = styled(Page)`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-rows: 50px repeat(auto-fit, fit-content(300px));
  grid-template-columns: 100%;
  gap: 10px;

  @media (${screen.md}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (${screen.lg}) {
    align-items: stretch;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
`
const EventHistoryWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 1 / 3;
  }
`

const GeneralActionsWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 1 / 3;
  }

  @media (${screen.lg}) {
    grid-column: 3 / 4;
    grid-row: 2;
  }
`
const InspectionsWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 1 / 2;
  }
  @media (${screen.lg}) {
    grid-row: 3;
  }
`
const ActionPlannsWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 2 / 3;
    grid-row: 4;
  }
  @media (${screen.lg}) {
    grid-row: 3;
  }
`

const ActionPlannsUpdateWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 1 / 3;
    grid-row: 5;
  }
  @media (${screen.lg}) {
    grid-column: 3 / 4;
    grid-row: 3 / 5;
  }
`

const ScheduledInspectionsWrapper = styled.div`
  @media (${screen.md}) {
    grid-column: 1 / 3;
    grid-row: 6;
  }
  @media (${screen.lg}) {
    grid-column: 1 / 3;
    grid-row: 4 / 5;
  }
`
