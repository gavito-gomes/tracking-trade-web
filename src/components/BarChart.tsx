import React, { useState } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/constants'

interface BarType {
  id: number
  label: string
  color?: string
}

type BarChartProps<X, Y> = {
  barTypes: Array<BarType>
  arrayData?: Array<BarValueType<X, Y>>
}

export type BarValueType<X, Y> = {
  valueX: X
  bars: Array<{
    barTypeId: number
    valueY: Y
  }>
}

function BarChart<X, Y>({
  barTypes,
  arrayData,
}: BarChartProps<X, Y>): JSX.Element {
  const maxValueY = arrayData
    ?.map((item) => item.bars.map((bar) => bar.valueY))
    .flat()
    .sort((a, b) => Number(b) - Number(a))
    .shift()

  const barColor = (id: number) => {
    let barType = barTypes.filter((item) => item.id === id).shift()
    return barType ? barType.color : colors.gray
  }

  const [viewScroll, setviewScroll] = useState(false)

  return (
    <Container
      onMouseEnter={() => setviewScroll(true)}
      onMouseLeave={() => setviewScroll(false)}
      viewScroll={viewScroll}
    >
      {arrayData?.map((item) => {
        return (
          <BarGroup>
            <Bars>
              {item.bars.map((bar) => (
                <Bar>
                  <BarValueLabel>
                    {Number(bar.valueY) > 0 ? bar.valueY : ''}
                  </BarValueLabel>
                  <BarValue
                    background={barColor(bar.barTypeId)}
                    height={`${
                      (Number(bar.valueY) / Number(maxValueY)) * 100
                    }%`}
                  />
                </Bar>
              ))}
            </Bars>
            <LabelX>{item.valueX}</LabelX>
          </BarGroup>
        )
      })}
    </Container>
  )
}

export default BarChart

const Container = styled('div')<{ viewScroll?: boolean }>`
  width: 100%;
  /* background: #f44; */
  height: 160px;
  display: flex;
  overflow-x: auto;
  padding-bottom: 10px;
  ::-webkit-scrollbar {
    height: 4px;
  }
  ::-webkit-scrollbar-track {
    background: ${(props) => (props.viewScroll ? colors.light : 'transparent')};
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) =>
      props.viewScroll ? colors.darkgray : 'transparent'};
  }
`

const BarGroup = styled.div`
  /* background: #ff4; */
  height: 100%;
  flex: 0 0 70px;
  align-self: flex-end;
  text-align: center;
  margin: 0 3px;
  display: grid;
  grid-template-rows: auto 20px;
`

const Bars = styled.div`
  /* background: aqua; */
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  gap: 5px;
`

const LabelX = styled.label`
  font-weight: 500;
  font-size: 12px;
`
const Bar = styled.div`
  height: 100%;
  width: 10px;
  /* background: yellow; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const BarValue = styled('div')<{
  background?: string
  height?: number | string
}>`
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  width: 100%;
`
const BarValueLabel = styled.div`
  font-size: 10px;
`
