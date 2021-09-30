import React, { useContext } from 'react'
import styled from 'styled-components'
import Card, { CardTitle } from '../../../components/Card'
import Select from '../../../components/Select'
import { colors, screen } from '../../../styles/constants'
import { FaCog } from 'react-icons/fa'
import { ControlPanelContext } from '../ContextProvider'
import BarChart from '../../../components/BarChart'

type EventHistoryProps = {}

const EventHistory: React.FC<EventHistoryProps> = () => {
  const { eventHistory } = useContext(ControlPanelContext)

  const barTypes = [
    { id: 0, label: 'Label 1', color: colors.blue },
    { id: 1, label: 'Label 2', color: colors.red },
    { id: 2, label: 'Label 3', color: colors.lilac },
  ]

  return (
    <Container>
      <Card>
        <Header>
          <Title>
            <CardTitle>Histórico de eventos</CardTitle>
          </Title>
          <Filter>
            <Select options={[{ label: 'Diário' }]} />
          </Filter>
          <Settings>
            <FaCog size={20} />
          </Settings>
        </Header>

        <Chart>
          <BarChart barTypes={barTypes} arrayData={eventHistory} />
        </Chart>

        <ChartSubtitle>
          {barTypes.map((item) => (
            <BarType>
              <BarTypeCircle color={item.color} />
              <BarTypeLabel>{item.label}</BarTypeLabel>
            </BarType>
          ))}
        </ChartSubtitle>
      </Card>
    </Container>
  )
}

export default EventHistory

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: auto auto;
  gap: 10px;

  @media (${screen.md}) {
    grid-template-columns: auto 300px 30px;
  }
`

const Title = styled.div`
  grid-column: 1 / 2;
  /* background: aqua; */
`

const Filter = styled.div`
  grid-row: 2 / 3;
  grid-column: 1 / 3;

  @media (${screen.md}) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }
  /* background: yellowgreen; */
`

const Settings = styled.button`
  width: fit-content;
  grid-column: 2 / 3;
  background: transparent;
  justify-self: flex-end;
  /* background: salmon; */

  @media (${screen.md}) {
    grid-column: 3 / 4;
  }
`

const Chart = styled.div`
  /* background: aqua; */
  max-width: 100%;
  overflow-x: hidden;
  margin-top: 10px;
`
const ChartSubtitle = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  column-gap: 20px;
`

const BarType = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`

const BarTypeCircle = styled('div')<{ color?: string }>`
  border: 3px solid ${(props) => props.color};
  width: 10px;
  height: 10px;
  border-radius: 50%;
`
const BarTypeLabel = styled.div`
  font-size: 13px;
`
