import React, { useContext, useEffect, useState } from 'react'
import { FaCog } from 'react-icons/fa'
import styled from 'styled-components'
import Card, { CardSubtitle, CardTitle } from '../../../components/Card'
import PizzaChart, {
  PizzaValueType,
} from '../../../components/charts/PizzaChart'
import {
  Subtitle,
  SubtitlesCircle,
  SubtitlesLabel,
} from '../../../components/charts/Subtitles'
import { screen } from '../../../styles/constants'
import { ControlPanelContext } from '../ContextProvider'

const ActionPlanns: React.FC = () => {
  const { actionPlanns, actionPlannsAverageTime } =
    useContext(ControlPanelContext)

  const [chartData, setchartData] = useState<Array<PizzaValueType>>([])
  const [totalValue] = useState(
    actionPlanns.map((item) => item.value).reduce((acc, prev) => acc + prev, 0)
  )

  useEffect(() => {
    let data: Array<PizzaValueType> = actionPlanns.map((item) => {
      return {
        label: item.label,
        value: item.value / totalValue,
        color: item.color,
      }
    })
    setchartData(data)
  }, [actionPlanns, totalValue])

  return (
    <Container>
      <Card>
        <Header>
          <Title>
            <CardTitle>Planos de ação</CardTitle>
            <CardSubtitle>Status do dia</CardSubtitle>
          </Title>
          <Settings>
            <FaCog size={20} />
          </Settings>
        </Header>
        <ChartWrapper>
          <PizzaChart arrayData={chartData} chartSize={100} />
        </ChartWrapper>
        <InfoSection>
          <Subtitles>
            {actionPlanns.map((item, i) => (
              <Subtitle key={i}>
                <SubtitlesCircle color={item.color}></SubtitlesCircle>
                <SubtitlesLabel>
                  {item.label} -{' '}
                  {Number((item.value / totalValue) * 100).toFixed(1)}%
                </SubtitlesLabel>
              </Subtitle>
            ))}
          </Subtitles>
          <TimeInfo>
            <CardSubtitle>Média de tempo</CardSubtitle>
            <TimeAverage>
              {actionPlannsAverageTime.map((item, i) => (
                <>
                  <TimeLabel>{item.label}</TimeLabel>
                  <TimeValue>{item.value}</TimeValue>
                </>
              ))}
            </TimeAverage>
          </TimeInfo>
        </InfoSection>
      </Card>
    </Container>
  )
}

export default ActionPlanns

const Container = styled.div``
const ChartWrapper = styled.div`
  padding: 10px;
  text-align: center;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: auto auto;
  gap: 10px;
`
const Title = styled.div`
  grid-column: 1 / 2;
`
const Settings = styled.button`
  width: fit-content;
  grid-column: 2 / 3;
  background: transparent;
  justify-self: flex-end;
`

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-end;
`
const Subtitles = styled.div``

const TimeInfo = styled.div`
  justify-self: flex-end;
`

const TimeAverage = styled.div`
  margin-top: 5px;
  display: grid;
  grid-template-columns: fit-content(200px) auto;
`

const TimeLabel = styled(SubtitlesLabel)`
  grid-column: 1;
  padding-right: 10px;
  margin-bottom: 5px;

  @media (${screen.sm}) {
  }
  @media (${screen.lg}) {
    font-size: 10px;
  }
`
const TimeValue = styled(SubtitlesLabel)`
  grid-column: 2;
  @media (${screen.lg}) {
    font-size: 10px;
  }
`
