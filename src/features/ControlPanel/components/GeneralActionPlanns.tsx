import React, { useContext, useEffect, useState } from 'react'
import { FaCog } from 'react-icons/fa'
import styled from 'styled-components'
import Card, { CardTitle } from '../../../components/Card'
import PizzaChart, {
  PizzaValueType,
} from '../../../components/charts/PizzaChart'
import {
  Subtitle,
  SubtitlesCircle,
  SubtitlesLabel,
} from '../../../components/charts/Subtitles'
import { colors, screen } from '../../../styles/constants'
import { ControlPanelContext } from '../ContextProvider'

const GeneralActionPlanns: React.FC = () => {
  const { generalActionPlanns } = useContext(ControlPanelContext)

  const [chartData, setchartData] = useState<Array<PizzaValueType>>([])
  const [totalValue] = useState(
    generalActionPlanns
      .map((item) => item.value)
      .reduce((acc, prev) => acc + prev, 0)
  )

  useEffect(() => {
    let data: Array<PizzaValueType> = generalActionPlanns.map((item) => {
      return {
        label: item.label,
        value: item.value / totalValue,
        color: item.color,
      }
    })
    setchartData(data)
  }, [generalActionPlanns, totalValue])

  return (
    <Container>
      <Card>
        <Header>
          <Title>
            <CardTitle>Planos de ação</CardTitle>
            <CardSubtitle>Status geral</CardSubtitle>
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
            {generalActionPlanns.map((item, i) => (
              <Subtitle key={i}>
                <SubtitlesCircle color={item.color}></SubtitlesCircle>
                <SubtitlesLabel>
                  {item.label} -{' '}
                  {Number((item.value / totalValue) * 100).toFixed(1)}%
                </SubtitlesLabel>
              </Subtitle>
            ))}
          </Subtitles>
        </InfoSection>
      </Card>
    </Container>
  )
}

export default GeneralActionPlanns

const Container = styled.div`
  /* height: 120px; */
  /* background: #f23; */
`
const ChartWrapper = styled.div`
  /* background: salmon; */
  padding: 10px;
  text-align: center;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: auto 30px;
  grid-template-rows: auto auto;
  gap: 10px;

  @media (${screen.md}) {
    /* grid-template-columns: auto 300px 30px; */
  }
`

const CardSubtitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
  color: ${colors.dark};
`

const Title = styled.div`
  grid-column: 1 / 2;
  /* background: aqua; */
`
const Settings = styled.button`
  width: fit-content;
  grid-column: 2 / 3;
  background: transparent;
  justify-self: flex-end;
  /* background: salmon; */

  @media (${screen.md}) {
    /* grid-column: 3 / 4; */
  }
`

const InfoSection = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: flex-end;

  /* @media (${screen.md}) {
    grid-template-columns: 60% 40%;
  } */
`
const Subtitles = styled.div``
